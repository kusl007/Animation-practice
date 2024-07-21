function scrollTriggerAnim(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}  

//for 1 element 

//   var h1=document.querySelector(".first_h1").textContent;
//   console.log(h1)
//   var splittedText =h1.split("");
//   console.log(splittedText)

// var clutter=""
// splittedText.map((elem,i)=>{
//     clutter+=`<span>${elem}</span>`
// })
// console.log(clutter)


// document.querySelector(".first_h1").innerHTML=clutter

//for all element

function splittedText(){
    var allH1=document.querySelectorAll(".page2 h1");
//   console.log(allH1)
  allH1.forEach((h1)=>{
    var clutter=""
    // console.log(h1)
    var h1Text = h1.textContent
    var splittedText=h1Text.split("")
    // console.log(splittedText)
    splittedText.forEach((elem)=>{
    clutter+=`<span>${elem}</span>`


    })
    h1.innerHTML=clutter
    console.log(h1)
  })
}

function gsapAnim(){
    gsap.to(".page2 h1 span",{
        color:"#e3e3c4",
        stagger:0.1,
        scrollTrigger:{
             trigger:".page2 h1 span",
             scroller:".main",
             markers:true,
             start:"top 30%",
             end:"top -10%",
             scrub:3
    
        }
    })
}


scrollTriggerAnim()
splittedText()
gsapAnim()

