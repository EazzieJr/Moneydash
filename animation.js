var tl = gsap.timeline();

// tl.to('.svg-logo', {
//     duration: 2,
//     x: 0,
//     delay: 1,
//     ease: 'bounce',
// })

// tl.to('.l-m', {
//     // perspective: 100,
//     rotateY: 40,
//     duration: 1,
//     ease: 'easeout'
// })

tl.to(".l-m", {
    repeat: 1,
    repeatDelay: 0.5,
    yoyo: true,
    duration: 1, 
    // ease: 'elastic',
    text: "Moneydash", 
    // delay: 2.5,
});


// tl.to('.svg-logo', {
//     y: 100,
//     duration: 1,
//     delay: 1,
// })

// tl.to(".l-m", {
//     repeat: 3,
//     repeatDelay: 0.5,
//     yoyo: true,
//     duration: 3, 
//     text: "Loading...", 
//     delay: 1,
// });