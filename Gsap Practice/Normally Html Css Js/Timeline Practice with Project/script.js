tl=gsap.timeline()

tl.from(".nav h2",{
    y:-50,
    opacity:0,
    duration:.6,
    delay:.2,
    stagger:.2
})
tl.from(".main h1",{
    x:-500,
    opacity:0,
    duration:.6,
    delay:.2,
    stagger:.4,
})
tl.from("img",{
        x:100,
        rotate:45,
        opacity:0,
    duration:.6,
    stagger:.4,


})