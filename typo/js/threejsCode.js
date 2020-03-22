
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
renderer.setClearColor(0x000000, 1);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(winWidth, winHeight);

var camera = new THREE.PerspectiveCamera(50, winWidth/winHeight, 0.1, 30000);
var scene = new THREE.Scene();

var lightGroup = new THREE.Object3D();


//   var lightX1 = new THREE.DirectionalLight(0xff2079, 1);
//   lightX1.position.x = 1;
//   scene.add(lightX1);

//   var lightX2 = new THREE.DirectionalLight(0x4005e  , 1);
// lightX2.position.x = -1;
// scene.add(lightX2);

// var lightY1 = new THREE.DirectionalLight(0xe92efb, 0.5);
// lightY1.position.y = -1;
// scene.add(lightY1);


var lightX1 = new THREE.DirectionalLight(0xaaaaaa, 0.5);
lightX1.position.x = 1;
scene.add(lightX1);

var lightX2 = new THREE.DirectionalLight(0xeeeeee  , 0.5);
lightX2.position.x = -1;
scene.add(lightX2);

var lightY1 = new THREE.DirectionalLight(0xffffff, 0.5);
lightY1.position.y = -1;
scene.add(lightY1);




var light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
// scene.add( light);


var texture = new THREE.TextureLoader().load( "t3.png" );
var bMap = new THREE.TextureLoader().load( "normD.png" );
var eMap = new THREE.TextureLoader().load( "e3.png" );

//Phone Material
var material = new THREE.MeshPhongMaterial( {
  map: texture,
  normalMap: bMap,
  emissiveMap: eMap,
  emissive: 0xffaa00,
  emissiveIntensity: 2
  
} );

var textureS = new THREE.TextureLoader().load( "t3e.png" );
var bMapS = new THREE.TextureLoader().load( "normD.png" );
var eMapS = new THREE.TextureLoader().load( "e3e.png" );

var stretchedMaterial = new THREE.MeshPhongMaterial( {
  map: textureS,
  normalMap: bMapS,
  emissiveMap: eMapS,
  emissive: 0xffaa00,
  emissiveIntensity: 2
  
} );


//Lambert Material
// var material = new THREE.MeshLambertMaterial( {
//   map: texture,
//     color: 0xffffff,
//     reflectivity: 0.8,
//   // shininess: 0.3,
// } );



geometry = new THREE.CubeGeometry(1, 1, 1);
//geometry = new THREE.SphereGeometry(.5, 32, 32);
var mesh = new THREE.Mesh( geometry, material );



//Hiren New String STARTS

var cubeArrayAnimation = [];

var arrayCube = [];

var masterGroup = new THREE.Object3D();

scene.add(masterGroup);

masterGroup.add(lightGroup);

masterGroup.rotation.y = 45*(Math.PI/180);
masterGroup.rotation.x = -30*(Math.PI/180);

var multiVar = 1;

for(var k = -3 ; k <= 3 ; k++)
{
  var arrayCounter = 0;
  for(var j = -1 ; j <= 1 ; j++)
  {
    for(var i = -1 ; i <= 1 ; i++)
    {
      var mesh = new THREE.Mesh( geometry, material );

      mesh.position.x = -i;
      mesh.position.y = -k*multiVar;
      mesh.position.z = -j;

      mesh.scale.z = mesh.scale.x = stringCube[0][k+3][arrayCounter];
      mesh.scale.y = stringCube[0][k+3][arrayCounter]*multiVar;

      mesh.rotation.y = stringCubeRotation[0][k+3][arrayCounter]*(Math.PI/180);
      if(stringCubeRotation[0][k+3][arrayCounter] != 0)
      {
          mesh.scale.z = Math.sqrt(2)*2;
          mesh.scale.x = Math.sqrt(2);
      }


      arrayCounter++;

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      arrayCube.push(mesh);
      masterGroup.add(mesh);
    }
  }
}
//Hiren New String ENDS




var subArray = [];

var subGroup = new THREE.Object3D();



subGroup.rotation.x = 45*(Math.PI/180);

// masterGroup.add(subGroup);

geometry = new THREE.SphereGeometry( 0.2, 32, 32 );
material = new THREE.MeshBasicMaterial( {color: 0xffb46e} );

subGroup.position.x = -1;
subGroup.position.y = 3;
subGroup.position.z = -1;




for(var k = 0 ; k <= 120 ; k++)
{
  var angle = 0;

  angle = k*2*(Math.PI/180);

  var mesh = new THREE.Mesh( geometry, material );

  mesh.position.x = Math.sin(angle)*1.5;
  mesh.position.y = 0;
  mesh.position.z = Math.cos(angle)*1.5;;

  mesh.scale.z = mesh.scale.y = mesh.scale.x = 0.3*(k/120);



  mesh.castShadow = true;
  mesh.receiveShadow = true;

  subArray.push(mesh);
  //subGroup.add(mesh);
}




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ENDS



camera.position.z = -10;
camera.lookAt(scene.position);




//SCENE CHANGING CODE STARTS
var currentStage = 1;
var currentScene = -1;
var animateBool = false;

function changeScene(d)
{
  if(d != currentScene)
  {

    animateBool = true;
    currentScene = d;
      if(d == 0)
      {
        // var tweenAnimation = new TWEEN.Tween(renderer.getClearColor()).to(rendererColorArray[d], 1*animationTime);
        // tweenAnimation.easing(TWEEN.Easing.Elastic.InOut)
        // tweenAnimation.start();

        // var array1Tween = new TWEEN.Tween(arrayCube[0].material.color).to(arrayColorArray[d], 1*animationTime);
        // array1Tween.easing(TWEEN.Easing.Elastic.InOut)
        // array1Tween.start();

        changeTypo(currentStage, 1);
      }
    }
}


//Request for Render

requestAnimationFrame(render);

var counter = 0;
var emissionValue = 1;
var emissionMax = 3;

//RENDER STARTS
function render(){

  if(isDevicePhone)
  {
    mouseX = -phoneOrientationZ*9;
    mouseY = -phoneOrientationY*9;
  }


  if(1)//!animateBool)
  {
    camera.position.x += ( - mouseX/30 - camera.position.x ) * .05;
    camera.position.y += ( - mouseY/15 - camera.position.y ) * .05;
  }

  camera.lookAt(scene.position);

  // BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB



   subGroup.rotation.y = subGroup.rotation.y + 0.05;



  counter = counter + 0.05;

  if(counter == 180)
  {
     counter = 0;
  }



  // BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB

  renderer.render(scene, camera);
  requestAnimationFrame(render);

  if( (currentScene != -1) && (animateBool))
  {

    TWEEN.update();

    // for(var i = 0 ; i < stringCube[0].length*stringCube[0][0].length ; i+=1)
    // {
    //   var mesh = arrayCube[i];

    //   mesh.scale.x = cubeArrayAnimation[i].sx;
    //   mesh.scale.y = cubeArrayAnimation[i].sy;
    //   mesh.scale.z = cubeArrayAnimation[i].sz;

    //   mesh.rotation.x = cubeArrayAnimation[i].rx;
    //   mesh.rotation.y = cubeArrayAnimation[i].ry;
    //   mesh.rotation.z = cubeArrayAnimation[i].rz;

    //   // if(stringCubeRotation[stagee][k+3][arrayCounter] == 45)
    //   // {
    //   //   mesh.material = stretchedMaterial;
    //   // }

    //   if(i == 0)
    //   {
    //     mesh.material.emissiveIntensity = 1 + Math.sin(counter);
    //     console.log("HH");
    //   }

    // }

    var meshArrayCounter = 0;

    for(var k = -3 ; k <= 3 ; k++)
    {
      var arrayCounter = 0;

      for(var j = -1 ; j <= 1 ; j++)
      {
        for(var i = -1 ; i <= 1 ; i++)
        {

          var mesh = arrayCube[meshArrayCounter];

         if(stringCubeRotation[currentStage][k+3][arrayCounter] == 45)
         {
            mesh.material = stretchedMaterial;
         }

          mesh.scale.x = cubeArrayAnimation[meshArrayCounter].sx;
          mesh.scale.y = cubeArrayAnimation[meshArrayCounter].sy;
          mesh.scale.z = cubeArrayAnimation[meshArrayCounter].sz;

          mesh.rotation.x = cubeArrayAnimation[meshArrayCounter].rx;
          mesh.rotation.y = cubeArrayAnimation[meshArrayCounter].ry;
          mesh.rotation.z = cubeArrayAnimation[meshArrayCounter].rz;

          meshArrayCounter++;
          arrayCounter++;

          if( (i == -1) && (j == -1) && (k == -3))
          {
            mesh.material.emissiveIntensity = 1 + Math.sin(counter);  
            stretchedMaterial.emissiveIntensity = 1 + Math.sin(counter);
          }

        }
      }
    }

  }
}


var windowWidthAnimationFactor = 1;

var animationTime = 2000;

var phoneOrientationZ = 0;
var phoneOrientationY = 0;

var isDevicePhone = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
{

  if (window.DeviceOrientationEvent) {


   console.log("DeviceOrientation is supported");
   isDevicePhone = true;
   camera.position.z = -20;

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

    if(currentScene != -0)
    {
      changeScene(0);
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
    if(currentScene != -0)
    {
      changeScene(0);
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
