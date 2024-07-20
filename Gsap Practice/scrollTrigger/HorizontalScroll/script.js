gsap.to(".page2 h1",{
    transform:"translateX(-254%)",
    scrollTrigger:{
        trigger:".page2 ",
        // trigger:".page2 h1",  //we can also use this to see other result
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})