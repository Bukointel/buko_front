export default (gsap) => {
    const persentPerEl = 12;

    gsap.to('.roadmap_header', {
        text: {
            value: "ROADMAP"
        }, scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * 0}% 80%`,
            end: `${persentPerEl * 1}% 80%`,
        }
    })
    gsap.fromTo('.roadmap_step_1', {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * 1}% 80%`,
            end: `${persentPerEl * 2}% 80%`,
        }
    })
    gsap.to('.roadmap_step_content_1', {
        text: {
            value: "Vibe, Thrive, and Meme"
        }, scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * 2}% 80%`,
            end: `${persentPerEl * 3}% 80%`,
        }
    })
    gsap.fromTo('.roadmap_step_2', {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * 3}% 80%`,
            end: `${persentPerEl * 4}% 80%`,
        }
    })
    gsap.to('.roadmap_step_content_2', {
        text: {
            value: "HODL Tight, Meme Bright"
        }, scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * 4}% 80%`,
            end: `${persentPerEl * 5}% 80%`,
        }
    })
    gsap.fromTo('.roadmap_step_3', {
        y: -50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * 5}% 80%`,
            end: `${persentPerEl * 6}% 80%`,
        }
    })
    gsap.to('.roadmap_step_content_3', {
        text: {
            value: "Pure Meme Vibes"
        }, scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * 6}% 80%`,
            end: `${persentPerEl * 7}% 80%`,
        }
    })
    gsap.fromTo('.roadmap_step_decor', {
        // scale: 2,
        opacity: 0,
    }, {
        // scale: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: '.roadmap',
            scrub: 1,
            // markers: true,
            start: `${persentPerEl * 7}% 80%`,
            end: `${persentPerEl * 7}% 80%`,
        }
    })
}