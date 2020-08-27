var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var cc = document.getElementById('myCanvas')

winWidth = window.innerWidth;
cc.style.margin = "0 0 0 0";

var cubeGroup = new THREE.Object3D();
var env = new THREE.Object3D();
var rotationGroup = new THREE.Object3D();

var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('myCanvas'), antialias: true, alpha: true });
renderer.setClearColor(0x000000, 1);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(winWidth, winHeight);

var camera = new THREE.PerspectiveCamera(50, winWidth / winHeight, 0.1, 3000);
var scene = new THREE.Scene();


var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.x = 1;
scene.add(light);

var light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.y = 1;
scene.add(light3);

var light5 = new THREE.DirectionalLight(0xffffff, 1);
light5.position.z = -1;
scene.add(light5);



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ENDS


var material = new THREE.MeshPhongMaterial({
    color: 0xffffffff,
    specular: 0xff0000,
    shininess: 1000
});

var barSize = 0.05;
var barDepth = 6;

var magicalNumberX = 8;
var magicalNumberY = 8;
var magicalNumberZ = 8;

var particleArray = [];
var envArray = [];


var numberOfParticle = 1000;


//!!Center Element
barSize = 0.5;
var geometry = new THREE.CubeGeometry(barSize, barSize, barSize);

barSize = 0.15;
var geometry = new THREE.SphereGeometry(barSize, 32, 32);


var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    specular: 0x666666,
    shininess: 0
});

// material = new THREE.MeshBasicMaterial({ color: 0xffaa00 });

var maxArea = 40;
var minArea = maxArea / 2;

for (var i = 0; i < 1000; i += 1) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = mesh.position.y = mesh.position.z = 0;
    mesh.rotation.x = mesh.rotation.y = mesh.rotation.z = 0;
    mesh.scale.x = mesh.scale.y = mesh.scale.z = 1;
    particleArray.push(mesh);
    cubeGroup.add(mesh);
}




barCounter = 0
var depthCounter = -5;
var radius = magicalNumberX;
var spread = 1.5;

// for (var i = -5; i < 5; i += 1) {
//     for (var j = -5; j < 5; j += 1) {
//         for (var k = -5; k < 5; k += 1) {
//             var mesh = particleArray[barCounter++];
//             mesh.position.x = (i + 0.5) * spread;
//             mesh.position.y = (j + 0.5) * spread;
//             mesh.position.z = (k + 0.5) * spread;


//         }
//     }
// }


//!!EnV

var material = new THREE.MeshPhongMaterial({ color: 0xffaa00, specular: 0xffaa00, emissive: 0xffaa00, shininess: 10, opacity: 0.8, transparent: true });


var maxArea = 40;
var minArea = maxArea / 2;

var maxArea = 2;
var minArea = 1;

var spread = window.innerWidth / 8;

if (window.innerWidth < window.innerHeight) {
    spread = window.innerHeight / 4;
}

for (var i = 0; i < 1000; i += 1) {
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = Math.random() * spread - spread / 2;
    mesh.position.y = Math.random() * spread - spread / 2;
    mesh.position.z = Math.random() * spread - spread / 2;

    mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.5;

    envArray.push(mesh);
    env.add(mesh);
}

// var circleRadius = 16.0;
// for (var i = -500; i < 500; i += 1) {

//     var iAngle = i * (Math.PI / 180);


//     var mesh = new THREE.Mesh(geometry, material);

//     mesh.position.x = (circleRadius) * Math.sin(iAngle);
//     mesh.position.y = (circleRadius) * Math.cos(iAngle);
//     mesh.position.z = i * 0.02;

//     mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.5;

//     envArray.push(mesh);
//     env.add(mesh);
// }




rotationGroup.add(cubeGroup);
rotationGroup.add(env);
scene.add(rotationGroup);



env.position.set(0, 0, 0);
cubeGroup.position.set(0, 0, 0);

if (window.innerWidth < 900) {
    rotationGroup.position.set(0, 10, 0);
    camera.position.z = -60;
} else {
    rotationGroup.position.set(15, 0, 0);
    camera.position.z = -50;
}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ ENDS




camera.lookAt(scene.position);


//SCENE CHANGING CODE STARTS

var currentScene = -1;
var animateBool = true; //false;

function changeScene(d) {
    if (d != currentScene) {
        // fivezero(1);
        contactzero(1);
        animateBool = true;
        currentScene = d;
    }
}

var envAnimation = [];

//Request for Render

requestAnimationFrame(render);

//RENDER STARTS
function render() {

    if (isDevicePhone) {


        mouseX = phoneOrientationZ * 9; //36;
        mouseY = phoneOrientationY * 4.5; //18;
    }



    if (1) //!animateBool)
    {
        // camera.position.x += (-mouseX / 10 - camera.position.x) * .05;
        // camera.position.y += (-mouseY / 05 - camera.position.y) * .05;

        rotationGroup.rotation.x += (-mouseY / 200 - rotationGroup.rotation.x) * .05;
        rotationGroup.rotation.y += (mouseX / 300 - rotationGroup.rotation.y) * .05;

    }

    camera.lookAt(scene.position);

    var time = Date.now() * 0.001;

    var multttt = 0.3;

    //!!Center Rotation
    var rx = Math.sin(time * 0.4) * multttt,
        ry = Math.sin(time * 0.2) * multttt,
        rz = Math.sin(time * 0.3) * multttt;

    if (1) {
        cubeGroup.rotation.x = rx;
        cubeGroup.rotation.y = ry;
        cubeGroup.rotation.z = rz;
    }

    // multttt = 0.5;

    // //!!Env Rotation
    // var rx = Math.cos(time * 0.4) * multttt,
    //     ry = Math.cos(time * 0.2) * multttt,
    //     rz = Math.cos(time * 0.3) * multttt;

    if (1) {
        env.rotation.x = rx;
        env.rotation.y = ry;
        env.rotation.z = rz;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(render);

    if (currentScene != -1) {
        TWEEN.update();



        for (var i = 0; i < 1000; i += 1) {
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
        }

        for (var i = 0; i < 1000; i += 1) {
            var mesh = envArray[i];
            mesh.position.x = envAnimation[i].x;
            mesh.position.y = envAnimation[i].y;
            mesh.position.z = envAnimation[i].z;
            mesh.rotation.x = envAnimation[i].rx;
            mesh.rotation.y = envAnimation[i].ry;
            mesh.rotation.z = envAnimation[i].rz;
            mesh.scale.x = envAnimation[i].sx;
            mesh.scale.y = envAnimation[i].sy;
            mesh.scale.z = envAnimation[i].sz;
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

            if (Math.abs(event.gamma) < 45) {
                phoneOrientationZ = event.gamma;
            }
        }, false);
    }
} else {

}


//Different Shapes

//Hiren-STATES



//Mouse Position

var canvas = document.getElementById('mainBody');

var mouseX = -1;
var mouseY = -1;



if (isDevicePhone) {
    canvas.addEventListener('touchstart', function(evt) {
        //TOUCH EVENTS
    }, false);
} else {
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        if (!isDevicePhone) {
            mouseX = mousePos.x - winWidth / 2;
            mouseY = mousePos.y - winHeight / 2;
        }

    }, false);

    canvas.addEventListener('click', function(evt) {
        //MOUSE EVENTS
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
    if (window.innerWidth < 900) {
        rotationGroup.position.set(0, 10, 0);
        camera.position.z = -60;
    } else {
        rotationGroup.position.set(15, 0, 0);
        camera.position.z = -50;
    }

    winWidth = window.innerWidth / 2;
    winHeight = window.innerHeight;
    var cc = document.getElementById('myCanvas');

    winWidth = window.innerWidth;
    cc.style.margin = "0 0 0 0";

    camera.aspect = winWidth / winHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(winWidth, winHeight);
}

window.onload = function exampleFunction() {

    if (currentScene != 0) {
        changeScene(0);
    }

}