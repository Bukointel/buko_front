export default (gsap) => {
    const persentPerEl = 90;
    const start = 2;
    // tokenomics_decor

    gsap.to('.numbers_header', {
        text: {
            value: "LETS CHAT!"
        }, scrollTrigger: {
            trigger: '.numbers',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 1)}px 80% `,
            end: `${persentPerEl * (start + 2)}px 80% `,
        }
    })

    // gsap.fromTo('.numbers_chart', {
    //     x: -200,
    //     opacity: 0,
    // }, {
    //     x: 0,
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: '.numbers',
    //         scrub: 1,
    //         // markers: true,
    //         start: `${persentPerEl * (start + 3)}px 80% `,
    //         end: `${persentPerEl * (start + 3)}px 80% `,
    //     }
    // })
    gsap.fromTo('.numbers_decor', {
        x: 200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.numbers',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 3)}px 80% `,
            end: `${persentPerEl * (start + 3)}px 80% `,
        }
    })






}