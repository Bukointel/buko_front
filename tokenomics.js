export default (gsap) => {
    const persentPerEl = 90;
    const start = 2;
    // tokenomics_decor

    gsap.fromTo('.tokenomics_decor', {
        scale: 2,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 0)}px 80% `,
            end: `${persentPerEl * (start + 0)}px 80% `,
        }
    })

    gsap.to('.tokenomics_header', {
        text: {
            value: "TOKENOMICS"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 1)}px 80% `,
            end: `${persentPerEl * (start + 2)}px 80% `,
        }
    })


    gsap.fromTo('.tokenomics_element_1', {
        x: -100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 4)}px 80% `,
            end: `${persentPerEl * (start + 5)}px 80% `,
        }
    })

    gsap.fromTo('.tokenomics_element_2', {
        y: 100,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 4)}px 80% `,
            end: `${persentPerEl * (start + 5)}px 80% `,
        }
    })
    gsap.fromTo('.tokenomics_element_3', {
        x: 100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 4)}px 80% `,
            end: `${persentPerEl * (start + 5)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_1_h', {
        text: {
            value: "TICKER"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_1_v', {
        text: {
            value: "$BUKO"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_2_h', {
        text: {
            value: "CHAIN"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_2_v', {
        text: {
            value: "BASE"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_3_h', {
        text: {
            value: "SUPPLY"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_3_v', {
        text: {
            value: "1BIL"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 5)}px 80% `,
            end: `${persentPerEl * (start + 6)}px 80% `,
        }
    })


    gsap.fromTo('.tokenomics_element_4', {
        x: -100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 7)}px 80% `,
            end: `${persentPerEl * (start + 8)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_4_h', {
        text: {
            value: "LIQUIDITY"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 9)}px 80% `,
            end: `${persentPerEl * (start + 9)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_4_v', {
        text: {
            value: "BURNED"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 9)}px 80% `,
            end: `${persentPerEl * (start + 9)}px 80% `,
        }
    })

    gsap.fromTo('.tokenomics_element_5', {
        x: 100,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 7)}px 80% `,
            end: `${persentPerEl * (start + 8)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_5_h', {
        text: {
            value: "CONTRACT"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 9)}px 80% `,
            end: `${persentPerEl * (start + 9)}px 80% `,
        }
    })
    gsap.to('.tokenomics_element_5_v', {
        text: {
            value: "RENOUNCED"
        }, scrollTrigger: {
            trigger: '.tokenomics',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * (start + 9)}px 80% `,
            end: `${persentPerEl * (start + 9)}px 80% `,
        }
    })

}