
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


var light = new THREE.DirectionalLight(0x2c2c54, 1);
light.position.x = 1;
scene.add(light);

 // var light2 = new THREE.DirectionalLight(0x00ff00, 1);
 // light2.position.y = 1;
 // scene.add(light2);

// var light2 = new THREE.DirectionalLight(0xffffff, 0.5);
// light2.position.z = 1;
// scene.add(light2);
//

var light3 = new THREE.DirectionalLight(0xb33939, 1);
light3.position.x = -1;
scene.add(light3);

//  var light4 = new THREE.DirectionalLight(0x00ff00, 0.5);
//  light4.position.y = -1;
//  scene.add(light4);

var light5 = new THREE.DirectionalLight(0xffffff, 1);
light5.position.z = -1;
scene.add(light5);

// var light1 = new THREE.DirectionalLight(0x00ff00, 1);
//light1.position.x = 1;
// scene.add(light1);

//var light1 = new THREE.AmbientLight(0xffffff, 1);
//light1.position.set(0, 100, 0);
//scene.add(light1);




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var string1 = [//you is
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var string1backup = [//you
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1]
];

var string4 = [//is
  [1, 1, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1]
];

var string5 = [//smart
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1.0, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0.0, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1.0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0.7, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0.0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0, 0, 0, 0, 0, 0]
];

var string3 = [//kind
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0.7, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1.0, 0],
  [0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1.0, 0],
  [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1.0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0.7, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0]
];

var string2 = [//important
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1.0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0.0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1.0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0.7, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0.0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];




var material = new THREE.MeshBasicMaterial({
  color: 0xffffff
});

material= new THREE.MeshPhongMaterial( {
                                        color: 0xffffff,
                                        specular: 0xffffff,
                                        shininess: 0
                                      } );

//material = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true } ) ;



geometry = new THREE.CubeGeometry(1, 1, 1);
//geometry = new THREE.SphereGeometry(.5, 32, 32);
var mesh = new THREE.Mesh( geometry, material );

var array1 = [];

var xLength1 = string1[0].length;
var yLength1 = string1.length;

var gap = 1.2;
var objectScale = 1;

for(var j = 0 ; j < yLength1 ; j++)
{
  for(var i = 0 ; i < xLength1 ; i++)
  {
    var mesh = new THREE.Mesh( geometry, material );

    mesh.position.x = 0;
    mesh.position.y = 0;

    mesh.scale.z = mesh.scale.y = mesh.scale.x = 0.1;

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    array1.push(mesh);
    scene.add(mesh);
  }
}

// 2nd string1
var array2 = [];

var xLength2 = 41;//string2[0].length;
var yLength2 = 7;//string2.length;

for(var j = 0 ; j < yLength2 ; j++)
{
  for(var i = 0 ; i < xLength2 ; i++)
  {
    var mesh = new THREE.Mesh( geometry, material );

    mesh.position.x = 0;
    mesh.position.y = 0;

    mesh.scale.z = mesh.scale.y = mesh.scale.x = 0.1

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    array2.push(mesh);
    scene.add(mesh);
  }
}





//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ENDS



camera.position.z = -40;
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
        smartOpen1(1);
        var x = document.getElementById("desc-mobile");
        x.style.display = "none";

        var x = document.getElementById("desc-pc");
        x.style.display = "none";
      }
    }
}


//Request for Render

requestAnimationFrame(render);

//RENDER STARTS
function render(){

  if(isDevicePhone)
  {
    mouseX = phoneOrientationZ*36;
    mouseY = phoneOrientationY*18;
  }


  if(1)//!animateBool)
  {
    camera.position.x += ( - mouseX/30 - camera.position.x ) * .05;
    camera.position.y += ( - mouseY/15 - camera.position.y ) * .05;

    var scaleMax = 2;
    var baseScale = 0.5;

    var OldMin = -window.innerWidth;
    var OldMax = window.innerWidth;
    var NewMin = -scaleMax;
    var NewMax = scaleMax;
    var NewValueX = (((mouseX - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;

    var OldMin = -window.innerHeight;
    var OldMax = window.innerHeight;
    var NewMin = -scaleMax;
    var NewMax = scaleMax;
    var NewValueY = (((mouseY - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin;


    // for(var i = 0 ; i < array1.length ; i++)
    // {
    //   var mesh = array1[i];
    //
    //
    //   if(mesh.scale.x != 0.1)
    //   {
    //     if(mouseX < 0)
    //     {
    //         mesh.scale.x = -NewValueX + baseScale;
    //     }
    //     else {
    //         mesh.scale.x = NewValueX + baseScale;
    //     }
    //   }
    //
    //   if(mesh.scale.y != 0.1)
    //   {
    //     if(mouseY < 0)
    //     {
    //       mesh.scale.y = -NewValueY + baseScale;
    //     }
    //     else {
    //       mesh.scale.y = NewValueY + baseScale;
    //     }
    //   }
    // }



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

//        mesh.position.x = -i*gap + (xLength1 - 1)*gap/2;
//        mesh.position.y = -j*gap + 8*gap;


        // var newGap = NewValueX + baseScale;
        //
        // mesh.position.x = -i*newGap + (xLength1 - 1)*newGap/2;
        //
        // mesh.scale.x = newGap;

         if(string1[j][i] == 0)
         {
           if(mouseX < 0)
           {
          //   mesh.scale.z = mesh.scale.y = mesh.scale.x = -NewValueX + baseScale;
           }
           else {
      //       mesh.scale.z = mesh.scale.y = mesh.scale.x = 0.1;
           }
         }
         else {
           if(mouseX < 0)
           {
      //       mesh.scale.z = mesh.scale.y = mesh.scale.x = 0.1;
           }
           else {
        //     mesh.scale.z = mesh.scale.y = mesh.scale.x = NewValueX + baseScale;
           }
         }

         if(1)//mouseX < 0)
         {
            mesh.rotation.y = mouseX/1000;
         }
         else {
           mesh.rotation.y = -mouseX/1000;
         }

         //mesh.rotation.x = -NewValueY;

        // if(mouseX > 0)
        // {
        //   mesh.position.z = mesh.position.y*(j - (yLength1/2))*NewValueY/10;
        //   mesh.position.z = mesh.position.x*(i - (xLength1/2))*NewValueX/20;
        // }
        // else {
        //   mesh.position.z = -mesh.position.y*(j - (yLength1/2))*NewValueY/10;
        //   mesh.position.z = -mesh.position.x*(i - (xLength1/2))*NewValueX/20;
        // }

      }
    }

    //-------------------------------------- Array 2 STARTS

    var xLength2 = string2[0].length;
    var yLength2 = string2.length;

    var gap = 1;
    var objectScale = 1;

    var counter = 0;

    for(var j = 0 ; j < yLength2 ; j++)
    {
      for(var i = 0 ; i < xLength2 ; i++)
      {
        var mesh = array2[counter++];

//        mesh.position.x = -i*gap + (xLength1 - 1)*gap/2;
//        mesh.position.y = -j*gap + 8*gap;


        // var newGap = NewValueX + baseScale;
        //
        // mesh.position.x = -i*newGap + (xLength1 - 1)*newGap/2;
        //
        // mesh.scale.x = newGap;

         if(string2[j][i] == 0)
         {
           if(mouseX < 0)
           {
          //   mesh.scale.z = mesh.scale.y = mesh.scale.x = -NewValueX + baseScale;
           }
           else {
      //       mesh.scale.z = mesh.scale.y = mesh.scale.x = 0.1;
           }
         }
         else {
           if(mouseX < 0)
           {
      //       mesh.scale.z = mesh.scale.y = mesh.scale.x = 0.1;
           }
           else {
        //     mesh.scale.z = mesh.scale.y = mesh.scale.x = NewValueX + baseScale;
           }
         }

         if(1)//mouseX < 0)
         {
            mesh.rotation.y = mouseX/1000;
         }
         else {
           mesh.rotation.y = -mouseX/1000;
         }

         //mesh.rotation.x = -NewValueY;

        // if(mouseX > 0)
        // {
        //   mesh.position.z = mesh.position.y*(j - (yLength1/2))*NewValueY/10;
        //   mesh.position.z = mesh.position.x*(i - (xLength1/2))*NewValueX/20;
        // }
        // else {
        //   mesh.position.z = -mesh.position.y*(j - (yLength1/2))*NewValueY/10;
        //   mesh.position.z = -mesh.position.x*(i - (xLength1/2))*NewValueX/20;
        // }

      }
    }

  }

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
  requestAnimationFrame(render);

  if( (currentScene != -1) && (animateBool))
  {

    TWEEN.update();

    for(var i = 0 ; i < string1.length*string1[0].length ; i+=1)
    {
      var mesh = array1[i];
      mesh.position.x = array1Animation[i].x;
      mesh.position.y = array1Animation[i].y;
      mesh.position.z = array1Animation[i].z;
      mesh.scale.x = array1Animation[i].sx;
      mesh.scale.y = array1Animation[i].sy;
      mesh.scale.z = array1Animation[i].sz;

    }

    for(var i = 0 ; i < string2.length*string2[0].length ; i+=1)
    {
      var mesh = array2[i];
      mesh.position.x = array2Animation[i].x;
      mesh.position.y = array2Animation[i].y;
      mesh.position.z = array2Animation[i].z;
      mesh.scale.x = array2Animation[i].sx;
      mesh.scale.y = array2Animation[i].sy;
      mesh.scale.z = array2Animation[i].sz;

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

    var x = document.getElementById("desc-pc");
    x.style.display = "none";


   console.log("DeviceOrientation is supported");
   isDevicePhone = true;
   camera.position.z = -100;

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
