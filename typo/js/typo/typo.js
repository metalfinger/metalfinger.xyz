var rendererColorArray = [];
rendererColorArray.push({r: 0, g: 0, b: 1}); //0
rendererColorArray.push({r: 223/255, g: 75/255, b: 64/255}); //1
rendererColorArray.push({r: 223/255, g: 75/255, b: 64/255}); //1
rendererColorArray.push({r: 96/255, g: 96/255, b: 96/255}); //2

var arrayColorArray = [];
arrayColorArray.push({r: 102/255, g:  252/2550, b: 241/255}); //0
arrayColorArray.push({r: 0/255, g: 255/255, b: 250/255}); //0
arrayColorArray.push({r: 255/255, g: 255/255, b: 56/255}); //0


var smartYPos = 10;
var smartYNeg = 0;

function changeTypo(stagee, timing, nextStep)
{
  cubeArrayAnimation = [];

  var meshArrayCounter = 0;

  for(var k = -3 ; k <= 3 ; k++)
  {
    var arrayCounter = 0;
    for(var j = -1 ; j <= 1 ; j++)
    {
      for(var i = -1 ; i <= 1 ; i++)
      {
        var mesh = arrayCube[meshArrayCounter++];

        var position = {sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z,
                        rx: mesh.rotation.x,
                        ry: mesh.rotation.y,
                        rz: mesh.rotation.z
                      };

        var _sx = stringCube[stagee][k+3][arrayCounter];;
        var _sy = stringCube[stagee][k+3][arrayCounter];;
        var _sz = stringCube[stagee][k+3][arrayCounter];
        var _rx = 0;
        var _ry = 0;
        var _rz = 0;

        _ry = stringCubeRotation[stagee][k+3][arrayCounter]*(Math.PI/180);
        if(stringCubeRotation[stagee][k+3][arrayCounter] != 0)
        {
          _sz = Math.sqrt(2)*2;
          _sx = Math.sqrt(2);
        }

        var target = {sx: _sx,
                      sy: _sy,
                      sz: _sz,
                      rx: _rx,
                      ry: _ry,
                      rz: _rz
                    };

        arrayCounter++;

        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();


        if( (i == 0) && (j == 0) && (k == 0))
        {
          tween.onComplete(function(){
            if(currentScene == 0)
            {

              stagee++;
              if(stagee == stringCubeRotation.length)
              {
                stagee = 1;
              }

              // console.log("Complete", stagee);

              var tweenAnimation = new TWEEN.Tween(renderer.getClearColor()).to(rendererColorArray[stagee], 1*animationTime);
              tweenAnimation.easing(TWEEN.Easing.Elastic.InOut)
              tweenAnimation.start();

              var array1Tween = new TWEEN.Tween(arrayCube[0].material.color).to(arrayColorArray[stagee], 1*animationTime);
              array1Tween.easing(TWEEN.Easing.Elastic.InOut)
              array1Tween.start();


              changeTypo(stagee, 1, nextStep);
            }
          });
        }
        cubeArrayAnimation.push(position);
      }
    }
  }
}
