export default (gsap) => {
    gsap.fromTo('.header', {
        y: -100,
    }, {
        y: 0,
        opacity: 1
    }
    )
}