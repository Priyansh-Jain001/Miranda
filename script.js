// import LocomotiveScroll from 'locomotive-scroll';

// Locomotive js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'), 
    smooth: true
});

var tl = gsap.timeline();

tl.to("#container", {
    y: "50vh",
    scale: 0.6,
    duration: 0
})

tl.to("#container", {
    y: "-110vh",
    duration: 1,
    delay: 1
})

tl.to("#container", {
    y: "0",
    rotate: 360,
    scale: 1,
    duration: 0.8
})

