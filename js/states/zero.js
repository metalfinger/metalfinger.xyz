function zerozero(timing, nextStep)
{
    barCounter = 0;

    moebiusAnimation = [];

    var alt = false;



    for(var i = 0 ; i < 360 ; i+=3)
    {
      var angle = 0;

      angle = i*(Math.PI/180);

      var mesh = moebiusArray[barCounter];

      var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                      rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                      sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

      var scaler = 1;

      var newAngle = i*(Math.PI/180);

      if(i%36 == 0)
      {
        if(alt)
        {
          alt = false;
        }
        else {
          alt = true;
        }
      }

      if(alt)
      {
        scaler = 1;
        newAngle = (i+36.5)*(Math.PI/180);
      }

      var target = {
                    x : Math.sin(newAngle)*magicalNumberY*2.5,
                    y : Math.cos(newAngle)*magicalNumberY*2.5,
                    z : 0,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: scaler/2,
                    sy: scaler/2,
                    sz: scaler*10
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

      mesh.material.color.r = Math.random();
      mesh.material.color.g = Math.random();
      mesh.material.color.b = Math.random();

      var target = {  x : (magicalNumberX*1)* Math.sin(iAngle)*Math.sin(jAngle),
                      y : (magicalNumberX*1)*Math.cos(jAngle),
                      z : (magicalNumberX*1)* Math.cos(iAngle)*Math.sin(jAngle),
                      rx: 0,
                      ry: 0,
                      rz: 0,
                      sx: 4,
                      sy: 4,
                      sz: 4                    
                    };
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
          if(currentScene == 0)
          {
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
