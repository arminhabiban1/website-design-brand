window.addEventListener("DOMContentLoaded", function() {
    gsap.from(".logo", {
        duration: 1.6,
        delay: 0.2,
        opacity: 0,
        y: 20,
        ease: "expo.easeInOut"
    });
    gsap.from(".search", {
        duration: 1.6,
        delay: 0.2,
        opacity: 0,
        y: 20,
        ease: "expo.easeInOut"
    });
    gsap.from(".img", {
        duration: 3,
        delay: 0.7,
        opacity: 0,
        y: 70,
        ease: "expo.easeInOut"
    });
    gsap.from(".bottom-bar,.side-icon", {
        duration: 2,
        delay: 2,
        opacity: 0,
        x: -40,
        ease: "expo.easeInOut"
    });
    gsap.from(".icn", {
        duration: 2,
        delay: 2.5,
        opacity: 0,
        y: 20,
        ease: "expo.easeInOut"
    });
    gsap.from(".title span", {
        duration: 3,
        delay: 3,
        opacity: 0,
        x: -100,
        ease: "expo.easeInOut"
    });
    gsap.from(".media ul li", {
        duration: 3,
        delay: 4.5,
        opacity: 0,
        y: 50,
        ease: "expo.easeInOut"
    });

});