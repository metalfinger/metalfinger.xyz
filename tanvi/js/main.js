$(document).ready(function()
{


    
    // init ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    //Pre Title 
    var pre_title_tween = TweenMax.to('#title', 0.2, {
        opacity:1,
    });

    var pre_title = new ScrollMagic.Scene({
        triggerElement: '#title-sec',
        triggerHook: 0.2,
        duration:1000
    })
    .setPin("#title")
    // .addIndicators()
    .setTween(pre_title_tween)
    .addTo(controller);


    

    // alert($('#brief-sec').outerHeight(true));

    //Brief Section First Pin
    var brief_title_tween = TweenMax.to('#brief-title', 0.5, {
        opacity:1
    });
    var brief_title_scene = new ScrollMagic.Scene({
        triggerElement: '#brief-sec',
        triggerHook: 0.3,
        duration: $('#brief-sec').outerHeight(true) - $('#brief-text-2').outerHeight(true)*1.5 //$(window).height()*3.3  //THIS IS HARDCODED, NEED TO CALCULATE HEIGHT OF CORRELENT ELEMTNS AND PUT HERE
    })
    // .addIndicators()
    .setTween(brief_title_tween)
    .setPin('#brief-text-1', {pushFollowers:true})
    .addTo(controller);

$( ".movie-name" ).each(function() {
    console.log($(this).next().outerHeight(true))
    
});

$( ".movie-name" ).each(function() {
    var film_title_tween = TweenMax.to(this, 0.5, {
        opacity:1
    });
    var film_title_scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.3,
        duration: $(this).next().outerHeight(true) - $(this).height()
    })
    // .addIndicators()
    .setTween(brief_title_tween)
    .setPin(this, {pushFollowers:true})
    .addTo(controller);

    
});

    


    $( ".header-sec" ).each(function() {
        //test Big Text Left to Right
        var big_text_tween = TweenMax.fromTo(this.children[0], 1, 
            {
                x: "200%"
            },
            {
            // transform: 'translateX(100%)'
            x: "2%"
        });

        var big_text_scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0,
            duration: $(window).height()
        })
        .setPin(this)//,{pushFollowers: false})
        // .addIndicators()
        .setTween(big_text_tween)
        .addTo(controller);
    });


//SUbtext
$( ".subtext-parent" ).each(function(index) {

    var subtext_tween = TweenMax.to(this.children[0], 1, {
        opacity:1
    });

    var subtext_scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.05,
        duration: $(window).height()*2
    })
    // .addIndicators()
    .setTween(subtext_tween)
    .setPin(this, {pushFollowers:false})
    .addTo(controller);
});

$( ".subtext-parent-3" ).each(function(index) {

    var subtext_tween = TweenMax.to(this.children[0], 1, {
        opacity:1
    });

    var subtext_scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.05,
        duration: $(window).height()*4
    })
    // .addIndicators()
    .setTween(subtext_tween)
    .setPin(this, {pushFollowers:false})
    .addTo(controller);
});





    // // Scale Animation Setup
    // // .to('@target', @length, {@object})
    // var scale_tween = TweenMax.to('#scale-animation', 0.5, {
    //     transform: 'scale(.75)',
    //     ease: Linear.easeNone
    // });


    // // Scale Scene
    // var scale_scene = new ScrollMagic.Scene({
    //     triggerElement: '#scale-trigger'
    // })
    // .addIndicators()
    // .setTween(scale_tween);


    // // BG Animation Setup
    // // .to('@target', @length, {@object})
    // var bg_tween = TweenMax.to('#bg-trigger', 0.5, {
    //     backgroundColor: '#FF0000',
    //     ease: Linear.easeNone
    // });

    // // Background Scene
    // var bg_scene = new ScrollMagic.Scene({
    //     triggerElement: '#bg-trigger'
    // })
    // .addIndicators()
    // .setTween(bg_tween);


    // // YoYo Animation Setup
    // // .to(@target, @length, @object)
    // var yoyo_tween = TweenMax.to('#yoyo-animation', 5, {
    //     transform: 'scale(2)',
    //     ease: Cubic.easeOut,
    //     repeat: -1, // this negative value repeats the animation
    //     yoyo: true // make it bounce…yo!
    // });

    // // YoYo Scene
    // var yoyo_scene = new ScrollMagic.Scene({
    //     triggerElement: '#yoyo-trigger'
    // })
    // .setTween(yoyo_tween);

    // controller.addScene([
    //     scale_scene,
    //     bg_scene,
    //     yoyo_scene
    // ]);

})