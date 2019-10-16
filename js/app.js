const tl = new TimelineMax();

tl.from(".wheel-1", 3, {
    opacity: 0,
    top: "100%",
    ease: Expo.easeInOut
})
    .from(
        ".wheel-2",
        3,
        {
            opacity: 0,
            top: "100%",
            ease: Expo.easeInOut
        },
        "-=3"
    )
    .to(".wheel-1", 1, {
        left: "37%",
        ease: Expo.easeInOut
    })
    .to(
        ".wheel-2",
        1,
        {
            left: "55%",
            ease: Expo.easeInOut
        },
        "-=1"
    );

const logo = document.querySelectorAll(".man .man-body");
console.log(logo);
for (let i = 0; i < logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}