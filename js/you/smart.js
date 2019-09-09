var rendererColorArray = [];
rendererColorArray.push({r: 11/255, g: 12/255, b: 16/255}); //2
rendererColorArray.push({r: 1, g: 1, b: 1}); //0
rendererColorArray.push({r: 227/255, g: 226/255, b: 223/225}); //1

var arrayColorArray = [];
arrayColorArray.push({r: 2/255, g:  22/2550, b: 241/255}); //0
arrayColorArray.push({r: 0, g: 1, b: 0}); //0
arrayColorArray.push({r: 238/255, g: 76/255, b: 124/255}); //0


var smartYPos = 10;
var smartYNeg = 0;

function smartOpen1(timing, nextStep)
{
    barCounter = 0;

    var alt = false;

    array1Animation = [];

    var xLength1 = string1[0].length;
    var yLength1 = string1.length;

    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength1 ; j++)
    {
      for(var i = 0 ; i < xLength1 ; i++)
      {
        var mesh = array1[counter++];

        var position = { x: 0,
                         y: 0,
                         z: 0,
                        sx: 0.1, sy: 0.1, sz: 0.1};

        var target = { x: 0,
                       y: -j*gap + smartYPos*gap,
                       z: 0,
                      sx: 1, sy: 1, sz: 1};

        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        if( (i == 0) && (j == 0))
        {
          tween.onComplete(function(){
            if(currentScene == 0)
            {
              smartOpen2(1, nextStep);
            }
          });
        }
        array1Animation.push(position);
      }
    }

    array2Animation = [];
    //
    // var xLength2 = string2[0].length;
    // var yLength2 = string2.length;

    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength2 ; j++)
    {
      for(var i = 0 ; i < xLength2 ; i++)
      {
        var mesh = array2[counter++];

        var position = { x: 0,
                         y: 0,
                         z: 0,
                        sx: 0.1, sy: 0.1, sz: 0.1};

        var target = { x: 0,
                       y: -j*gap - smartYNeg*gap,
                       z: 0,
                      sx: 1, sy: 1, sz: 1};



        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        array2Animation.push(position);
      }
    }
}





function smartOpen2(timing, nextStep)
{

    barCounter = 0;

    var alt = false;

    array1Animation = [];

    var xLength1 = string1[0].length;
    var yLength1 = string1.length;

    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength1 ; j++)
    {
      for(var i = 0 ; i < xLength1 ; i++)
      {
        var mesh = array1[counter++];

        var position = { x: mesh.position.x,
                         y: mesh.position.y,
                         z: mesh.position.z,
                        sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z
                      };

        var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                       y: -j*gap + smartYPos*gap,
                       z: 0,
                      sx: 1, sy: 1, sz: 1};



        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        if( (i == 0) && (j == 0))
        {
          tween.onComplete(function(){
            if(currentScene == 0)
            {
              var tween = new TWEEN.Tween(renderer.getClearColor()).to(rendererColorArray[stateCounter], 1*animationTime);
              tween.easing(TWEEN.Easing.Elastic.InOut)
              tween.start();

              var array1Tween = new TWEEN.Tween(array1[0].material.color).to(arrayColorArray[stateCounter], 1*animationTime);
              array1Tween.easing(TWEEN.Easing.Elastic.InOut)
              array1Tween.start();
              if(stateCounter == 0)
              {
                  smartOpen3(1, nextStep);
                  stateCounter++;
              }
              else if(stateCounter == 1)
              {
                  smartOpen4(1, nextStep);
                  stateCounter++;
              }
              else if(stateCounter == 2)
              {
                  smartOpen5(1, nextStep);
                  stateCounter = 0;
              }
            }
          });
        }
        array1Animation.push(position);
      }
    }

    array2Animation = [];

    // var xLength2 = string2[0].length;
    // var yLength2 = string2.length;

    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength2 ; j++)
    {
      for(var i = 0 ; i < xLength2 ; i++)
      {
        var mesh = array2[counter++];

        var position = { x: mesh.position.x,
                         y: mesh.position.y,
                         z: mesh.position.z,
                        sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z
                      };

        var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                       y: -j*gap - smartYNeg*gap,
                       z: 0,
                      sx: 1, sy: 1, sz: 1};



        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        array2Animation.push(position);
      }
    }
}

var stateCounter = 0; //smart
                  //1; //kind
                  //2; //important


function smartOpen3(timing, nextStep)
{
    barCounter = 0;

    var alt = false;


    array1Animation = [];

    var xLength1 = string1[0].length;
    var yLength1 = string1.length;

    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength1 ; j++)
    {
      for(var i = 0 ; i < xLength1 ; i++)
      {
        var mesh = array1[counter++];

        var position = { x: mesh.position.x,
                         y: mesh.position.y,
                         z: mesh.position.z,
                        sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z
                      };

        var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                       y: -j*gap + smartYPos*gap,
                       z: 0,
                      sx: 1, sy: 1, sz: 1};

        if(string1[j][i] == 0)
        {
          var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                         y: -j*gap + smartYPos*gap,
                         z: 0,
                        sx: objectScale,
                        sy: objectScale,
                        sz: objectScale
                      };
        }
        else {
          var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                         y: -j*gap + smartYPos*gap,
                         z: 0,
                         sx: 0.1,
                         sy: 0.1,
                         sz: objectScale
                      };
        }

        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        if( (i == 0) && (j == 0))
        {
          tween.onComplete(function(){
            if(currentScene == 0)
            {
              smartOpen2(1, nextStep);
              // if(animateBool)
              // {
              //   animateBool = false;
              // }
            }
          });
        }
        array1Animation.push(position);
      }
    }


    array2Animation = [];

    var xLengthCurrent = string5[0].length;
    var yLengthCurrent = string5.length;

    var xLengthShift = Math.floor( (xLength2 - xLengthCurrent)/2 );


    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength2 ; j++)
    {
      for(var i = 0 ; i < xLength2 ; i++)
      {
        var mesh = array2[counter++];

        var position = { x: mesh.position.x,
                         y: mesh.position.y,
                         z: mesh.position.z,
                        sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z
                      };

        var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                       y: -j*gap + smartYNeg*gap,
                       z: 0,
                       sx: 0.1,
                       sy: 0.1,
                       sz: objectScale
                     };

        if(i < xLengthShift)
        {
          var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                         y: -j*gap + smartYNeg*gap,
                         z: 0,
                         sx: 0.1,
                         sy: 0.1,
                         sz: objectScale
                       };
        }
        else if( ( i < xLengthCurrent + xLengthShift ) )
        {

          if(string5[j][i - xLengthShift] != 0)
          {
            var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                           y: -j*gap - smartYNeg*gap,
                           z: 0,
                          sx: string5[j][i - xLengthShift],
                          sy: string5[j][i - xLengthShift],
                          sz: objectScale
                        };
          }
          else {
            var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                           y: -j*gap - smartYNeg*gap,
                           z: 0,
                          sx: 0.1,
                          sy: 0.1,
                          sz: objectScale
                        };
          }
        }


        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        array2Animation.push(position);
      }
    }
}


function smartOpen4(timing, nextStep)
{
    barCounter = 0;

    var alt = false;


    array1Animation = [];

    var xLength1 = string1[0].length;
    var yLength1 = string1.length;

    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength1 ; j++)
    {
      for(var i = 0 ; i < xLength1 ; i++)
      {
        var mesh = array1[counter++];

        var position = { x: mesh.position.x,
                         y: mesh.position.y,
                         z: mesh.position.z,
                        sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z
                      };

        var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                       y: -j*gap + smartYPos*gap,
                       z: 0,
                      sx: 1, sy: 1, sz: 1};

        if(string1[j][i] != 0)
        {
          var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                         y: -j*gap + smartYPos*gap,
                         z: 0,
                        sx: objectScale,
                        sy: objectScale,
                        sz: objectScale
                      };
        }
        else {
          var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                         y: -j*gap + smartYPos*gap,
                         z: 0,
                         sx: 0.1,
                         sy: 0.1,
                         sz: objectScale
                      };
        }

        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        if( (i == 0) && (j == 0))
        {
          tween.onComplete(function(){
            if(currentScene == 0)
            {
              smartOpen2(1, nextStep);
              // if(animateBool)
              // {
              //   animateBool = false;
              // }
            }
          });
        }
        array1Animation.push(position);
      }
    }


    array2Animation = [];

    var xLengthCurrent = string3[0].length;
    var yLengthCurrent = string3.length;

    var xLengthShift = Math.floor( (xLength2 - xLengthCurrent)/2 );


    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength2 ; j++)
    {
      for(var i = 0 ; i < xLength2 ; i++)
      {
        var mesh = array2[counter++];

        var position = { x: mesh.position.x,
                         y: mesh.position.y,
                         z: mesh.position.z,
                        sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z
                      };

        var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                       y: -j*gap + smartYNeg*gap,
                       z: 0,
                       sx: 0.1,
                       sy: 0.1,
                       sz: objectScale
                     };

        if(i < xLengthShift)
        {
          var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                         y: -j*gap + smartYNeg*gap,
                         z: 0,
                         sx: 0.1,
                         sy: 0.1,
                         sz: objectScale
                       };
        }
        else if( ( i < xLengthCurrent + xLengthShift ) )
        {

          if(string3[j][i - xLengthShift] != 0)
          {
            var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                           y: -j*gap - smartYNeg*gap,
                           z: 0,
                          sx: string3[j][i - xLengthShift],
                          sy: string3[j][i - xLengthShift],
                          sz: objectScale
                        };
          }
          else {
            var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                           y: -j*gap - smartYNeg*gap,
                           z: 0,
                          sx: 0.1,
                          sy: 0.1,
                          sz: objectScale
                        };
          }
        }


        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        array2Animation.push(position);
      }
    }
}


function smartOpen5(timing, nextStep)
{
    barCounter = 0;

    var alt = false;


    array1Animation = [];

    var xLength1 = string1[0].length;
    var yLength1 = string1.length;

    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength1 ; j++)
    {
      for(var i = 0 ; i < xLength1 ; i++)
      {
        var mesh = array1[counter++];

        var position = { x: mesh.position.x,
                         y: mesh.position.y,
                         z: mesh.position.z,
                        sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z
                      };

        var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                       y: -j*gap + smartYPos*gap,
                       z: 0,
                      sx: 1, sy: 1, sz: 1};

        if(string1[j][i] == 0)
        {
          var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                         y: -j*gap + smartYPos*gap,
                         z: 0,
                        sx: objectScale,
                        sy: objectScale,
                        sz: objectScale
                      };
        }
        else {
          var target = { x: -i*gap + (xLength1 - 1)*gap/2,
                         y: -j*gap + smartYPos*gap,
                         z: 0,
                         sx: 0.1,
                         sy: 0.1,
                         sz: objectScale
                      };
        }

        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        if( (i == 0) && (j == 0))
        {
          tween.onComplete(function(){
            if(currentScene == 0)
            {
              smartOpen2(1, nextStep);
              // if(animateBool)
              // {
              //   animateBool = false;
              // }
            }
          });
        }
        array1Animation.push(position);
      }
    }


    array2Animation = [];

    var xLengthCurrent = string2[0].length;
    var yLengthCurrent = string2.length;

    var xLengthShift = Math.floor( (xLength2 - xLengthCurrent)/2 );


    var gap = 1;
    var objectScale = 1;
    var counter = 0;

    for(var j = 0 ; j < yLength2 ; j++)
    {
      for(var i = 0 ; i < xLength2 ; i++)
      {
        var mesh = array2[counter++];

        var position = { x: mesh.position.x,
                         y: mesh.position.y,
                         z: mesh.position.z,
                        sx: mesh.scale.x,
                        sy: mesh.scale.y,
                        sz: mesh.scale.z
                      };

        var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                       y: -j*gap + smartYNeg*gap,
                       z: 0,
                       sx: 0.1,
                       sy: 0.1,
                       sz: objectScale
                     };

        if(i < xLengthShift)
        {
          var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                         y: -j*gap + smartYNeg*gap,
                         z: 0,
                         sx: 0.1,
                         sy: 0.1,
                         sz: objectScale
                       };
        }
        else if( ( i < xLengthCurrent + xLengthShift ) )
        {

          if(string2[j][i - xLengthShift] != 0)
          {
            var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                           y: -j*gap - smartYNeg*gap,
                           z: 0,
                          sx: string2[j][i - xLengthShift],
                          sy: string2[j][i - xLengthShift],
                          sz: objectScale
                        };
          }
          else {
            var target = { x: -i*gap + (xLength2 - 1)*gap/2,
                           y: -j*gap - smartYNeg*gap,
                           z: 0,
                          sx: 0.1,
                          sy: 0.1,
                          sz: objectScale
                        };
          }
        }


        var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        array2Animation.push(position);
      }
    }
}
