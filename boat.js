import { Application, Container, Sprite } from './pixi';
import loadTextures from './boatTextures'


export default async () => {
    const app = new Application();
    const textures = await loadTextures();

    const w = window.innerWidth;
    const h = window.innerHeight;

    const elw = w > 800 ? w / 2 : w;

    await app.init({
        background: '#0BEEFF', width: w, height: h
    });

    document.getElementById('joinUs_newBg').appendChild(app.canvas);

    boatBackSea(app, textures, elw, h)
    boatBoat(app, textures, elw, h)
    boatSea(app, textures, elw, h)

}

const boatBackSea = (app, textures, w, h) => {
    const speed = 1;

    const backSeaSprites = [];
    const count = 3; // Количество спрайтов

    for (let i = 0; i < count; i++) {
        const backSea = Sprite.from(textures.backSea);
        backSea.width = w;
        backSea.height = h;
        backSea.y = 0;
        app.stage.addChild(backSea);
        backSeaSprites.push(backSea);
    }

    let counter = 0;

    app.ticker.add((delta) => {
        counter += speed; // Скорость прокрутки, можно сделать параметром
        backSeaSprites.forEach((backSea, index) => {
            backSea.x = w * (index - 1) + (counter % w);
        });
    });

}

const boatBoat = (app, textures, w, h) => {
    const boat = Sprite.from(textures.boat);
    boat.width = 1000;
    boat.height = 1000;
    boat.x = window.innerWidth / 2;
    boat.y = (window.innerHeight / 7) * 4;
    boat.anchor.set(.5, .5)
    app.stage.addChild(boat);

    let counter = 0;

    app.ticker.add((delta) => {
        counter += 0.04; // Чем меньше значение, тем медленнее колебания
        boat.y = (window.innerHeight / 5) * 3 + Math.sin(counter) * 20;
        // `20` — амплитуда колебаний (измените значение для более сильных или слабых колебаний)
    });
}
const boatSea = (app, textures, w, h) => {
    const speed = 2;

    const seaSprites = [];
    const count = 3; // Количество спрайтов

    for (let i = 0; i < count; i++) {
        const sea = Sprite.from(textures.sea);
        sea.width = w;
        sea.height = h;
        sea.y = 0;
        app.stage.addChild(sea);
        seaSprites.push(sea);
    }

    let counter = 0;

    app.ticker.add((delta) => {
        counter += speed; // Скорость прокрутки, можно сделать параметром
        seaSprites.forEach((sea, index) => {
            sea.x = w * (index - 1) + (counter % w);
        });
    });
}