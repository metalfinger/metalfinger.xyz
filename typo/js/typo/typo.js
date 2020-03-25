var rendererColorArray = [];
rendererColorArray.push({ r: 0, g: 0, b: 0 }); //0
rendererColorArray.push({ r: 255 / 255, g: 0 / 255, b: 0 / 255 }); //A
rendererColorArray.push({ r: 86 / 255, g: 160 / 255, b: 167 / 255 }); //B
rendererColorArray.push({ r: 204 / 255, g: 44 / 255, b: 76 / 255 }); //C
rendererColorArray.push({ r: 204 / 255, g: 44 / 255, b: 76 / 255 }); //D
rendererColorArray.push({ r: 255 / 255, g: 183 / 255, b: 54 / 255 }); //E
rendererColorArray.push({ r: 255 / 255, g: 183 / 255, b: 54 / 255 }); //F
rendererColorArray.push({ r: 1 / 255, g: 20 / 255, b: 1 / 255 }); //G
rendererColorArray.push({ r: 1 / 255, g: 20 / 255, b: 1 / 255 }); //H
rendererColorArray.push({ r: 0 / 255, g: 0 / 255, b: 0 / 255 }); //I


var arrayColorArray = [];
arrayColorArray.push({ r: 0, g: 1, b: 0 }); //0
arrayColorArray.push({ r: 255 / 255, g: 114 / 255, b: 102 / 255 }); //A
arrayColorArray.push({ r: 255 / 255, g: 114 / 255, b: 102 / 255 }); //a
arrayColorArray.push({ r: 49 / 255, g: 63 / 255, b: 225 / 255 }); //B
arrayColorArray.push({ r: 49 / 255, g: 63 / 255, b: 225 / 255 }); //b
arrayColorArray.push({ r: 255 / 255, g: 255 / 255, b: 255 / 255 }); //C
arrayColorArray.push({ r: 255 / 255, g: 255 / 255, b: 255 / 255 }); //c
arrayColorArray.push({ r: 102 / 255, g: 245 / 255, b: 150 / 255 }); //Drgb(102, 245, 150)
arrayColorArray.push({ r: 102 / 255, g: 245 / 255, b: 150 / 255 }); //Drgb(102, 245, 150)



var smartYPos = 10;
var smartYNeg = 0;

//!Animation Change TIMING
var timing = 0.5;

function changeStage(newStage) {
  if (newStage != currentStage) {

    animateBool = true;
    currentStage = newStage;
    if (newStage == 0) {
      // var tweenAnimation = new TWEEN.Tween(renderer.getClearColor()).to(rendererColorArray[currentStage], 1*animationTime);
      // tweenAnimation.easing(TWEEN.Easing.Elastic.InOut)
      // tweenAnimation.start();

      // var array1Tween = new TWEEN.Tween(arrayCube[0].material.color).to(arrayColorArray[d], 1*animationTime);
      // array1Tween.easing(TWEEN.Easing.Elastic.InOut)
      // array1Tween.start();

      //!Commented - might be IMPORTANT
      // changeTypo(currentStage, 1);
    }
  }
}

function changeBackgroundColor() {
  var newColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

  //!Original 
  // var tweenAnimation = new TWEEN.Tween(renderer.getClearColor()).to(rendererColorArray[currentStage], 1*animationTime);

  //!GENERATIVE
  var tweenAnimation = new TWEEN.Tween(renderer.getClearColor()).to(hexToRgb(getRandomColor()), 1 * animationTime);

  console.log(hexToRgb(getRandomColor()));

  tweenAnimation.easing(TWEEN.Easing.Elastic.InOut)
  tweenAnimation.start();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : null;
}

var isCapital = true;

//!LOOP IN STAGE
function changeTypo() {

  //!CHANGE BACKGROUND COLOR HERE
  //changeBackgroundColor();

  var stagee = currentStage;

  console.log(stagee);

  if (isCapital) {
    stagee = stagee * 2;
  }
  else {
    stagee = 1 + (stagee * 2);
  }


  cubeArrayAnimation = [];

  var meshArrayCounter = 0;

  for (var k = -3; k <= 3; k++) {
    var arrayCounter = 0;
    for (var j = -1; j <= 1; j++) {
      for (var i = -1; i <= 1; i++) {
        var mesh = arrayCube[meshArrayCounter++];

        var position = {
          sx: mesh.scale.x,
          sy: mesh.scale.y,
          sz: mesh.scale.z,
          rx: mesh.rotation.x,
          ry: mesh.rotation.y,
          rz: mesh.rotation.z
        };

        var _sx = stringCube[stagee][k + 3][arrayCounter];;
        var _sy = stringCube[stagee][k + 3][arrayCounter];;
        var _sz = stringCube[stagee][k + 3][arrayCounter];
        var _rx = 0;
        var _ry = 0;
        var _rz = 0;


        // Middle bar rotation

        if (stringCubeRotation[stagee][k + 3][arrayCounter] == 45) {
          _ry = -45 * (Math.PI / 180);
          _sz = Math.sqrt(2);
          _sx = Math.sqrt(2) * 2;
          // _sy = 1.0001;
        }

        //!MMMMMMMMMMMMMMMMMMMM
        if (stringCubeRotation[stagee][k + 3][arrayCounter] == 131) {
          _rx = -45 * (Math.PI / 180);
          _sz = Math.sqrt(2) * 2;
          _sy = Math.sqrt(2);
          // _sx = 0.999;
        }

        if (stringCubeRotation[stagee][k + 3][arrayCounter] == 132) {
          _rz = -45 * (Math.PI / 180);
          _sx = Math.sqrt(2) * 2;
          _sy = Math.sqrt(2);
          // _sz = 0.999;
        }

        //!NNNNNNNNNNNNNNNNNN


        if (stringCubeRotation[stagee][k + 3][arrayCounter] == 142) {
          _rz = 45 * (Math.PI / 180);
          _sx = Math.sqrt(2) * 2;
          _sy = Math.sqrt(2);
          // _sz = 0.999;
        }


        if (stringCubeRotation[stagee][k + 3][arrayCounter] == 10) {
          _sz = 2;
          // _sx = Math.sqrt(2);
        }
        if (stringCubeRotation[stagee][k + 3][arrayCounter] == 20) {
          _sx = 2;
          // _sx = Math.sqrt(2);
        }
        if (stringCubeRotation[stagee][k + 3][arrayCounter] == 5) {
          _sy = 2;
          // _sx = Math.sqrt(2);
        }



        var target = {
          sx: _sx,
          sy: _sy,
          sz: _sz,
          rx: _rx,
          ry: _ry,
          rz: _rz
        };

        arrayCounter++;

        var tween = new TWEEN.Tween(position).to(target, timing * animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)

        // tween.easing(TWEEN.Easing.Easing.)
        tween.start();


        if ((i == 0) && (j == 0) && (k == 0)) {
          tween.onComplete(function () {

            // if (isCapital) {
            //   isCapital = false;
            // }
            // else {
            //   isCapital = true;
            // }

            //!Change again
            changeTypo();
          });
        }
        cubeArrayAnimation.push(position);
      }
    }
  }
}

//!TRIGGERING LOOPING ANIMATION HERE --> --> --> --> --> --> --> --> 
changeTypo();