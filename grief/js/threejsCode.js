
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var cc = document.getElementById('myCanvas')

winWidth = window.innerWidth;
cc.style.margin = "0 0 0 0";

var cubeGroup = new THREE.Object3D();
var group = new THREE.Object3D();
var mainObject = new THREE.Object3D();

var doubleArray;

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true, alpha: true});
renderer.setClearColor(0xffffff, 1);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(winWidth, winHeight);

var camera = new THREE.PerspectiveCamera(50, winWidth/winHeight, 0.1, 30000);
var scene = new THREE.Scene();


var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.x = 1;
scene.add(light);

 var light2 = new THREE.DirectionalLight(0xffffff, 1);
 light2.position.y = 1;
 scene.add(light2);

var light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.z = 1;
scene.add(light2);


var light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.x = -1;
scene.add(light3);

 var light4 = new THREE.DirectionalLight(0xffffff, 1);
 light4.position.y = -1;
 scene.add(light4);

var light5 = new THREE.DirectionalLight(0xffffff, 1);
light5.position.z = -1;
scene.add(light5);

// var light1 = new THREE.DirectionalLight(0x00ff00, 1);
// light1.position.x = 1;
// scene.add(light1);

var light1 = new THREE.AmbientLight(0xffffff, 1);
light1.position.set(0, 100, 0);
//scene.add(light1);

lightp = new THREE.PointLight( 0xffffff, 1, 0, 2 );
//lightp.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: c1 } ) ) );
//scene.add( lightp );



var material = new THREE.MeshBasicMaterial({
  color: 0xffffff
});

material= new THREE.MeshPhongMaterial( {
                                        color: 0xffffff,
                                        specular: 0xffffff,
                                        shininess: 0
                                      } );

var barSize = 0.05;
var barDepth = 6;

geometry = new THREE.CubeGeometry(1, 1, 1);
var mesh = new THREE.Mesh( geometry, material );

var magicalNumberX = 8;
var magicalNumberY = 8;
var magicalNumberZ = 8;

var moebiusArray = [];
var particleArray = [];

var numberOfParticle = 1000;


//Moebius Strip
for(var i = 0 ; i < 360 ; i+=3)
{
  var angle = 0;

  angle = i*(Math.PI/180);

  var mesh = new THREE.Mesh( geometry, material );

  mesh.scale.x = barSize;
  mesh.scale.y = barDepth;
  mesh.scale.z = barSize;

  mesh.castShadow = true;
  mesh.receiveShadow = true;

  group.add(mesh);
  moebiusArray.push(mesh);
}


//Environment

barSize = 0.15;

geometry = new THREE.SphereGeometry(barSize, 32, 32);

material = new THREE.MeshBasicMaterial({
  color: 0xffffff
});

material= new THREE.MeshPhongMaterial( {
                                        color: 0xffffff,
                                        specular: 0x666666,
                                        shininess: 0
                                      } );

var maxArea = 40;
var minArea = maxArea/2;

for(var i = 0; i < 1000; i+=1)
{
    var mesh = new THREE.Mesh( geometry, material );
    particleArray.push(mesh);

    cubeGroup.add(mesh);
}

//Master Element
geometry = new THREE.SphereGeometry(barSize*4, 32, 32);

material = new THREE.MeshBasicMaterial({
  color: 0xff0000
});

material= new THREE.MeshPhongMaterial( {
                                        color: 0xffffff,
                                        specular: 0x666666,
                                        shininess: 10000
                                      } );

var mainMesh = new THREE.Mesh( geometry, material );

var glowLight = new THREE.PointLight( 0xff0000, 10, 10);
glowLight.position.set( 0, 0, 0 );

//mainObject.add(mainMesh);
//mainObject.add(glowLight);

cubeGroup.add(mainObject);
scene.add(group);
scene.add(cubeGroup);


mainObject.position.set(0, 0, 0);
group.position.set(0, 0, 0);
cubeGroup.position.set(0, 0, 0);


camera.position.z = -60;
camera.lookAt(scene.position);


//SCENE CHANGING CODE STARTS

var currentScene = -1;
var mouseIsOut = true;
var animateBool = false;

var rendererColorAnimation = [];
var cubeColorAnimation = [];
var sphereColorAnimation = [];
var settleDownCubeGroupAnimation = [];
var settleDownGroupAnimation = [];

settleDownCubeGroupAnimation.push({x: 100, y: 0, z: 0});
settleDownGroupAnimation.push({x: 0, y: 0, z: 0});

//Background Color
var rendererColorArray = [];
rendererColorArray.push({r: 1, g: 1, b: 1}); //0
rendererColorArray.push({r: 117/255, g: 125/255, b: 117/225}); //1
rendererColorArray.push({r: 207/255, g: 0, b: 15/255}); //2
rendererColorArray.push({r: 142/255, g: 68/255, b: 173/255}); //3  142, 68, 173
rendererColorArray.push({r: 0, g: 0, b: 0}); //4
rendererColorArray.push({r: 1, g: 1, b: 1}); //5

//Cube Color
var cubeColorArray = [];
cubeColorArray.push({r: 0, g: 0, b: 0}); //0 102, 51, 153
cubeColorArray.push({r: 1, g: 1, b: 1}); //1 102, 51, 153
cubeColorArray.push({r: 0.5, g: 0.5, b: 0.5}); //2
cubeColorArray.push({r: 1, g: 1, b: 1}); //3
cubeColorArray.push({r: 1, g: 1, b: 1}); //4
cubeColorArray.push({r: 31/225, g: 58/225, b: 147/225 });//({r: 22/225, g: 160/225, b: 133/225}); //({r: 142/255, g: 68/255, b: 173/255}); //5  rgb(142, 68, 173)

//Sphere  Color
var sphereColorArray = [];
sphereColorArray.push({r: 0, g: 0, b: 0}); //0
sphereColorArray.push({r: 1, g: 1, b: 1}); //1
sphereColorArray.push({r: 1, g: 1, b: 1}); //2
sphereColorArray.push({r: 1, g: 1, b: 1}); //3
sphereColorArray.push({r: 271/255, g: 30/255, b: 24/255}); //4  217, 30, 24
sphereColorArray.push({r: 0 , g: 0, b: 0}); //5 31, 58, 147



function changeScene(d)
{
  if(d != currentScene)
  {

    animateBool = true;
    currentScene = d;

      rendererColorAnimation = [];
      sphereColorAnimation = [];
      cubeColorAnimation = [];

      var tween = new TWEEN.Tween(renderer.getClearColor()).to(rendererColorArray[d], 1*animationTime);
      tween.easing(TWEEN.Easing.Elastic.InOut)
      tween.start();
      rendererColorAnimation.push(renderer.getClearColor());

      var tweenCube = new TWEEN.Tween(moebiusArray[0].material.color).to(cubeColorArray[d], 1*animationTime);
      tweenCube.easing(TWEEN.Easing.Elastic.InOut)
      tweenCube.start();
      cubeColorAnimation.push(moebiusArray[0].material.color);

      var tweenSphere = new TWEEN.Tween(particleArray[0].material.color).to(sphereColorArray[d], 1*animationTime);
      tweenSphere.easing(TWEEN.Easing.Elastic.InOut)
      tweenSphere.start();
      sphereColorAnimation.push(particleArray[0].material.color);



      var settleDownCubeGroupTween = new TWEEN.Tween(cubeGroup.position).to({x: 0, y: 0, z: 0}, 1*animationTime);
      settleDownCubeGroupTween.start();

      var settleDownCubeGroupTween1 = new TWEEN.Tween(cubeGroup.rotation).to({x: 0, y: 0, z: 0}, 1*animationTime);
      settleDownCubeGroupTween1.start();

      var settleDownGroupTween = new TWEEN.Tween(group.position).to({x: 0, y: 0, z: 0}, 1*animationTime);
      settleDownCubeGroupTween.start();

      var settleDownGroupTween1 = new TWEEN.Tween(group.rotation).to({x: 0, y: 0, z: 0}, 1*animationTime);
      settleDownCubeGroupTween1.start();


      // var settleDownGroupTween = new TWEEN.Tween(group.position).to(settleDownGroupAnimation[0], 1*animationTime);
      // settleDownGroupTween.easing(TWEEN.Easing.Elastic.InOut)
      // settleDownGroupTween.start();
      // settleDownGroupAnimation.push(group.position);



      if(d == 0)
      {
        document.getElementById("testText").innerHTML = 'FIVE STAGES OF GRIEF';
        zerozero(1);
      }
      else if(d == 1)
      {
        var x = document.getElementById("desc-mobile");
        x.style.display = "none";

        x = document.getElementById("desc-pc");
        x.style.display = "none";

        document.getElementById("testText").innerHTML = 'I.  DENIAL';
        onezero(1);
      }
      else if(d == 2)
      {
        document.getElementById("testText").innerHTML = 'II.  ANGER';
        twozero(1);
      }
      else if(d == 3)
      {
        document.getElementById("testText").innerHTML = 'III.  BARGAIN';
        threezero(1);
      }
      else if(d == 4)
      {
        document.getElementById("testText").innerHTML = 'IV.  DEPRESSION';
        fourzero(1);
      }
      else if(d == 5)
      {
        document.getElementById("testText").innerHTML = 'V.  ACCEPTANCE';
        fivezero(1);
      }
    }
}

function zeroCalled(d)
{
  // renderer.setClearColor(0x96281B, 1);
  zerozero(.5, d);
  animateBool = true;
  // renderer.setClearColor(0xd35400);
  currentScene = -10;

}

//Request for Render

requestAnimationFrame(render);

//RENDER STARTS

function render(){

  if(isDevicePhone)
  {
    mouseX = phoneOrientationZ*12;
    mouseY = phoneOrientationY*6;
  }


  if(!animateBool)
  {
    camera.position.x += ( - mouseX/10 - camera.position.x ) * .05;
    camera.position.y += ( - mouseY/5 - camera.position.y ) * .05;
  }

  camera.lookAt(scene.position);
  if(!animateBool)
  {
    if(currentScene == 0)
    {
      group.rotation.z += 0.01;
    }

    if(currentScene == 1 || currentScene == 2 || currentScene == 3 || currentScene == 4 || currentScene == 5)
    {
      //NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin


      var magicVar = 1;

      if(isDevicePhone)
      {
        magicVar = 1/2.5;
      }

      var OldMin = -window.innerWidth;
      var OldMax = window.innerWidth;
      var NewMin = -magicalNumberX*2.5*magicVar;
      var NewMax = magicalNumberX*2.5*magicVar;
      var NewValue = (((mouseX - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;

      if(currentScene == 4)
      {
        OldMin = window.innerWidth;
        OldMax = -window.innerWidth;
        NewMin = -magicalNumberX*2.5*magicVar;
        NewMax = magicalNumberX*2.5*magicVar;
        NewValue = (((mouseX - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;

        cubeGroup.position.x += ( NewValue - cubeGroup.position.x ) * .1;
      }
      else if(currentScene != 3 && currentScene != 5 && currentScene != 0)
      {
        cubeGroup.position.x += ( NewValue - cubeGroup.position.x ) * .1;
      }



      OldMin = -window.innerHeight;
      OldMax =  window.innerHeight;
      NewMin = -magicalNumberX*2.5*magicVar;
      NewMax = magicalNumberX*2.5*magicVar;
      NewValue = (((mouseY - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;


      if(currentScene == 4)
      {
        OldMin = window.innerHeight;
        OldMax = -window.innerHeight;
        NewMin = -magicalNumberX*2.5*magicVar;
        NewMax = magicalNumberX*2.5*magicVar;
        NewValue = (((mouseY - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;
        cubeGroup.position.y += ( NewValue - cubeGroup.position.y ) * .1;
      }
      else if(currentScene != 3 && currentScene != 5 && currentScene != 0)
      {
        cubeGroup.position.y += ( NewValue - cubeGroup.position.y ) * .1;
      }



      //Ring animationTime
      if(isDevicePhone)
      {
        group.rotation.y += (mouseX/5000);
        group.rotation.x -= (mouseY/5000);
      }
      else
      {
       group.rotation.y += (mouseX/40000);
       group.rotation.x -= (mouseY/40000);
      }

      // group.rotation.y = (mouseX/2000);
      // group.rotation.x =  (mouseY/2000);

    }
    else if(currentScene == 100)
    {
      //group.rotation.x += (mouseY/10000);
      // cubeGroup.rotation.x += (mouseY/10000);
      //
      group.rotation.y += (mouseX/20000);
      // cubeGroup.rotation.y -= (mouseX/20000);

      //group.rotation.y = (mouseX/1000);
      group.rotation.x =  (mouseY/20000);

    }
    else if(currentScene == 200)
    {
      group.rotation.z = (mouseX/1000);
      //group.rotation.x = (mouseY/500);

      // cubeGroup.rotation.x = group.rotation.x;
      // cubeGroup.rotation.z   = group.rotation.z;
    }
    else if(currentScene == 300)
    {
      //One1Animation Starts

      //NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin

      var OldMin = -window.innerWidth;
      var OldMax = window.innerWidth;
      var NewMin = -magicalNumberX*1.5;
      var NewMax = magicalNumberX*1.5;
      var NewValue = (((mouseX - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;

      cubeGroup.position.x += ( NewValue - cubeGroup.position.x ) * .1;

      OldMin = -window.innerHeight;
      OldMax =  window.innerHeight;
      NewMin = -magicalNumberX*2.5;
      NewMax = magicalNumberX*2.5;
      NewValue = (((mouseY - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;

      cubeGroup.position.y += ( NewValue - cubeGroup.position.y ) * .1;

      OldMin = 0;
      OldMax = window.innerHeight + window.innerWidth;
      NewMin = 0.5;
      NewMax = 15;
      NewValue = ((( 2*(Math.abs(mouseX) + 2*Math.abs(mouseY))/3 - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;

      mainObject.scale.x += ( (NewValue) - mainObject.scale.x ) * .1;
      mainObject.scale.z = mainObject.scale.y = mainObject.scale.x;

      //Ring animationTime
       group.rotation.y += (mouseX/20000);
       group.rotation.x -= (mouseY/20000);

      // group.rotation.y = (mouseX/2000);
      // group.rotation.x =  (mouseY/2000);

    }
  }


//document.getElementById("testText").innerHTML = group.rotation.z;
  //One1Animation Ends

  var time = Date.now() * 0.001;

  var multttt = 0.5;

  var rx = Math.sin( time * 0.4 ) * multttt,
      ry = Math.sin( time * 0.2 ) * multttt,
      rz = Math.sin( time * 0.3 ) * multttt;

  if(!animateBool)
  {
    cubeGroup.rotation.x = rx;
    cubeGroup.rotation.y = ry;
    cubeGroup.rotation.z = rz;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(render);

  if(currentScene != -1)
  {
    TWEEN.update();

    for(var i = 0 ; i < 120 ; i+=1)
    {      

      var mesh = moebiusArray[i];
      mesh.position.x = moebiusAnimation[i].x;
      mesh.position.y = moebiusAnimation[i].y;
      mesh.position.z = moebiusAnimation[i].z;
      mesh.rotation.x = moebiusAnimation[i].rx;
      mesh.rotation.y = moebiusAnimation[i].ry;
      mesh.rotation.y = moebiusAnimation[i].rz;
      mesh.scale.x = moebiusAnimation[i].sx;
      mesh.scale.y = moebiusAnimation[i].sy;
      mesh.scale.z = moebiusAnimation[i].sz;

      // mesh.material.color.r = cubeColorAnimation[0].r;
      // mesh.material.color.g = cubeColorAnimation[0].g;
      // mesh.material.color.b = cubeColorAnimation[0].b;

    }

    for(var i = 0 ; i < 1000 ; i+=1)
    {
      var mesh = particleArray[i];
      mesh.position.x = particleAnimation[i].x;
      mesh.position.y = particleAnimation[i].y;
      mesh.position.z = particleAnimation[i].z;
      mesh.rotation.x = particleAnimation[i].rx;
      mesh.rotation.y = particleAnimation[i].ry;
      mesh.rotation.z = particleAnimation[i].rz;
      mesh.scale.x = particleAnimation[i].sx;
      mesh.scale.y = particleAnimation[i].sy;
      mesh.scale.z = particleAnimation[i].sz;

      // mesh.material.color.r = sphereColorAnimation[0].r;
      // mesh.material.color.g = sphereColorAnimation[0].g;
      // mesh.material.color.b = sphereColorAnimation[0].b;

    }
  }
  else {
    // animateBool = true;
    // musicUp(1);
  }
  if(currentScene == -1)
  {
    //zeroCalled(0);
    changeScene(0);
  }


}


var moebiusAnimation = [];
var particleAnimation = [];
var cubeGroupAnimation = [];
var groupAnimation = [];
var windowWidthAnimationFactor = 1;

var animationTime = 2000;

var phoneOrientationZ = 0;
var phoneOrientationY = 0;

var isDevicePhone = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{

  if (window.DeviceOrientationEvent) {

    var x = document.getElementById("desc-pc");
    x.style.display = "none";


   console.log("DeviceOrientation is supported");
   isDevicePhone = true;
   camera.position.z = -120;

   window.addEventListener('deviceorientation', function(event) {
    //  document.getElementById("moAccel").innerHTML = 0;//event.alpha;
     // 	document.getElementById("moRotation").innerHTML = event.beta;
      // document.getElementById("moInterval").innerHTML = event.gamma;

      // if( (0 < event.beta) && (event.beta < 45) )
      // {
      //   phoneOrientationY = event.beta;
      // }
      // if( (45 <= event.beta) && (event.beta < 90) )
      // {
      //   phoneOrientationY = event.beta;
      // }

      phoneOrientationY = event.beta - 45;

      if(Math.abs(event.gamma) < 45)
      {
        phoneOrientationZ = event.gamma;
      }
    }, false);
  }
}
else {
  var x = document.getElementById("desc-mobile");
  x.style.display = "none";
}


//Different Shapes

//Hiren-STATES



//Mouse Position

var canvas = document.getElementById('mainBody');

var mouseX = -1;
var mouseY = -1;



if(isDevicePhone)
{
  canvas.addEventListener('touchstart', function(evt) {

    if(currentScene == -1)
    {
      changeScene(0);
    }
    else if(currentScene == 0)
    {
      //zeroCalled(1);
      changeScene(1);
    }
    else if(currentScene == 1)
    {
      //zeroCalled(0);
      changeScene(2);
    }
    else if(currentScene == 2)
    {
      //zeroCalled(0);
      changeScene(3);
    }
    else if(currentScene == 3)
    {
      //zeroCalled(0);
      changeScene(4);
    }
    else if(currentScene == 4)
    {
      //zeroCalled(0);
      changeScene(5);
    }
    else if(currentScene == 5)
    {
      //zeroCalled(0);
      changeScene(1);
    }
  }, false);
}
else {
  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if(!isDevicePhone)
    {
      mouseX = mousePos.x - winWidth/2;
      mouseY = mousePos.y - winHeight/2;
    }

  }, false);

  canvas.addEventListener('click', function(evt) {
    if(currentScene == -1)
    {
      changeScene(0);
    }
    else if(currentScene == 0)
    {
      //zeroCalled(1);
      changeScene(1);
    }
    else if(currentScene == 1)
    {
      //zeroCalled(0);
      changeScene(2);
    }
    else if(currentScene == 2)
    {
      //zeroCalled(0);
      changeScene(3);
    }
    else if(currentScene == 3)
    {
      //zeroCalled(0);
      changeScene(4);
    }
    else if(currentScene == 4)
    {
      //zeroCalled(0);
      changeScene(5);
    }
    else if(currentScene == 5)
    {
      //zeroCalled(0);
      changeScene(1);
    }
  }, false);
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

//WINDOWS RESIZE

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
  winWidth = window.innerWidth/2;
  winHeight = window.innerHeight;
  var cc = document.getElementById('myCanvas');

  winWidth = window.innerWidth;
  cc.style.margin = "0 0 0 0";

  camera.aspect = winWidth / winHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( winWidth, winHeight );
}
