let procs = document.querySelectorAll(".projRoot");

procs.forEach((el) => {
  let Islink = el.getElementsByClassName("proceed")[0].hasAttribute("link");
  
  if (Islink) {
    el.addEventListener("mouseenter", function() {
      gsap.to(el, {css: {scale: 1.1, boxShadow: "22px 22px 43px #2e2e2e, -22px -22px 43px #3e3e3e"}, delay: 0, duration: 0, ease: Power1.easeIn})
      el.style.cursor = "pointer";
    })

    el.addEventListener("mouseleave", function() {
      gsap.to(el, {css: {scale: 1, boxShadow: "none"}, delay: 0, duration: 0, ease: Power1.easeOut})
      el.style.cursor = "default";
    })

    el.addEventListener("click", function() {
      let link = el.getElementsByClassName("proceed")[0].getAttribute("link");
      window.open(link, '_blank');
    })
  }
})
