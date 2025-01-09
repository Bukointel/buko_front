export default async (gsap, duration) => {
    gsap.fromTo('.hero_p', {
        y: 100
    }, {
        y: 0,
        opacity: 1,
        duration
    })
    // тут мне надо добавить задержку в 2 сек
    await new Promise(resolve => setTimeout(resolve, duration * 1000));
}