let lsr = document.getElementById("lsr");
let projroots = document.querySelectorAll(".projRoot");
let textCont = document.querySelectorAll(".textContainer");

setTimeout(() => {
  gsap.to(lsr, {css: {marginLeft: "-200px", opacity: 0}, duration: 0.5, ease: Power4.easeOut});
  gsap.to(textCont, {css: {marginTop: "0"}, duration: 0.5, ease: Power4.easeOut});

  let delay = 0;
  projroots.forEach((el) => {
    gsap.to(el, {css: {opacity: 1}, delay: delay, duraition: 0.5, ease: Power4.easeOut});
    delay += 0.05;
  })
}, 1000);