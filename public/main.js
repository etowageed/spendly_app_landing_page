const btnSubmit = document.querySelector("btn-submit");
const btnClose = document.getElementById("btn-close");
const modal = document.getElementById("modal");


gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-copy", { duration: 2, x: "-100%", ease: "back.out" });

gsap.from(".sum-copy", { scrollTrigger: {
    trigger:".sum-copy",
    toggleActions: "restart none none none",
}, duration: 3, x: "-40%", ease: "back.out" });

gsap.from(".body-copy-depth", { scrollTrigger: {
    trigger:".body-copy-depth",
    toggleActions: "restart none none none",
}, duration: 3, x: "-40%", ease: "back.out" });

gsap.from(".body-copy-budget", { scrollTrigger: {
    trigger:".body-copy-budget",
    toggleActions: "restart none none none",
}, duration: 3, y: "20%", ease: "back.out" });

gsap.from(".track-fi", { scrollTrigger: {
    trigger:".track-fi",
    toggleActions: "restart none none none",
}, duration: 3, y: "20%", ease: "back.out" });
