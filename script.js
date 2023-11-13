// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#body'),
//     smooth: true
// });


let tl = gsap.timeline()
tl.from("nav a , nav h4", {
    y: -100,
    opacity: 0,
    duration: 0.8,
})
tl.from(".home-front h1", {
    scale: 0.5,
    y: 100,
    duration: 0.8,
    opacity: 0,
    stagger: true
})
tl.from(".h1-moved h5", {
    duration: 0.3,
    opacity: 0,
})
tl.from(".hF1", {
    duration: 0.4,
    x: -100,
    opacity: 0
})
tl.from(".hF2", {
    duration: 0.5,
    scale: 0,
    opacity: 0
})
tl.from(".last li", {
    x: 100,
    duration: 0.3,
    opacity: 0,
    stagger: 0.5,
})
tl.from(".i i", {
    scale: 2,
    duration: 0.5,
    opacity: 0,
    stagger: 1
})

function mouseFollow(sx, sy) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX - 45}px,${dets.clientY}px) scale(${sx},${sy})`
    })
}
mouseFollow()
let timeout
function circleScale() {
    clearTimeout(timeout)
    let sx = 1
    let sy = 1
    let px = 0
    let py = 0
    window.addEventListener("mousemove", function (dets) {
        sx = gsap.utils.clamp(0.8, 1.3, dets.clientX - px)
        sy = gsap.utils.clamp(0.8, 1.3, dets.clientY - py)
        px = dets.clientX
        py = dets.clientY
        timeout = mouseFollow(sx, sy)
        setTimeout(() => {
            document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX - 45}px,${dets.clientY}px) scale(1,1)`
        }, 80);
    })
}
circleScale()

document.querySelectorAll(".elem").forEach(function (elem) {
    let pClientX = 0
    let diffForRotate = 0
    
    elem.addEventListener("mousemove", function (dets) {
        diffForRotate = dets.clientX - pClientX
        pClientX = dets.clientX

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            top: dets.clientY - elem.getBoundingClientRect().top - 180,
            left: dets.clientX - 250,
            rotate:gsap.utils.clamp(-15,15,diffForRotate),
        })
    })
    elem.addEventListener("mouseleave",function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.8
        })
    })
});