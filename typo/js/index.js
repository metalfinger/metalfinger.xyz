function moveUp() {
    var perObject = 100 / 4;
    var newY = currentY + 1;

    if (newY == totalObject) {
        // newY = 0;
        newY -= 1;
    }

    console.log(currentY + "  " + newY);
    run([{ y: -(perObject * currentY) }, { y: -(perObject * newY) }])
    currentY = newY;
}

function moveDown() {
    var perObject = 100 / 4;
    var newY = currentY - 1;

    if (newY < 0) {
        // newY = totalObject-1;
        newY += 1;
    }

    console.log(currentY + "  " + newY);
    run([{ y: -(perObject * currentY) }, { y: -(perObject * newY) }])
    currentY = newY;
}

var currentY = 0;
var totalObject = 4;


var testElement = $('#containerID');
function run(v) {
    $(v[0]).animate(v[1], {
        duration: 500,
        step: function (val) {
            testElement.css("transform", `translateY(${val}%)`);
        }
    })
}



$('#mainBody').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
        console.log('up');
        moveDown();
    } else {
        console.log('down');
        moveUp();
    }
});