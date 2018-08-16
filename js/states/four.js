var fourparticler = 1;
var fourparticleg = 0;
var fourparticleb = 0;

function fourzero(timing)
{

  barCounter = 0;

  moebiusAnimation = [];


  //ZZ
  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : i,
                  y : 0,
                  z : barDepth*1.8,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize,
                  sy: barDepth*3.6,
                  sz: barSize
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : i,
                  y : 0,
                  z : -barDepth*1.8,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize,
                  sy: barDepth*3.6,
                  sz: barSize
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  //XX
  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : barDepth*1.8,
                  y : i,
                  z : 0,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize,
                  sy: barSize,
                  sz: barDepth*3.6
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : -barDepth*1.8,
                  y : i,
                  z : 0,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize,
                  sy: barSize,
                  sz: barDepth*3.6
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  //YY
  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : 0,
                  y : barDepth*1.8,
                  z : i,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barDepth*3.6,
                  sy: barSize,
                  sz: barSize
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

      var target = {
                    x : 0,
                    y : -barDepth*1.8,
                    z : i,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: barDepth*3.6,
                    sy: barSize,
                    sz: barSize
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
                    r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

    var angle = 0;

    angle = i*(Math.PI/180);

    var maxArea = 2;
    var minArea = 1;

    var spread = 3;

    var target = { x : Math.random() * spread - spread/2,//(magicalNumberX*1.5)* Math.sin(i) + Math.random()*maxArea - minArea,
                   y : Math.random() * spread - spread/2,//Math.random() * window.innerHeight/2,//Math.random() * 16 - 8,
                   z : Math.random() * spread - spread/2,//Math.random() * window.innerWidth/2 - (-window.innerWidth/2),//(magicalNumberX*1.5)*Math.cos(i) + Math.random()*maxArea - minArea,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: 1,
                  sy: 1,
                  sz: 1,
                  r: fourparticler,
                  g: fourparticleg,
                  b: fourparticleb
                };


    var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();

    if(i == 0)
    {
      tween.onComplete(function(){
        if(currentScene == 4)
        {
          fourone(1);
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


function fourone(timing)
{

  barCounter = 0;

  moebiusAnimation = [];


  //ZZ
  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : i,
                  y : 0,
                  z : barDepth*1.3,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize,
                  sy: barDepth*3,
                  sz: barSize
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : i,
                  y : 0,
                  z : -barDepth*1.3,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize,
                  sy: barDepth*3,
                  sz: barSize
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  //XX
  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : barDepth*1.3,
                  y : i,
                  z : 0,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize,
                  sy: barSize,
                  sz: barDepth*3
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : -barDepth*1.3,
                  y : i,
                  z : 0,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barSize,
                  sy: barSize,
                  sz: barDepth*3
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  //YY
  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

    var target = {
                  x : 0,
                  y : barDepth*1.3,
                  z : i,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: barDepth*3,
                  sy: barSize,
                  sz: barSize
                };

    var tween = new TWEEN.Tween(position).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();
    moebiusAnimation.push(position);

    barCounter++;
  }

  for(var i = -10 ; i < 10 ; i+=1)
  {
    var angle = 0;

    angle = i*(Math.PI/180);

    var mesh = moebiusArray[barCounter];


    var position = { x : mesh.position.x, y: mesh.position.y, z: mesh.position.z,
                    rx: mesh.rotation.x , ry: mesh.rotation.y , rz: mesh.rotation.z,
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z};

      var target = {
                    x : 0,
                    y : -barDepth*1.3,
                    z : i,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: barDepth*3,
                    sy: barSize,
                    sz: barSize
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
                    sx: mesh.scale.x , sy: mesh.scale.y , sz: mesh.scale.z,r: mesh.material.color.r, g: mesh.material.color.g, b: mesh.material.color.b};

    var angle = 0;

    angle = i*(Math.PI/180);

    var maxArea = 2;
    var minArea = 1;

    var spread = 2;

    var target = { x : Math.random() * spread - spread/2,//(magicalNumberX*1.5)* Math.sin(i) + Math.random()*maxArea - minArea,
                   y : Math.random() * spread - spread/2,//Math.random() * window.innerHeight/2,//Math.random() * 16 - 8,
                   z : Math.random() * spread - spread/2,//Math.random() * window.innerWidth/2 - (-window.innerWidth/2),//(magicalNumberX*1.5)*Math.cos(i) + Math.random()*maxArea - minArea,
                  rx: 0,
                  ry: 0,
                  rz: 0,
                  sx: 1,
                  sy: 1,
                  sz: 1,
                  r: fourparticler,
                  g: fourparticleg,
                  b: fourparticleb
                };

    var tween = new TWEEN.Tween(intialPo).to(target, timing*animationTime);

    tween.easing(TWEEN.Easing.Elastic.InOut)
    tween.start();

    if(i == 0)
    {
      tween.onComplete(function(){
        if(currentScene == 4)
        {
          fourzero(1);
        }
      });
    }

    particleAnimation.push(intialPo);
    barCounter++;
  }
}
