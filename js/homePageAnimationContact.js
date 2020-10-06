//!  ORIGINAL CODE

function contactzero(timing) {

    barCounter = 0;
    particleAnimation = [];
    barCounter = 0
    var depthCounter = -5;


    spread = 1.;
    for (var i = -1; i < 2; i += 1) {
        for (var j = -8; j < 9; j += 1) {
            for (var k = -1; k < 2; k += 1) {

                var mesh = particleArray[barCounter];

                var intialPo = {
                    x: mesh.position.x,
                    y: mesh.position.y,
                    z: mesh.position.z,
                    rx: mesh.rotation.x,
                    ry: mesh.rotation.y,
                    rz: mesh.rotation.z,
                    sx: mesh.scale.x,
                    sy: mesh.scale.y,
                    sz: mesh.scale.z
                };


                var target = {
                    x: (i + 5.) * spread,
                    y: (j + 0.) * spread,
                    z: (k + 0.) * spread,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: 1,
                    sy: 1,
                    sz: 1
                };

                var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

                tween.easing(TWEEN.Easing.Elastic.InOut)
                tween.start();



                if (barCounter == 0) {
                    tween.onComplete(function() {
                        if (currentScene == 2) {



                            contactone(1);
                            if (animateBool) {
                                animateBool = false;
                            }


                        }
                    });
                }

                particleAnimation.push(intialPo);
                barCounter++;
            }
        }
    }

    for (var i = -1; i < 2; i += 1) {
        for (var j = -8; j < 9; j += 1) {
            for (var k = -1; k < 2; k += 1) {

                var mesh = particleArray[barCounter];

                var intialPo = {
                    x: mesh.position.x,
                    y: mesh.position.y,
                    z: mesh.position.z,
                    rx: mesh.rotation.x,
                    ry: mesh.rotation.y,
                    rz: mesh.rotation.z,
                    sx: mesh.scale.x,
                    sy: mesh.scale.y,
                    sz: mesh.scale.z
                };

                var target = {
                    x: (i - 1.) * spread,
                    y: (j + 0.) * spread,
                    z: (k + 0.) * spread,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: 1,
                    sy: 1,
                    sz: 1
                };

                var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

                tween.easing(TWEEN.Easing.Elastic.InOut)
                tween.start();


                particleAnimation.push(intialPo);
                barCounter++;
            }
        }
    }

    for (var i = -3; i < 4; i += 1) {
        for (var j = -1; j < 2; j += 1) {
            for (var k = -1; k < 2; k += 1) {

                var mesh = particleArray[barCounter];

                var intialPo = {
                    x: mesh.position.x,
                    y: mesh.position.y,
                    z: mesh.position.z,
                    rx: mesh.rotation.x,
                    ry: mesh.rotation.y,
                    rz: mesh.rotation.z,
                    sx: mesh.scale.x,
                    sy: mesh.scale.y,
                    sz: mesh.scale.z
                };

                var target = {
                    x: (i + 3.) * spread,
                    y: (j + 0.) * spread,
                    z: (k + 0.) * spread,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: 1,
                    sy: 1,
                    sz: 1
                };

                var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

                tween.easing(TWEEN.Easing.Elastic.InOut)
                tween.start();


                particleAnimation.push(intialPo);
                barCounter++;
            }
        }
    }
    for (var i = -1; i < 2; i += 1) {
        for (var j = -3; j < 8; j += 1) {
            for (var k = -1; k < 2; k += 1) {

                var mesh = particleArray[barCounter];

                var intialPo = {
                    x: mesh.position.x,
                    y: mesh.position.y,
                    z: mesh.position.z,
                    rx: mesh.rotation.x,
                    ry: mesh.rotation.y,
                    rz: mesh.rotation.z,
                    sx: mesh.scale.x,
                    sy: mesh.scale.y,
                    sz: mesh.scale.z
                };


                var target = {
                    x: (i - 6.) * spread,
                    y: (j - 5.) * spread,
                    z: (k + 0.) * spread,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: 1,
                    sy: 1,
                    sz: 1
                };

                var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

                tween.easing(TWEEN.Easing.Elastic.InOut)
                tween.start();


                particleAnimation.push(intialPo);
                barCounter++;
            }
        }
    }


    spread = 0.35;
    for (var i = -3; i < 4; i += 1) {
        for (var j = -3; j < 4; j += 1) {
            for (var k = -3; k < 4; k += 1) {

                var mesh = particleArray[barCounter];

                var intialPo = {
                    x: mesh.position.x,
                    y: mesh.position.y,
                    z: mesh.position.z,
                    rx: mesh.rotation.x,
                    ry: mesh.rotation.y,
                    rz: mesh.rotation.z,
                    sx: mesh.scale.x,
                    sy: mesh.scale.y,
                    sz: mesh.scale.z
                };


                var target = {
                    x: (i) * spread - 6.,
                    y: (j) * spread + 7.,
                    z: (k) * spread,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: 1,
                    sy: 1,
                    sz: 1
                };

                var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

                tween.easing(TWEEN.Easing.Elastic.InOut)
                tween.start();


                particleAnimation.push(intialPo);
                barCounter++;
            }
        }
    }



    for (var k = 0; k < 189; k++) {
        var mesh = particleArray[barCounter];

        var intialPo = {
            x: mesh.position.x,
            y: mesh.position.y,
            z: mesh.position.z,
            rx: mesh.rotation.x,
            ry: mesh.rotation.y,
            rz: mesh.rotation.z,
            sx: mesh.scale.x,
            sy: mesh.scale.y,
            sz: mesh.scale.z,
            r: mesh.material.color.r,
            g: mesh.material.color.g,
            b: mesh.material.color.b
        };

        var target = {
            x: 0,
            y: 0,
            z: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: 1,
            sy: 1,
            sz: 1
        };

        var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();


        particleAnimation.push(intialPo);
        barCounter++;
    }


    //! ENV 
    envAnimation = [];
    barCounter = 0

    spread = 1.;
    for (var i = -500; i < 500; i += 1) {
        var mesh = envArray[barCounter];

        var intialPo = {
            x: mesh.position.x,
            y: mesh.position.y,
            z: mesh.position.z,
            rx: mesh.rotation.x,
            ry: mesh.rotation.y,
            rz: mesh.rotation.z,
            sx: mesh.scale.x,
            sy: mesh.scale.y,
            sz: mesh.scale.z
        };

        var circleRadius = 16.0;
        var iAngle = i * (Math.PI / 180);

        var target = {
            x: (circleRadius) * Math.sin(iAngle),
            y: (circleRadius) * Math.cos(iAngle),
            z: i * 0.01,
            rx: mesh.rotation.x,
            ry: mesh.rotation.y,
            rz: mesh.rotation.z,
            sx: mesh.scale.x,
            sy: mesh.scale.y,
            sz: mesh.scale.z
        };

        var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        envAnimation.push(intialPo);
        barCounter++;
    }
}


function contactone(timing) {
    barCounter = 0;
    particleAnimation = [];
    barCounter = 0
    var depthCounter = -5;


    for (var i = 0; i < 360; i += 8) {
        for (var j = 0; j < 180; j += 9) {
            var iAngle = i * (Math.PI / 180);
            var jAngle = j * (Math.PI / 180);

            var mesh = particleArray[barCounter];

            var intialPo = {
                x: mesh.position.x,
                y: mesh.position.y,
                z: mesh.position.z,
                rx: mesh.rotation.x,
                ry: mesh.rotation.y,
                rz: mesh.rotation.z,
                sx: mesh.scale.x,
                sy: mesh.scale.y,
                sz: mesh.scale.z
            };

            var target = {
                x: mesh.position.x,
                y: mesh.position.y,
                z: mesh.position.z,
                rx: mesh.rotation.x,
                ry: mesh.rotation.y,
                rz: mesh.rotation.z,
                sx: mesh.scale.x,
                sy: mesh.scale.y,
                sz: mesh.scale.z
            };

            var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

            tween.easing(TWEEN.Easing.Elastic.InOut)
            tween.start();

            if (barCounter == 0) {
                tween.onComplete(function() {
                    if (currentScene == 2) {

                        contactzero(1);
                        if (animateBool) {
                            animateBool = false;
                        }

                    }
                });
            }

            particleAnimation.push(intialPo);
            barCounter++;
        }

    }

    for (var k = 0; k < 100; k++) {
        var mesh = particleArray[barCounter];

        var intialPo = {
            x: mesh.position.x,
            y: mesh.position.y,
            z: mesh.position.z,
            rx: mesh.rotation.x,
            ry: mesh.rotation.y,
            rz: mesh.rotation.z,
            sx: mesh.scale.x,
            sy: mesh.scale.y,
            sz: mesh.scale.z,
            r: mesh.material.color.r,
            g: mesh.material.color.g,
            b: mesh.material.color.b
        };


        var target = {
            x: 0,
            y: 0,
            z: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: 1,
            sy: 1,
            sz: 1
        };

        var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();


        particleAnimation.push(intialPo);
        barCounter++;
    }

    envAnimation = [];
    barCounter = 0

    spread = 1.;
    for (var i = -500; i < 500; i += 1) {
        var mesh = envArray[barCounter];

        var intialPo = {
            x: mesh.position.x,
            y: mesh.position.y,
            z: mesh.position.z,
            rx: mesh.rotation.x,
            ry: mesh.rotation.y,
            rz: mesh.rotation.z,
            sx: mesh.scale.x,
            sy: mesh.scale.y,
            sz: mesh.scale.z
        };

        var circleRadius = 14.0;
        var iAngle = i * (Math.PI / 180);

        var target = {
            x: (circleRadius) * Math.sin(iAngle),
            y: (circleRadius) * Math.cos(iAngle),
            z: i * 0.04,
            rx: mesh.rotation.x,
            ry: mesh.rotation.y,
            rz: mesh.rotation.z,
            sx: mesh.scale.x,
            sy: mesh.scale.y,
            sz: mesh.scale.z
        };

        var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();

        envAnimation.push(intialPo);
        barCounter++;
    }

}