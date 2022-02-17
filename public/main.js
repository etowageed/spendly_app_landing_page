
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-copy", { duration: 2, x: "-100%", ease: "back.out" });

gsap.from(".sum-copy", { scrollTrigger: {
    trigger:".sum-copy",
    toggleActions: "restart pause resume pause",
}, duration: 6, x: "-40%", ease: "back.out" });