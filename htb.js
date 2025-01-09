export default (gsap) => {
    const persentPerEl = 100;
    const start = 2;
    // tokenomics_decor

    gsap.to('.howTo_header', {
        text: {
            value: "HOW TO BUY ON UNISWAP?"
        }, scrollTrigger: {
            trigger: '.howTo',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 0)}px 80% `,
            end: `${persentPerEl * (start + 1)}px 80% `,
        }
    })

    gsap.fromTo('.howTo_step_1', {
        x: -200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.howTo',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 1)}px 80% `,
            end: `${persentPerEl * (start + 2)}px 80% `,
        }
    })
    gsap.fromTo('.howTo_step_2', {
        x: 200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.howTo',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 2)}px 80% `,
            end: `${persentPerEl * (start + 3)}px 80% `,
        }
    })

    gsap.fromTo('.howTo_step_3', {
        x: -200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.howTo',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 3)}px 80% `,
            end: `${persentPerEl * (start + 4)}px 80% `,
        }
    })

    gsap.fromTo('.howTo_step_4', {
        x: 200,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.howTo',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 4)}px 80% `,
            end: `${persentPerEl * (start + 5)}px 80% `,
        }
    })








}