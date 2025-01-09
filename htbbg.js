export default (gsap) => {

    gsap.fromTo('.joinUs_newBg_cloud1', {
        x: -200,
    }, {
        x: 200,
        scrollTrigger: {
            trigger: '.joinUs_newBg',
            scrub: 1,
            // markers: true,
            start: `0% 80% `,
            end: `150% 80% `,
        }
    })
    gsap.fromTo('.joinUs_newBg_cloud2', {
        x: 200,
    }, {
        x: -200,
        scrollTrigger: {
            trigger: '.joinUs_newBg',
            scrub: 1,
            // markers: true,
            start: `0% 80% `,
            end: `150% 80% `,
        }
    })
    gsap.fromTo('.joinUs_newBg_cloud3', {
        x: -400,
    }, {
        x: 400,
        scrollTrigger: {
            trigger: '.joinUs_newBg',
            scrub: 1,
            // markers: true,
            start: `0% 80% `,
            end: `150% 80% `,
        }
    })
    gsap.fromTo('.joinUs_newBg_cloud4', {
        x: 300,
    }, {
        x: -300,
        scrollTrigger: {
            trigger: '.joinUs_newBg',
            scrub: 1,
            // markers: true,
            start: `0% 80% `,
            end: `150% 80% `,
        }
    })
}