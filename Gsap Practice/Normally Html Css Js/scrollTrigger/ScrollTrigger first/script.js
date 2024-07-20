// only gsap
gsap.from(".page1 .circle",{
    scale:0,
    delay:1,
    duration:2,
    rotate:720,
})

// using scroll trigger directly
gsap.from(".page2 .circle",{
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:".page2 .circle"
})

//using scrolltrigger in object
gsap.from(".page3 .circle",{
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:".page3 .circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 10%",
        scrub:true 

    }

})