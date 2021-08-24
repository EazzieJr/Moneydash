var tl = gsap.timeline();

gsap.to('html', {
    overflowY: 'hidden',
})

tl.to('.loader .container .svg-circle, .loader .container .svg-dollar', {
    duration: 1,
    y: 0,
    delay: 2
})

tl.to('.loader .container .svg-circle', {
    duration: 2,
    rotateY: 360,
    repeat: Infinity,
    ease: 'none',
    delay: 1
})

tl.to('.loader .container .svg-dollar', {
    duration: 1,
    rotateY: 360,
    repeat: Infinity,
    ease: 'none',
    delay: -2
})

gsap.to('.loader .container .svg-circle, .loader .container .svg-dollar', {
    duration: 1,
    y: -70,
    delay: 10,
})

gsap.to('.loader', {
    duration: 0.5,
    rotateY: 90,
    delay: 11,
    display: 'none'
})

gsap.to('html', {
    overflowY: 'visible',
    delay: 11.7
})