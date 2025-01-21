export default (gsap) => {

    const tl = gsap.timeline().to('.hero_p_inner_span_1', {
        duration: .5, delay: .5, text: {
            value: "Wild Degens."
        }, ease: 'linear'
    }).to('.hero_p_inner_span_2', {
        duration: .5, delay: .5, text: {
            value: "Sharp Tools."
        }, ease: 'linear'
    }).to('.hero_p_inner_span_3', {
        duration: .5, delay: .5, text: {
            value: "One Empire."
        }, ease: 'linear'
    })

}