twoparticler = 1;
twoparticleg = 1;
twoparticleb = 1;

function twozero(timing)
{
  barCounter = 0;

  moebiusAnimation = [];

  for(var i = 0 ; i < 360 ; i+=3)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];

    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : Math.sin(angle)*magicalNumberX*1.5,
                  y : Math.sin(((i*7))*(Math.PI/180))*(Math.random()*20 - 10),
                  z : Math.cos(angle)*magicalNumberY*1.5 ,
                  rx: 0,//(90)*(Math.PI/180), //((i/2))*(Math.PI/180),
                  ry: 0,//ry_,
                  rz: 0,
                  sx: barSize*2,
                  sy: barDepth,
                  sz: barSize*2
                };
    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();


    moebiusAnimation.push(position);

    barCounter++;
  }

  particleAnimation = [];

  barCounter = 0
  var depthCounter = -5;
  var radius = magicalNumberX;

  for(var i = 0 ; i < 1000 ; i+=1)
  {

    var mesh = particleArray[barCounter];

    var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,
                    r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b
                  };

    var angle = 0;

    angle = i*(Math.PI/180);

    var maxArea = 2;
    var minArea = 1;

    var spread = window.innerWidth/8;

    if(window.innerWidth < window.innerHeight)
    {
      spread = window.innerHeight/4;
    }



    var target = { x : Math.random() * spread - spread/2,//(magicalNumberX*1.5)* Math.sin(i) + Math.random()*maxArea - minArea,
                   y : Math.random() * spread - spread/2,//Math.random() * window.innerHeight/2,//Math.random() * 16 - 8,
                   z : Math.random() * spread - spread/2,//Math.random() * window.innerWidth/2 - (-window.innerWidth/2),//(magicalNumberX*1.5)*Math.cos(i) + Math.random()*maxArea - minArea,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: 1,
                  sy: 1,
                  sz: 1,
                  r: twoparticler, g: twoparticleg, b: twoparticleb
                };

    var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();

    if(i == 0)
    {
      tween.onComplete(function(){
        if(currentScene == 2)
        {
          twotwo(1);
          if(animateBool)
          {
            animateBool = false;
          }

        }
      });
    }

    particleAnimation.push(intialPo);
    barCounter++;
  }


  }

  function twozerorepeat(timing)
  {
    barCounter = 0;

    moebiusAnimation = [];

    for(var i = 0 ; i < 360 ; i+=3)
    {
      var angle = 0;

      angle = i*(Math.PI/180);

      var mesh = moebiusArray[barCounter];

      var ry_ = 0;

      if( (0 < i) && (i <= 180) )
      {
        ry_ = -angle;
      }
      else {
        ry_ = angle;
      }

      var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                      rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                      sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,
                    r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b
                  };

      var spread = window.innerWidth/8;

      if(window.innerWidth < window.innerHeight)
      {
        spread = window.innerHeight/8;
      }

      spread = 10000;

      var target = {
                    x : Math.sin(angle)*magicalNumberX*1.5,
                    y : Math.sin(((i*7))*(Math.PI/180))*(Math.random()*20 - 10),
                    z : Math.cos(angle)*magicalNumberY*1.5 ,

                    // x : 0,//Math.sin(angle)*magicalNumberX,
                    // y : magicalNumberX*(Math.PI/180))*2, //Math.sin(((i*2) + 180)*(Math.PI/180))*2,
                    // z : 0,//Math.cos(angle)*magicalNumberY,

                    rx: 0,//(90)*(Math.PI/180), //((i/2))*(Math.PI/180),
                    ry: 0,//ry_,
                    rz: 0,
                    sx: barSize*2,
                    sy: barDepth,
                    sz: barSize*2
                  };


                    if( (0 < i) && (i <= 180) )
                    {
                      mesh.rotation.y = -angle;
                    }
                    else {
                      mesh.rotation.y = angle;
                    }


      var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

      tween.easing(TWEEN.Easing.Elastic.InOut)
      tween.start();


      moebiusAnimation.push(position);

      barCounter++;
    }

    particleAnimation = [];

    barCounter = 0
    var depthCounter = -5;
    var radius = magicalNumberX;

    for(var i = 0 ; i < 1000 ; i+=1)
    {

      var mesh = particleArray[barCounter];

      var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                      rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                      sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,
                      r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

      var angle = 0;

      angle = i*(Math.PI/180);

      var maxArea = 2;
      var minArea = 1;




      var target ={ x : mesh.position.x, y: mesh.position.y-10, z: mesh.position.z,
                      rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                      sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,
                      r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

      var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

      tween.easing(TWEEN.Easing.Elastic.InOut)
      tween.start();

      if(i == 0)
      {
        tween.onComplete(function(){
          if(currentScene == 2)
          {
            twotwo(1);

          }
        });
      }

      particleAnimation.push(intialPo);
      barCounter++;
    }


    }

  function twotwo(timing)
  {

    barCounter = 0;

    moebiusAnimation = [];

    for(var i = 0 ; i < 360 ; i+=3)
    {
      var angle = 0;

      angle = i*(Math.PI/180);

      var mesh = moebiusArray[barCounter];

      var ry_ = 0;

      if( (0 < i) && (i <= 180) )
      {
        ry_ = -angle;
      }
      else {
        ry_ = angle;
      }

      var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                      rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                      sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

      var target = {
                    x : Math.sin(angle)*magicalNumberX*1.5,
                    y : Math.sin(((i*5))*(Math.PI/180))*(3),
                    z : Math.cos(angle)*magicalNumberY*1.5 ,

                    // x : 0,//Math.sin(angle)*magicalNumberX,
                    // y : magicalNumberX*(Math.PI/180))*2, //Math.sin(((i*2) + 180)*(Math.PI/180))*2,
                    // z : 0,//Math.cos(angle)*magicalNumberY,

                    rx: 0,//(90)*(Math.PI/180), //((i/2))*(Math.PI/180),
                    ry: 0,//ry_,
                    rz: 0,
                    sx: barSize*2,
                    sy: barDepth,
                    sz: barSize*2
                  };


                    if( (0 < i) && (i <= 180) )
                    {
                      mesh.rotation.y = -angle;
                    }
                    else {
                      mesh.rotation.y = angle;
                    }


      var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

      tween.easing(TWEEN.Easing.Elastic.InOut)
      tween.start();


      moebiusAnimation.push(position);

      barCounter++;
    }

    particleAnimation = [];

    barCounter = 0
    var depthCounter = -5;
    var radius = magicalNumberX;

    for(var i = 0 ; i < 1000 ; i+=1)
    {

      var mesh = particleArray[barCounter];

      var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                      rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                      sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,
                      r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

      var angle = 0;

      angle = i*(Math.PI/180);

      var maxArea = 5;
      var minArea = 2.5;

      // var target = { x : (magicalNumberX*1.5)* Math.sin(i) + Math.random()*maxArea - minArea,
      //                y : 0,
      //                z : (magicalNumberX*1.5)*Math.cos(i) + Math.random()*maxArea - minArea,
      //               rx: 0,
      //               ry: 0,
      //               rz: 0,
      //               sx: 0.5,
      //               sy: 0.5,
      //               sz: 0.5
      //             };

    var target = { x : mesh.position.x, y: mesh.position.y+10, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,
                    r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

      var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

      tween.easing(TWEEN.Easing.Elastic.InOut)
      tween.start();

      if(i == 0)
      {
        tween.onComplete(function(){
          if(currentScene == 2)
          {
            twozerorepeat(1);
          }
        });
      }


      particleAnimation.push(intialPo);
      barCounter++;
    }


    }
  //
  //
  // function twoone(timing)
  // {
  //
  //   barCounter = 0;
  //
  //   moebiusAnimation = [];
  //
  //   for(var i = 0 ; i < 360 ; i+=3)
  //   {
  //     var angle = 0;
  //
  //     angle = i*(Math.PI/180);
  //
  //     var mesh = moebiusArray[barCounter];
  //
  //     var ry_ = 0;
  //
  //     if( (0 < i) && (i <= 180) )
  //     {
  //       ry_ = -angle;
  //     }
  //     else {
  //       ry_ = angle;
  //     }
  //
  //     var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
  //                     rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
  //                     sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};
  //
  //     var target = {
  //                   x : Math.sin(angle)*magicalNumberX*1.5,
  //                   y : Math.sin(((i*7))*(Math.PI/180))*3,
  //                   z : Math.cos(angle)*magicalNumberY*1.5 ,
  //
  //                   // x : 0,//Math.sin(angle)*magicalNumberX,
  //                   // y : magicalNumberX*(Math.PI/180))*2, //Math.sin(((i*2) + 180)*(Math.PI/180))*2,
  //                   // z : 0,//Math.cos(angle)*magicalNumberY,
  //
  //                   rx: 0,//(90)*(Math.PI/180), //((i/2))*(Math.PI/180),
  //                   ry: 0,//ry_,
  //                   rz: 0,
  //                   sx: barSize*2,
  //                   sy: barDepth,
  //                   sz: barSize*2
  //                 };
  //
  //
  //                   if( (0 < i) && (i <= 180) )
  //                   {
  //                     mesh.rotation.y = -angle;
  //                   }
  //                   else {
  //                     mesh.rotation.y = angle;
  //                   }
  //
  //
  //     var tween = new TWEEN.Tween(position).to(target, timing*animationTime);
  //
  //     tween.easing(TWEEN.Easing.Elastic.InOut)
  //     tween.start();
  //
  //
  //     moebiusAnimation.push(position);
  //
  //     barCounter++;
  //   }
  //
  //   particleAnimation = [];
  //
  //   barCounter = 0
  //   var depthCounter = -5;
  //   var radius = magicalNumberX;
  //
  //
  //     for(var i = 0 ; i < 360 ; i+=2) //first 180 particle
  //     {
  //
  //       var mesh = particleArray[barCounter];
  //
  //       var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
  //                       rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
  //                       sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};
  //
  //       var angle = 0;
  //
  //       angle = i*(Math.PI/180);
  //
  //       var target = { x : (magicalNumberX)* Math.sin(i) + magicalNumberX*1.5,
  //                      y : (magicalNumberX)*Math.cos(i),
  //                      z : 0,
  //                     rx: 0,
  //                     ry: 0,
  //                     rz: 0,
  //                     sx: 0.5,
  //                     sy: 0.5,
  //                     sz: 0.5
  //                   };
  //
  //       var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);
  //
  //       tween.easing(TWEEN.Easing.Elastic.InOut)
  //       tween.start();
  //
  //
  //       particleAnimation.push(intialPo);
  //       barCounter++;
  //     }
  //
  //     for(var i = 0 ; i < 360 ; i+=2) //180 - 360 particle
  //     {
  //
  //       var mesh = particleArray[barCounter];
  //
  //       var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
  //                       rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
  //                       sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};
  //
  //       var angle = 0;
  //
  //       angle = i*(Math.PI/180);
  //
  //       var target = { x : (magicalNumberX)* Math.sin(i) - magicalNumberX*1.5,
  //                      y : (magicalNumberX)*Math.cos(i),
  //                      z : 0,
  //                     rx: 0,
  //                     ry: 0,
  //                     rz: 0,
  //                     sx: 0.5,
  //                     sy: 0.5,
  //                     sz: 0.5
  //                   };
  //
  //       var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);
  //
  //       tween.easing(TWEEN.Easing.Elastic.InOut)
  //       tween.start();
  //
  //
  //       particleAnimation.push(intialPo);
  //
  //
  //       barCounter++;
  //     }
  //
  //     for(var i = 0 ; i < 360 ; i+=2) //360 - 540 particle
  //     {
  //
  //       var mesh = particleArray[barCounter];
  //
  //       var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
  //                       rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
  //                       sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};
  //
  //       var angle = 0;
  //
  //       angle = i*(Math.PI/180);
  //
  //       var target = { x : 0,
  //                      y : (magicalNumberX)*Math.cos(i),
  //                      z : (magicalNumberX)* Math.sin(i) - magicalNumberX*1.5,
  //                     rx: 0,
  //                     ry: 0,
  //                     rz: 0,
  //                     sx: 0.5,
  //                     sy: 0.5,
  //                     sz: 0.5
  //                   };
  //
  //       var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);
  //
  //       tween.easing(TWEEN.Easing.Elastic.InOut)
  //       tween.start();
  //
  //
  //       particleAnimation.push(intialPo);
  //       barCounter++;
  //     }
  //
  //     for(var i = 0 ; i < 360 ; i+=2) //540 - 720 particle
  //     {
  //
  //       var mesh = particleArray[barCounter];
  //
  //       var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
  //                       rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
  //                       sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};
  //
  //       var angle = 0;
  //
  //       angle = i*(Math.PI/180);
  //
  //       var target = { x : 0,
  //                      y : (magicalNumberX)*Math.cos(i),
  //                      z : (magicalNumberX)* Math.sin(i) + magicalNumberX*1.5,
  //                     rx: 0,
  //                     ry: 0,
  //                     rz: 0,
  //                     sx: 0.5,
  //                     sy: 0.5,
  //                     sz: 0.5
  //                   };
  //
  //       var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);
  //
  //       tween.easing(TWEEN.Easing.Elastic.InOut)
  //       tween.start();
  //
  //
  //       particleAnimation.push(intialPo);
  //       barCounter++;
  //     }
  //
  //
  //
  //
  //     for(var k = 0 ; k < 280 ; k++)
  //     {
  //       var mesh = particleArray[barCounter];
  //
  //       var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z, rx: mesh.rotation.x  , ry: mesh.rotation.y, rz: mesh.rotation.z};
  //
  //
  //
  //       var target = { x : 0,
  //                     y : 0,
  //                     z:  0,
  //                     rx: 0,
  //                     ry: 0,
  //                     rz: 0};
  //
  //       var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);
  //
  //       tween.easing(TWEEN.Easing.Elastic.InOut)
  //       tween.start();
  //
  //       if(k == 0)
  //       {
  //         tween.onComplete(function(){
  //           if(currentScene == 2)
  //           {
  //             twozero(1);
  //           }
  //         });
  //       }
  //
  //       particleAnimation.push(intialPo);
  //       barCounter++;
  //     }
  //
  //   }
