oneparticler = 1;
oneparticleg = 1;
oneparticleb = 1;

function onezero(timing)
{
  moebiusAnimation = [];
  barCounter = 0;

  for(var i = 0 ; i < 360 ; i+=3)
  {
    var angle = 0;

    angle = 3*i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];

    //mesh.material.color.setHex(0x222222);

    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    if(i < 120)

    {
      var target = {
                    x : Math.sin(angle)*magicalNumberX*2.5,
                    y : 0,
                    z : Math.cos(angle)*magicalNumberY*2.5,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: barSize*2,
                    sy: barDepth,
                    sz: barSize*2
                  };
    }
    else if(i < 240) {
      var target = {
                    x : 0,
                    y : Math.sin(angle)*magicalNumberX*2.5,
                    z : Math.cos(angle)*magicalNumberY*2.5,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: barDepth,
                    sy: barSize*2,
                    sz: barSize*2
                  };
    }
    else{
      var target = {
                    x : Math.cos(angle)*magicalNumberY*2.5,
                    y : Math.sin(angle)*magicalNumberX*2.5,
                    z : 0,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: barSize*2,
                    sy: barSize*2,
                    sz: barDepth
                  };
    }

    var tween = new TWEEN.Tween(position).to(target, animationTime*timing);

    tween.easing(TWEEN.Easing.Elastic.InOut);
    tween.start();


    moebiusAnimation.push(position);

    barCounter++;
  }

  particleAnimation = [];

  barCounter = 0
  var depthCounter = -5;
  var radius = magicalNumberX;

  var alternator = false;

  for(var i = 0 ; i < 360 ; i+=8)
  {
    for(var j = 0 ; j < 180 ; j+=9)
    {
      var iAngle = i*(Math.PI/180);
      var jAngle = j*(Math.PI/180);

      var mesh = particleArray[barCounter];
      //mesh.material.color.setHex(0x999999);
      var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                      rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                      sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,
                      r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

      if(alternator)
      {
        alternator = false;
        var target = { x : (magicalNumberX*1)* Math.sin(iAngle)*Math.sin(jAngle),
                      y : (magicalNumberX*1)*Math.cos(jAngle),
                      z:  (magicalNumberX*1)* Math.cos(iAngle)*Math.sin(jAngle),
                      rx: 0,
                      ry: 0,
                      rz: 0,
                      sx: 1,
                      sy: 1,
                      sz: 1,
                      r: oneparticler,
                      g: oneparticleg,
                      b: oneparticleb
                    };
      }
      else {
        alternator = true;
        var target = { x : (magicalNumberX*0.5)* Math.sin(iAngle)*Math.sin(jAngle),
                      y : (magicalNumberX*0.5)*Math.cos(jAngle),
                      z:  (magicalNumberX*0.5)* Math.cos(iAngle)*Math.sin(jAngle),
                      rx: 0,
                      ry: 0,
                      rz: 0,
                      sx: 1,
                      sy: 1,
                      sz: 1,
                      r: oneparticler,
                      g: oneparticleg,
                      b: oneparticleb
                    };
      }

      var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

      tween.easing(TWEEN.Easing.Elastic.InOut)
      tween.start();


      particleAnimation.push(intialPo);
      barCounter++;
    }

  }

  for(var k = 0 ; k < 100 ; k++)
  {
    var mesh = particleArray[barCounter];

    var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z, rx: mesh.rotation.x  , ry: mesh.rotation.y, rz: mesh.rotation.z,
                    r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

    var iAngle = i*(Math.PI/180);
    var jAngle = j*(Math.PI/180);

    var target = { x : 0,
                  y : 0,
                  z:  0,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: 0,
                  sy: 0,
                  sz: 0,
                  r: oneparticler,
                  g: oneparticleg,
                  b: oneparticleb
                };

    var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();

    if(k == 0)
    {
      tween.onComplete(function(){
        if(currentScene == 1)
        {
          oneone(1);
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

function oneone(timing)
{
  moebiusAnimation = [];
  barCounter = 0;

  for(var i = 0 ; i < 360 ; i+=3)
  {
    var angle = 0;

    angle = 3*i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];

    //mesh.material.color.setHex(0x222222);

    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : Math.sin(angle)*magicalNumberX*2.5,
                  y : 0,
                  z : Math.cos(angle)*magicalNumberY*2.5,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize*2,
                  sy: barDepth,
                  sz: barSize*2
                };
    if(i < 120)
    {
      var target = {
                    x : Math.sin(angle)*magicalNumberX*2.5,
                    y : 0,
                    z : Math.cos(angle)*magicalNumberY*2.5,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: barSize*2,
                    sy: barDepth,
                    sz: barSize*2
                  };
    }
    else if(i < 240) {
      var target = {
                    x : 0,
                    y : Math.sin(angle)*magicalNumberX*2.5,
                    z : Math.cos(angle)*magicalNumberY*2.5,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: barDepth,
                    sy: barSize*2,
                    sz: barSize*2
                  };
    }
    else{
      var target = {
                    x : Math.cos(angle)*magicalNumberY*2.5,
                    y : Math.sin(angle)*magicalNumberX*2.5,
                    z : 0,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: barSize*2,
                    sy: barSize*2,
                    sz: barDepth
                  };
    }

    var tween = new TWEEN.Tween(position).to(target, animationTime*timing);

    tween.easing(TWEEN.Easing.Elastic.InOut);
    tween.start();


    moebiusAnimation.push(position);

    barCounter++;
  }

  particleAnimation = [];

  barCounter = 0
  var depthCounter = -5;
  var radius = magicalNumberX;

  var alternator = true;

  for(var i = 0 ; i < 360 ; i+=8)
  {
    for(var j = 0 ; j < 180 ; j+=9)
    {
      var iAngle = i*(Math.PI/180);
      var jAngle = j*(Math.PI/180);

      var mesh = particleArray[barCounter];
      //mesh.material.color.setHex(0x999999);
      var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                      rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                      sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,
                      r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b
                    };

      var iAngle = i*(Math.PI/180);
      var jAngle = j*(Math.PI/180);

      if(alternator)
      {
        alternator = false;
        var target = { x : (magicalNumberX*1)* Math.sin(iAngle)*Math.sin(jAngle),
                      y : (magicalNumberX*1)*Math.cos(jAngle),
                      z:  (magicalNumberX*1)* Math.cos(iAngle)*Math.sin(jAngle),
                      rx: 0,
                      ry: 0,
                      rz: 0,
                      sx: 1,
                      sy: 1,
                      sz: 1,
                      r: oneparticler,
                      g: oneparticleg,
                      b: oneparticleb
                    };
      }
      else {
        alternator = true;
        var target = { x : (magicalNumberX*0.5)* Math.sin(iAngle)*Math.sin(jAngle),
                      y : (magicalNumberX*0.5)*Math.cos(jAngle),
                      z:  (magicalNumberX*0.5)* Math.cos(iAngle)*Math.sin(jAngle),
                      rx: 0,
                      ry: 0,
                      rz: 0,
                      sx: 1,
                      sy: 1,
                      sz: 1,
                      r: oneparticler,
                      g: oneparticleg,
                      b: oneparticleb
                    };
      }

      var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

      tween.easing(TWEEN.Easing.Elastic.InOut)
      tween.start();

      particleAnimation.push(intialPo);
      barCounter++;
    }

  }

  for(var k = 0 ; k < 100 ; k++)
  {
    var mesh = particleArray[barCounter];

    var intialPo = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z, rx: mesh.rotation.x  , ry: mesh.rotation.y, rz: mesh.rotation.z,
                      r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

    var iAngle = i*(Math.PI/180);
    var jAngle = j*(Math.PI/180);

    var target = { x : 0,
                  y : 0,
                  z:  0,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: 0,
                  sy: 0,
                  sz: 0,
                  r: oneparticler,
                  g: oneparticleg,
                  b: oneparticleb
              };

    var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();

    if(k == 0)
    {
      tween.onComplete(function(){
        if(currentScene == 1)
        {
          onezero(1);
        }
      });
    }

    particleAnimation.push(intialPo);
    barCounter++;
  }

}
