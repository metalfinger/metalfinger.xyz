var currentStage = 0;
var maxStage = 20;


var testElement = $('#containerID');
function run(v) {
    $(v[0]).animate(v[1], {
        duration: 500,
        step: function (val) {
            testElement.css("transform", `translateY(${val}%)`);
        },
        complete:  function() {
            scrollAnimating = false;
        } 
    })
}

var scrollAnimating = false;

$('#mainBody').bind('mousewheel', function (e) {
    console.log(e.originalEvent.wheelDelta+"      <------   WHEEL DELTA")
    if(!scrollAnimating){
    if (e.originalEvent.wheelDelta  > 2) 
    {
        console.log('DOWN');
        event.preventDefault();
        moveDown();
    } else if (e.originalEvent.wheelDelta  < -2) {
        event.preventDefault();
        console.log('UP');
        moveUp();
    }}
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