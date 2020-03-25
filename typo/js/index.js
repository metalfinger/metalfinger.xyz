var currentStage = 0;
var maxStage = 20;

var hideScrollText = false;


var testElement = $('#containerID');
function run(v) {
    $(v[0]).animate(v[1], {
        duration: 300,
        step: function (val) {
            testElement.css("transform", `translateY(${val}%)`);
        },
        complete: function () {
            scrollAnimating = false;
        }
    })
}

var scrollAnimating = false;

$('#mainBody').bind('mousewheel', function (e) {
    console.log(e.originalEvent.wheelDelta + "      <------   WHEEL DELTA")


    if (!scrollAnimating) {
        if (e.originalEvent.wheelDelta > 2) {            
            moveDown();
        } else if (e.originalEvent.wheelDelta < -2) {
            console.log("trigger");
            if (!hideScrollText) {
                hideScrollText = true;

                document.getElementById("scroll-metalfinger").style.opacity = "0.0";
            }
            moveUp();
        }
    }
});

// MOVE UP FUNCTION
function moveUp() {
    var perObject = 100 / maxStage;
    var newY = currentStage + 1;
    scrollAnimating = true;

    if (newY == maxStage) {
        newY -= 1;
        scrollAnimating = false;
    }

    console.log(currentStage + "  " + newY + "  " + maxStage);
    run([{ y: -(perObject * currentStage) }, { y: -(perObject * newY) }])
    currentStage = newY;
}

// MOVE DOWN FUNCTION
function moveDown() {
    var perObject = 100 / maxStage;
    var newY = currentStage - 1;
    scrollAnimating = true;

    if (newY < 0) {
        newY += 1;
        scrollAnimating = false;
    }
    console.log(currentStage + "  " + newY + "  " + maxStage);
    run([{ y: -(perObject * currentStage) }, { y: -(perObject * newY) }])
    currentStage = newY;
}




//!FOR MOBILE DEVICES
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* left swipe */
        } else {
            /* right swipe */
        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
            moveUp();
        } else {
            /* down swipe */
            moveDown();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};