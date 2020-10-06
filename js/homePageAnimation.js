fiveparticler = 0;
fiveparticleg = 0;
fiveparticleb = 0;


function fiveminusone(timing) {
    barCounter = 0;



    particleAnimation = [];
    barCounter = 0
    var depthCounter = -5;


    for (var i = -5; i < 5; i += 1) {
        for (var j = -5; j < 5; j += 1) {
            for (var k = -5; k < 5; k += 1) {

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

                var spread = 1.5;

                var target = {
                    x: (i + 0.5) * spread,
                    y: (j + 0.5) * spread,
                    z: (k + 0.5) * spread,
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

                var tweenRender = new TWEEN.Tween(renderer.getClearColor()).to({ r: 0, g: 0, b: 0 }, 1 * animationTime);
                tweenRender.easing(TWEEN.Easing.Elastic.InOut)
                tweenRender.start();

                if (barCounter == 0) {
                    tween.onComplete(function() {
                        if (currentScene == 0) {

                            fiveone(1);
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

    //! ENV 
    envAnimation = [];
    barCounter = 0

    spread = 1.;
    for (var i = 0; i < 1000; i += 1) {
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

        var spread1 = window.innerWidth / 8;

        if (window.innerWidth < window.innerHeight) {
            spread1 = window.innerHeight / 4;
        }

        var target = {
            x: Math.random() * spread1 - spread1 / 2,
            y: Math.random() * spread1 - spread1 / 2,
            z: Math.random() * spread1 - spread1 / 2,
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

function fivezero(timing) {
    barCounter = 0;



    particleAnimation = [];
    barCounter = 0
    var depthCounter = -5;


    for (var i = -5; i < 5; i += 1) {
        for (var j = -5; j < 5; j += 1) {
            for (var k = -5; k < 5; k += 1) {

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

                var spread = 1.5;

                var target = {
                    x: (i + 0.5) * spread,
                    y: (j + 0.5) * spread,
                    z: (k + 0.5) * spread,
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

                var tweenRender = new TWEEN.Tween(renderer.getClearColor()).to({ r: 0, g: 0, b: 0 }, 1 * animationTime);
                tweenRender.easing(TWEEN.Easing.Elastic.InOut)
                tweenRender.start();

                if (barCounter == 0) {
                    tween.onComplete(function() {
                        if (currentScene == 0) {

                            fiveone(1);
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

    //! ENV 
    envAnimation = [];
    barCounter = 0

    spread = 1.;
    for (var i = 0; i < 1000; i += 1) {
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

        envAnimation.push(intialPo);
        barCounter++;
    }
}


function fiveone(timing) {
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

            var iAngle = i * (Math.PI / 180);
            var jAngle = j * (Math.PI / 180);

            var target = {
                x: (magicalNumberX * 1.2) * Math.sin(iAngle) * Math.sin(jAngle),
                y: (magicalNumberX * 1.2) * Math.cos(jAngle),
                z: (magicalNumberX * 1.2) * Math.cos(iAngle) * Math.sin(jAngle),
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
                    if (currentScene == 0) {

                        fivetwo(1);
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

        var iAngle = i * (Math.PI / 180);
        var jAngle = j * (Math.PI / 180);

        var target = {
            x: 0,
            y: -(magicalNumberX * 1.2),
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
    for (var i = 0; i < 1000; i += 1) {
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

        envAnimation.push(intialPo);
        barCounter++;
    }

}

function fivetwo(timing) {
    barCounter = 0;



    particleAnimation = [];
    barCounter = 0;

    var p = 17;
    var cc = 0;

    for (var i = 1; i <= p; i++) {
        for (var j = 1; j <= i; j++) {
            for (var k = 1; k <= j; k++) {
                var mesh = particleArray[cc];

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

                var multiplee = 1.2;

                var target = {
                    x: (i - j / 2 - p / 2) * multiplee,
                    y: (j - p / 2) * multiplee,
                    z: (k - j / 2) * multiplee,
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


                if (cc == 0) {
                    tween.onComplete(function() {

                        if (currentScene == 0) {
                            fivezero(1);
                            if (animateBool) {
                                animateBool = false;
                            }
                        }
                    });
                }

                particleAnimation.push(intialPo);
                cc++;

            }
        }
    }

    for (var i = 1; i <= 31; i++) {
        var mesh = particleArray[cc];

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
            x: 0,
            y: 0,
            z: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: 0.01,
            sy: 0.01,
            sz: 0.01
        };

        var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();


        particleAnimation.push(intialPo);
        cc++
    }

    //! ENV 
    envAnimation = [];
    barCounter = 0

    spread = 1.;
    for (var i = 0; i < 1000; i += 1) {
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

        envAnimation.push(intialPo);
        barCounter++;
    }

}