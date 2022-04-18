let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .fromTo(".pic", { y: -50 }, { y: 0, duration: 12 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".water", { opacity: 0 }, { opacity: 1, duration: 2 })
  .fromTo(".bushes", { y: -100 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  
  

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "80%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);