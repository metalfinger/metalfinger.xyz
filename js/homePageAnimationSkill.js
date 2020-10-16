var skillparticler = 1;
var skillparticleg = 1;
var skillparticleb = 0;


function skillzero(timing) {

    envAnimation = [];
    barCounter = 0;


    var ringSwitcher = false;

    for (var i = 0; i < 1000; i += 1) {
        var angle = 0;

        angle = 3 * i * (Math.PI / 180);

        var mesh = envArray[barCounter];

        //mesh.material.color.setHex(0x222222);

        var position = {
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
            x: Math.sin(angle) * magicalNumberX * 1.5,
            y: magicalNumberX * 2,
            z: Math.cos(angle) * magicalNumberY * 1.5,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: barSize * 6,
            sy: barSize * 6,
            sz: barSize * 6
        };

        if (i % 4 == 0) {
            ringSwitcher = false;
            target = {
                x: Math.sin(angle) * magicalNumberX * 1.5,
                y: magicalNumberX * 1.8,
                z: Math.cos(angle) * magicalNumberY * 1.5,
                rx: 0,
                ry: 0,
                rz: 0,
                sx: barSize * 6,
                sy: barSize * 6,
                sz: barSize * 6
            };
        } else if (i % 4 == 1) {
            ringSwitcher = true;
            target = {
                x: Math.sin(angle) * magicalNumberX * 1.5,
                y: -magicalNumberX * 1.8,
                z: Math.cos(angle) * magicalNumberY * 1.5,
                rx: 0,
                ry: 0,
                rz: 0,
                sx: barSize * 6,
                sy: barSize * 6,
                sz: barSize * 6
            };
        } else if (i % 4 == 2) {
            ringSwitcher = false;
            target = {
                x: Math.sin(angle) * magicalNumberX * 1.5,
                y: magicalNumberX * 1.7,
                z: Math.cos(angle) * magicalNumberY * 1.5,
                rx: 0,
                ry: 0,
                rz: 0,
                sx: barSize * 6,
                sy: barSize * 6,
                sz: barSize * 6
            };
        } else if (i % 4 == 3) {
            ringSwitcher = true;
            target = {
                x: Math.sin(angle) * magicalNumberX * 1.5,
                y: -magicalNumberX * 1.7,
                z: Math.cos(angle) * magicalNumberY * 1.5,
                rx: 0,
                ry: 0,
                rz: 0,
                sx: barSize * 6,
                sy: barSize * 6,
                sz: barSize * 6
            };
        }


        var tween = new TWEEN.Tween(position).to(target, animationTime * timing);

        tween.easing(TWEEN.Easing.Elastic.InOut);
        tween.start();


        envAnimation.push(position);

        barCounter++;
    }

    particleAnimation = [];

    barCounter = 0
    var depthCounter = -5;
    var radius = magicalNumberX;


    for (var i = 0; i < 180; i += 9) {
        for (var j = 0; j < 180; j += 9) {
            var iAngle = i * (Math.PI / 180);
            var jAngle = j * (Math.PI / 180);

            var mesh = particleArray[barCounter];
            //mesh.material.color.setHex(0x999999);
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
                x: (magicalNumberX * 1) * Math.sin(iAngle) * Math.sin(jAngle),
                y: (magicalNumberX * 1) * Math.cos(jAngle),
                z: (magicalNumberX * 1) * Math.cos(iAngle) * Math.sin(jAngle),
                rx: 0,
                ry: 0,
                rz: 0,
                sx: 1,
                sy: 1,
                sz: 1,
                r: skillparticler,
                g: skillparticleg,
                b: skillparticleb
            };


            var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

            tween.easing(TWEEN.Easing.Elastic.InOut)
            tween.start();

            if (barCounter == 0) {
                tween.onComplete(function() {
                    if (currentScene == 1) {
                        skillone(1);
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


    for (var i = 0; i < 100; i++) {

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

        var distancee = 1.50;

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

    for (var i = 180; i < 360; i += 9) {
        for (var j = 0; j < 180; j += 9) {
            var iAngle = i * (Math.PI / 180);
            var jAngle = j * (Math.PI / 180);

            var mesh = particleArray[barCounter];
            //mesh.material.color.setHex(0x999999);
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
                x: (magicalNumberX * 1) * Math.sin(iAngle) * Math.sin(jAngle),
                y: (magicalNumberX * 1) * Math.cos(jAngle),
                z: (magicalNumberX * 1) * Math.cos(iAngle) * Math.sin(jAngle),
                rx: 0,
                ry: 0,
                rz: 0,
                sx: 1,
                sy: 1,
                sz: 1,
                r: skillparticler,
                g: skillparticleg,
                b: skillparticleb
            };


            var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

            tween.easing(TWEEN.Easing.Elastic.InOut)
            tween.start();
            particleAnimation.push(intialPo);
            barCounter++;

        }

    }

    for (var i = 0; i < 100; i++) {

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

        var distancee = 1.50;

        var target = {
            x: 0,
            y: 0,
            z: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: 1,
            sy: 1,
            sz: 1,
            r: skillparticler,
            g: skillparticleg,
            b: skillparticleb
        };

        var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();


        particleAnimation.push(intialPo);
        barCounter++;

    }

}


function skillone(timing) {
    envAnimation = [];
    barCounter = 0;

    for (var i = 0; i < 1000; i += 1) {
        var angle = 0;

        angle = i * (Math.PI / 180);

        var mesh = envArray[barCounter];

        //mesh.material.color.setHex(0x222222);

        var position = {
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
            x: Math.sin(angle) * magicalNumberX * 2,
            y: 0,
            z: Math.cos(angle) * magicalNumberY * 2,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: barSize * 6,
            sy: barSize * 6,
            sz: barSize * 6
        };


        var tween = new TWEEN.Tween(position).to(target, animationTime * timing);

        tween.easing(TWEEN.Easing.Elastic.InOut);
        tween.start();


        envAnimation.push(position);

        barCounter++;
    }

    particleAnimation = [];

    barCounter = 0
    var depthCounter = -5;
    var radius = magicalNumberX;


    for (var i = 0; i < 180; i += 9) {
        for (var j = 0; j < 180; j += 9) {
            var iAngle = i * (Math.PI / 180);
            var jAngle = j * (Math.PI / 180);

            var mesh = particleArray[barCounter];
            //mesh.material.color.setHex(0x999999);
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
                x: (magicalNumberX * 1) * Math.sin(iAngle) * Math.sin(jAngle),
                y: (magicalNumberX * 1) * Math.cos(jAngle),
                z: (magicalNumberX * 1) * Math.cos(iAngle) * Math.sin(jAngle),
                rx: 0,
                ry: 0,
                rz: 0,
                sx: 1,
                sy: 1,
                sz: 1,
                r: skillparticler,
                g: skillparticleg,
                b: skillparticleb
            };


            var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

            tween.easing(TWEEN.Easing.Elastic.InOut)
            tween.start();


            particleAnimation.push(intialPo);
            barCounter++;

        }

    }

    for (var i = 0; i < 100; i++) {

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

        var distancee = 1.50;

        var target = {
            x: 0,
            y: 0,
            z: 0,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: 1,
            sy: 1,
            sz: 1,
            r: skillparticler,
            g: skillparticleg,
            b: skillparticleb
        };

        var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

        tween.easing(TWEEN.Easing.Elastic.InOut)
        tween.start();


        particleAnimation.push(intialPo);
        barCounter++;

    }


    for (var i = -5; i < 0; i += 1) {
        for (var j = -5; j < 5; j += 1) {
            for (var k = -5; k < 5; k += 1) {
                // 	var iAngle = i*(Math.PI/180);
                // 	var jAngle = j*(Math.PI/180);

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

                var distancee = 1.50;

                var target = {
                    x: (i + 0.5) * distancee,
                    y: (j + 0.5) * distancee,
                    z: (k + 0.5) * distancee,
                    rx: 0,
                    ry: 0,
                    rz: 0,
                    sx: 1,
                    sy: 1,
                    sz: 1,
                    r: skillparticler,
                    g: skillparticleg,
                    b: skillparticleb
                };

                var tween = new TWEEN.Tween(intialPo).to(target, timing * animationTime);

                tween.easing(TWEEN.Easing.Elastic.InOut)
                tween.start();


                if (barCounter == 500) {
                    tween.onComplete(function() {
                        if (currentScene == 1) {
                            skilltwo(1);
                        }
                    });
                }

                particleAnimation.push(intialPo);
                barCounter++;
            }

        }

    }

}



function skilltwo(timing) {
    envAnimation = [];
    barCounter = 0;

    var ringSwitcher = false;

    for (var i = 0; i < 1000; i += 1) {
        var angle = 0;

        angle = i * (Math.PI / 180);

        var mesh = envArray[barCounter];

        //mesh.material.color.setHex(0x222222);

        var position = {
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
            x: Math.sin(angle) * magicalNumberX * 1.5,
            y: -magicalNumberX * 2,
            z: Math.cos(angle) * magicalNumberY * 1.5,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: barSize * 6,
            sy: barSize * 6,
            sz: barSize * 6
        };


        if (i % 4 == 0) {
            ringSwitcher = false;
            target = {
                x: Math.sin(angle) * magicalNumberX * 1.5,
                y: magicalNumberX * 1.8,
                z: Math.cos(angle) * magicalNumberY * 1.5,
                rx: 0,
                ry: 0,
                rz: 0,
                sx: barSize * 6,
                sy: barSize * 6,
                sz: barSize * 6
            };
        } else if (i % 4 == 1) {
            ringSwitcher = true;
            target = {
                x: Math.sin(angle) * magicalNumberX * 1.5,
                y: -magicalNumberX * 1.8,
                z: Math.cos(angle) * magicalNumberY * 1.5,
                rx: 0,
                ry: 0,
                rz: 0,
                sx: barSize * 6,
                sy: barSize * 6,
                sz: barSize * 6
            };
        } else if (i % 4 == 2) {
            ringSwitcher = false;
            target = {
                x: Math.sin(angle) * magicalNumberX * 1.5,
                y: magicalNumberX * 1.7,
                z: Math.cos(angle) * magicalNumberY * 1.5,
                rx: 0,
                ry: 0,
                rz: 0,
                sx: barSize * 6,
                sy: barSize * 6,
                sz: barSize * 6
            };
        } else if (i % 4 == 3) {
            ringSwitcher = true;
            target = {
                x: Math.sin(angle) * magicalNumberX * 1.5,
                y: -magicalNumberX * 1.7,
                z: Math.cos(angle) * magicalNumberY * 1.5,
                rx: 0,
                ry: 0,
                rz: 0,
                sx: barSize * 6,
                sy: barSize * 6,
                sz: barSize * 6
            };
        }


        var tween = new TWEEN.Tween(position).to(target, animationTime * timing);

        tween.easing(TWEEN.Easing.Elastic.InOut);
        tween.start();


        envAnimation.push(position);

        barCounter++;
    }

    particleAnimation = [];

    barCounter = 0
    var depthCounter = -5;
    var radius = magicalNumberX;


    for (var i = 0; i < 5; i += 1) {
        for (var j = -5; j < 5; j += 1) {
            for (var k = -5; k < 5; k += 1) {
                // 	var iAngle = i*(Math.PI/180);
                // 	var jAngle = j*(Math.PI/180);

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

                var distancee = 1.50;

                var target = {
                    x: (i + 0.5) * distancee,
                    y: (j + 0.5) * distancee,
                    z: (k + 0.5) * distancee,
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


                if (barCounter == 400) {
                    tween.onComplete(function() {
                        if (currentScene == 1) {
                            skillskill(1);
                        }
                    });
                }

                particleAnimation.push(intialPo);
                barCounter++;
            }

        }

    }


    for (var i = -5; i < 0; i += 1) {
        for (var j = -5; j < 5; j += 1) {
            for (var k = -5; k < 5; k += 1) {
                // 	var iAngle = i*(Math.PI/180);
                // 	var jAngle = j*(Math.PI/180);

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

                var distancee = 1.50;

                var target = {
                    x: (i + 0.5) * distancee,
                    y: (j + 0.5) * distancee,
                    z: (k + 0.5) * distancee,
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

}


function skillskill(timing) {
    envAnimation = [];
    barCounter = 0;

    for (var i = 0; i < 1000; i += 1) {
        var angle = 0;

        angle = i * (Math.PI / 180);

        var mesh = envArray[barCounter];

        //mesh.material.color.setHex(0x222222);

        var position = {
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
            x: Math.sin(angle) * magicalNumberX * 2,
            y: 0,
            z: Math.cos(angle) * magicalNumberY * 2,
            rx: 0,
            ry: 0,
            rz: 0,
            sx: barSize * 6,
            sy: barSize * 6,
            sz: barSize * 6
        };


        var tween = new TWEEN.Tween(position).to(target, animationTime * timing);

        tween.easing(TWEEN.Easing.Elastic.InOut);
        tween.start();


        envAnimation.push(position);

        barCounter++;
    }

    particleAnimation = [];

    barCounter = 0
    var depthCounter = -5;
    var radius = magicalNumberX;

    for (var i = 0; i < 5; i += 1) {
        for (var j = -5; j < 5; j += 1) {
            for (var k = -5; k < 5; k += 1) {
                // 	var iAngle = i*(Math.PI/180);
                // 	var jAngle = j*(Math.PI/180);

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

                var distancee = 1.50;

                var target = {
                    x: (i) * distancee,
                    y: (j) * distancee,
                    z: (k) * distancee,
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
                        if (currentScene == 1) {
                            skillzero(1);
                        }
                    });
                }

                particleAnimation.push(intialPo);
                barCounter++;
            }

        }

    }


    for (var i = 0; i < 180; i += 9) {
        for (var j = 0; j < 180; j += 9) {
            var iAngle = i * (Math.PI / 180);
            var jAngle = j * (Math.PI / 180);

            var mesh = particleArray[barCounter];
            //mesh.material.color.setHex(0x999999);
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
                x: -(magicalNumberX * 1) * Math.sin(iAngle) * Math.sin(jAngle),
                y: (magicalNumberX * 1) * Math.cos(jAngle),
                z: (magicalNumberX * 1) * Math.cos(iAngle) * Math.sin(jAngle),
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

    for (var i = 0; i < 100; i++) {

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

        var distancee = 1.50;

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


}