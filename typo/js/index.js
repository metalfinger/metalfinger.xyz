var currentStage = 0;
var maxStage = 20;


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
    console.log(e.originalEvent.wheelDelta / 240+"      <------   WHEEL DELTA")
    if (e.originalEvent.wheelDelta / 240 > 0) {
        console.log('DOWN');
        moveDown();
    } else {
        console.log('UP');
        moveUp();
    }
});

// MOVE UP FUNCTION
function moveUp() {
    var perObject = 100 / maxStage;
    var newY = currentStage + 1;

    if (newY == maxStage) {
        newY -= 1;
    }

    console.log(currentStage + "  " + newY + "  " + maxStage);
    run([{ y: -(perObject * currentStage) }, { y: -(perObject * newY) }])
    currentStage = newY;
}

// MOVE DOWN FUNCTION
function moveDown() {
    var perObject = 100 / maxStage;
    var newY = currentStage - 1;

    if (newY < 0) {
        newY += 1;
    }
    console.log(currentStage + "  " + newY + "  " + maxStage);
    run([{ y: -(perObject * currentStage) }, { y: -(perObject * newY) }])
    currentStage = newY;
}