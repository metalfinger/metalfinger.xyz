
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


var light = new THREE.DirectionalLight(0x2c2c54, 1);
// light.position.x = 1;
// scene.add(light);

 // var light2 = new THREE.DirectionalLight(0x00ff00, 1);
 // light2.position.y = 1;
 // scene.add(light2);

// var light2 = new THREE.DirectionalLight(0xffffff, 0.5);
// light2.position.z = 1;
// scene.add(light2);
//

var light3 = new THREE.DirectionalLight(0xffffff, 0.2);
light3.position.x = 1;
light3.rotation.y = 45*(Math.PI/180);
lightGroup.add(light3);


 var light4 = new THREE.DirectionalLight(0xffffff, 0.2);
 light4.position.y = -1;
  lightGroup.add(light4);

var light5 = new THREE.DirectionalLight(0xffffff, 1);
light5.position.z = -1;
lightGroup.add(light5);

var light = new THREE.AmbientLight( 0xffffff ); // soft white light
// scene.add( light );

// var light1 = new THREE.DirectionalLight(0x00ff00, 1);
//light1.position.x = 1;
// scene.add(light1);

//var light1 = new THREE.AmbientLight(0xffffff, 1);
//light1.position.set(0, 100, 0);
//scene.add(light1);




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var stringCube = [
  [ //Initial -> 0
    [1, 1, 1,  1, 0, 1,  1, 1, 1],
    [1, 0, 1,  0, 0, 0,  1, 0, 1],
    [1, 0, 1,  0, 0, 0,  1, 0, 1],
    [1, 1, 1,  1, 0, 1,  1, 1, 1],
    [1, 0, 1,  0, 0, 0,  1, 0, 1],
    [1, 0, 1,  0, 0, 0,  1, 0, 1],
    [1, 1, 1,  1, 0, 1,  1, 1, 1],
  ],
  [  //Capital A -> 1
    [1, 1, 1,  0, 0, 1,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 1, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1]
  ],
  [  //Small A -> 2
    [1, 1, 1,  0, 0, 1,  0, 0, 1],
    [0, 0, 0,  0, 0, 0,  0, 0, 1],
    [0, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 1, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  1, 0, 0,  1, 1, 1]
  ],
  [  //Capital B -> 3
    [1, 1, 1,  0, 0, 1,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 1, 0,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  1, 0, 0,  1, 1, 0]
  ],
  [  //Small B -> 4
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  0, 1, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  1, 0, 0,  1, 1, 1]
  ],
  [  //Capital C -> 5
    [1, 1, 1,  0, 0, 1,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  1, 0, 0,  1, 1, 1]
  ],
  [  //Small C -> 6
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 1, 1,  0, 0, 1,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 0],
    [1, 0, 0,  1, 0, 0,  1, 1, 1],
    [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ],
  [  //Capital D -> 7
    [1, 1, 1,  0, 0, 1,  0, 0, 0],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  1, 0, 0,  1, 1, 0]
  ],
  [  //Small D -> 8
    [0, 0, 0,  0, 0, 0,  0, 0, 1],
    [0, 0, 0,  0, 0, 0,  0, 0, 1],
    [0, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 1, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  0, 0, 0,  0, 0, 1],
    [1, 0, 0,  1, 0, 0,  1, 1, 1]
  ]
]

var stringCubeRotation = [
  [// Initial ->0
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ],
  [ //Capital A -> 1
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 45, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ],
  [ //Small A -> 2
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 45, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ],
  [ //Capital B -> 3
    [0, 0, 0,  0, 0, 10,  0, 0, 0],  //10 for the top-right edge //11 is support
    [0, 0, 0,  0, 0, 0,  0, 0, 5],
    [0, 0, 0,  0, 0, 0,  0, 0, 5],
    [0, 0, 0,  0, 45, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 5],
    [0, 0, 0,  0, 0, 0,  0, 0, 5],
    [0, 0, 0,  0, 0, 0,  0, 20, 0]  //20 for the bottom-right edge
  ],
  [ //Small B -> 4
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 45, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ],
  [ //Capital C -> 5
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ],
  [ //Small C -> 6
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ],
  [ //Capital D -> 7
    [0, 0, 0,  0, 0, 10,  0, 0, 0],  //10 for the top-right edge //11 is support
    [0, 0, 0,  0, 0, 0,  0, 0, 5],
    [0, 0, 0,  0, 0, 0,  0, 0, 5],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 5],
    [0, 0, 0,  0, 0, 0,  0, 0, 5],
    [0, 0, 0,  0, 0, 0,  0, 20, 0]  //20 for the bottom-right edge
  ],
  [ //Small D -> 8
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 45, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0],
    [0, 0, 0,  0, 0, 0,  0, 0, 0]
  ]
]



var material = new THREE.MeshBasicMaterial({
  color: 0xffffff
});

material= new THREE.MeshPhongMaterial( {
                                        color: 0xffffff,
                                        specular: 0x000000,
                                        shininess: 0
                                      } );

//material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true } ) ;


// BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
// var texture = new THREE.TextureLoader().load( "texBB.png" );
// var bMap = new THREE.TextureLoader().load( "bump.png" );


//CCd
// var texture = new THREE.TextureLoader().load( "texCat.png" );
// var bMap = new THREE.TextureLoader().load( "norCat.png" );

var texture = new THREE.TextureLoader().load( "tex.png" );
  var bMap = new THREE.TextureLoader().load( "normD.png" );


material = new THREE.MeshPhongMaterial( {normalMap :bMap} );



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
masterGroup.rotation.x = -35*(Math.PI/180);

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
  subGroup.add(mesh);
}




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ENDS



camera.position.z = -15;
camera.lookAt(scene.position);




//SCENE CHANGING CODE STARTS

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
        var tweenAnimation = new TWEEN.Tween(renderer.getClearColor()).to(rendererColorArray[d], 1*animationTime);
        tweenAnimation.easing(TWEEN.Easing.Elastic.InOut)
        tweenAnimation.start();

        var array1Tween = new TWEEN.Tween(arrayCube[0].material.color).to(arrayColorArray[d], 1*animationTime);
        array1Tween.easing(TWEEN.Easing.Elastic.InOut)
        array1Tween.start();

        changeTypo(7, 3);
      }
    }
}


//Request for Render

requestAnimationFrame(render);

var counter = 0;

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



  counter = counter + 3;

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

    for(var i = 0 ; i < stringCube[0].length*stringCube[0][0].length ; i+=1)
    {
      var mesh = arrayCube[i];

      mesh.scale.x = cubeArrayAnimation[i].sx;
      mesh.scale.y = cubeArrayAnimation[i].sy;
      mesh.scale.z = cubeArrayAnimation[i].sz;

      mesh.rotation.x = cubeArrayAnimation[i].rx;
      mesh.rotation.y = cubeArrayAnimation[i].ry;
      mesh.rotation.z = cubeArrayAnimation[i].rz;

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
