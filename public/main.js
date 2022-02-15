
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-copy", { duration: 2, x: "-100%", ease: "back.out" });
gsap.from(".hero-image", {
  duration: 2,
  delay: 0.7,
  x: "105%",
  ease: "back.out",
});

gsap.from(".sum-copy", { scrollTrigger: {
    trigger:".sum-copy",
    toggleActions: "restart pause resume pause",
}, duration: 6, x: "100%", ease: "back.out" });
gsap.from(".3d-2", { scrollTrigger: ".3d-2", duration: 3, y: "100%", ease: "back.out" });