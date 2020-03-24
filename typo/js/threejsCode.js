
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var cc = document.getElementById('myCanvas')

winWidth = window.innerWidth;
cc.style.margin = "0 0 0 0";

var doubleArray;

var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), antialias: true, alpha: true });
renderer.setClearColor(0x000000, 1);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(winWidth, winHeight);

var camera = new THREE.PerspectiveCamera(50, winWidth / winHeight, 0.1, 30000);
var scene = new THREE.Scene();

var lightX1 = new THREE.DirectionalLight(0xffffff, 0.5);
lightX1.position.x = 1;
scene.add(lightX1);

var lightX2 = new THREE.DirectionalLight(0xffffff, 1);
lightX2.position.x = -1;
scene.add(lightX2);

var lightY1 = new THREE.DirectionalLight(0xffffff, 1);
lightY1.position.y = -1;
scene.add(lightY1);

var lightY2 = new THREE.DirectionalLight(0xffffff, 0.8);
lightY2.position.z = 1;
scene.add(lightY2);


var light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
// scene.add( light);


var texture = new THREE.TextureLoader().load("/images/a/tex.jpg");
var bMap = new THREE.TextureLoader().load("/images/a/nor.jpg");
var eMap = new THREE.TextureLoader().load("/images/a/occ.jpg");

//Phone Material
var material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  // map: texture,
  // normalMap: bMap,
  // emissiveMap: eMap,
  // emissive: 0xffffff,
  // emissiveIntensity: 2,
  shininess: 0,
  // specularMap: eMap,
  // specular: 0x000000,
  // skinning: true

});

var textureS = new THREE.TextureLoader().load("/images/a/tex2.jpg");
var bMapS = new THREE.TextureLoader().load("/images/a/nor2.jpg");
var eMapS = new THREE.TextureLoader().load("/images/a/occ2.jpg");

var stretchedMaterial = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  // map: textureS,
  // normalMap: bMapS,
  // emissiveMap: eMapS,
  // emissive: 0xffffff,
  // emissiveIntensity: 2,
  shininess: 0,
  // specularMap: eMap,
  // specular: 0x000000,
  // skinning: true

});


geometry = new THREE.CubeGeometry(1, 1, 1);
//geometry = new THREE.SphereGeometry(.5, 32, 32);
var mesh = new THREE.Mesh(geometry, material);

//ANIMATION VALUE CONTAINER ARRAY
var cubeArrayAnimation = [];

//ALL THE CUBE HOLDER ARRAY
var arrayCube = [];

//MASTER HOLDER FOR ALL OF THE CUBES -- NO LIGHTS AND CAMERA
var masterGroup = new THREE.Object3D();

scene.add(masterGroup);

masterGroup.rotation.y = 45 * (Math.PI / 180);
masterGroup.rotation.x = -30 * (Math.PI / 180);

var multiVar = 1;

for (var k = -3; k <= 3; k++) {
  var arrayCounter = 0;
  for (var j = -1; j <= 1; j++) {
    for (var i = -1; i <= 1; i++) {
      var mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = -i;
      mesh.position.y = -k * multiVar;
      mesh.position.z = -j;

      mesh.scale.z = mesh.scale.x = stringCube[0][k + 3][arrayCounter];
      mesh.scale.y = stringCube[0][k + 3][arrayCounter] * multiVar;

      mesh.rotation.y = stringCubeRotation[0][k + 3][arrayCounter] * (Math.PI / 180);
      if (stringCubeRotation[0][k + 3][arrayCounter] != 0) {
        mesh.scale.z = Math.sqrt(2) * 2;
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



//CAMERA POSITION FOR DESKTOP
camera.position.z = -10;
camera.lookAt(scene.position);



//!SCENE CHANGING CODE STARTS


//!Request for Render
requestAnimationFrame(render);

var counter = 0;
var emissionValue = 1;
var emissionMax = 3;

//!RENDER STARTS
function render() {

  if (isDevicePhone) {
    mouseX = -phoneOrientationZ * 9;
    mouseY = -phoneOrientationY * 9;
  }


  //!CAMERA ANIMATION
  if (1)
  {
    camera.position.x += (- mouseX / 30 - camera.position.x) * .05;
    camera.position.y += (- mouseY / 15 - camera.position.y) * .05;

  }

  camera.lookAt(scene.position);


  //!Counter for changing occulsion
  counter = counter + 0.05;

  if (counter == 180) {
    counter = 0;
  }


  renderer.render(scene, camera);
  requestAnimationFrame(render);

//!UPDATING HERE EVERYTHING - MASTER LOOPING
  if (1) {
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

    for (var k = -3; k <= 3; k++) {
      var arrayCounter = 0;

      for (var j = -1; j <= 1; j++) {
        for (var i = -1; i <= 1; i++) {

          var mesh = arrayCube[meshArrayCounter];

          if (stringCubeRotation[currentStage][k + 3][arrayCounter] == 45) {
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

          //!Occulsion ANIMATION
          if ((i == -1) && (j == -1) && (k == -3)) {
            // mesh.material.emissiveIntensity = 0.5 * (1 + Math.sin(counter));
            // stretchedMaterial.emissiveIntensity = 0.5 * (1 + Math.sin(counter));
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
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  if (window.DeviceOrientationEvent) {


    console.log("DeviceOrientation is supported");
    isDevicePhone = true;
    camera.position.z = -13;

    window.addEventListener('deviceorientation', function (event) {
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

      if (Math.abs(event.gamma) < 45) {
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



if (isDevicePhone) {
  canvas.addEventListener('touchstart', function (evt) {

    // if (currentScene != -0) {
    //   // changeScene(0);
    // }

  }, false);
}
else {
  canvas.addEventListener('mousemove', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    if (!isDevicePhone) {
      mouseX = mousePos.x - winWidth / 2;
      mouseY = mousePos.y - winHeight / 2;
    }

  }, false);

  canvas.addEventListener('click', function (evt) {
    // if (currentScene != -0) {
    //   // changeScene(0);
    // }

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

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  winWidth = window.innerWidth / 2;
  winHeight = window.innerHeight;
  var cc = document.getElementById('myCanvas');

  winWidth = window.innerWidth;
  cc.style.margin = "0 0 0 0";

  camera.aspect = winWidth / winHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(winWidth, winHeight);
}
