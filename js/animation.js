var tl = gsap.timeline();

// tl.to('.svg-logo', {
//     duration: 2,
//     x: 0,
//     delay: 1,
//     ease: 'bounce',
// })

tl.to('.l-m', {
    x: 0,
    duration: 2,
    ease: 'bounce',
    delay: 1
})

tl.to('.left', {
    y: 100,
    delay: 0.5,
    duration:1
})

tl.to('.right', {
    y: -100,
    delay: -1,
    duration:1
})

tl.to('.write', {
    duration: 1,
    text: "loading...",
    yoyo: true,
    repeat: 2,
    repeatDelay: 1,
})

// tl.to(".l-m", {
//     repeat: 0,
//     yoyo: true,
//     duration: 1, 
//     // ease: 'elastic',
//     text: "Moneydash", 
//     // delay: 2.5,
// });


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