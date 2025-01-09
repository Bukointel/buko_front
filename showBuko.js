export default async (gsap, duration) => {
    gsap.fromTo('.hero_content_decor', {
        y: 1000,
    }, {
        y: 0,
        opacity: 1,
        duration
    })
    await new Promise(resolve => setTimeout(resolve, duration * 1000));

}