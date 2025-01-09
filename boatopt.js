import { Application, Container, Sprite } from './pixi';
import loadTextures from './boatTextures'


export default async () => {
    const app = new Application();
    const textures = await loadTextures();

    const w = window.innerWidth;
    const h = window.innerHeight;

    const aspect = w / h

    // const elw = w > 800 ? w / 2 : w;
    const elw = w;

    await app.init({
        background: '#0BEEFF', width: w, height: h
    });
    document.getElementById('joinUs_newBg').innerHTML = '';
    document.getElementById('joinUs_newBg').appendChild(app.canvas);

    boatBeach(app, textures, elw, h, aspect)
    boatPalms(app, textures, elw, h, aspect)
    boatBackSea(app, textures, elw, h, aspect)
    boatBoat(app, textures, elw, h, aspect)
    boatSea(app, textures, elw, h, aspect)

}

const boatPalms = (app, textures, w, h, aspect) => {
    const speed = .6;

    const palmsSprites = [];
    const count = 4;

    for (let i = 0; i < count; i++) {
        const palms = Sprite.from(textures.palms);
        palms.width = w / 2;
        palms.height = h / 4 * aspect;
        palms.y = h - (palms.height / 1.6);
        palms.anchor.set(0, 1)
        app.stage.addChild(palms);
        palmsSprites.push(palms);
    }

    let counter = 0;

    app.ticker.add((delta) => {
        counter += speed;
        palmsSprites.forEach((palms, index) => {
            palms.x = (w / 2) * (index - 2) + (counter % w);
        });
    });
}
const boatBeach = (app, textures, w, h, aspect) => {
    const speed = .3;

    const beachSprites = [];
    const count = 4;

    for (let i = 0; i < count; i++) {
        const beach = Sprite.from(textures.beach);
        beach.width = w / 2;
        beach.height = h / 3 * aspect;
        beach.y = h - (beach.height / 3);
        beach.anchor.set(0, 1)
        app.stage.addChild(beach);
        beachSprites.push(beach);
    }

    let counter = 0;

    app.ticker.add((delta) => {
        counter += speed;
        beachSprites.forEach((beach, index) => {
            beach.x = (w / 2) * (index - 2) + (counter % w);
        });
    });

}
const boatBackSea = (app, textures, w, h, aspect) => {
    const speed = 1;

    const backSeaSprites = [];
    const count = 6;

    for (let i = 0; i < count; i++) {
        const backSea = Sprite.from(textures.backSea);
        backSea.width = w / 3;
        backSea.height = h / 5 * aspect;
        backSea.y = h + (backSea.height / 4);
        backSea.anchor.set(0, 1)
        app.stage.addChild(backSea);
        backSeaSprites.push(backSea);
    }

    let counter = 0;

    app.ticker.add((delta) => {
        counter += speed;
        backSeaSprites.forEach((backSea, index) => {
            backSea.x = (w / 3) * (index - 3) + (counter % w);
        });
    });

}

const boatBoat = (app, textures, w, h, aspect) => {
    const boat = Sprite.from(textures.boat);
    boat.width = w / 3;
    boat.height = h / 5 * aspect;
    boat.x = window.innerWidth / 2;
    boat.y = h;
    boat.anchor.set(.5, 1)
    app.stage.addChild(boat);

    let counter = 0;

    app.ticker.add((delta) => {
        counter += 0.04;
        boat.y = h - h / 32 + Math.sin(counter) * 20;
    });
}
const boatSea = (app, textures, w, h, aspect) => {
    const speed = 2;

    const seaSprites = [];
    const count = 6;

    for (let i = 0; i < count; i++) {
        const sea = Sprite.from(textures.sea);
        sea.width = w / 3;
        sea.height = h / 5 * aspect;
        sea.y = h + (sea.height / 2);
        sea.anchor.set(0, 1)
        app.stage.addChild(sea);
        seaSprites.push(sea);
    }

    let counter = 0;

    app.ticker.add((delta) => {
        counter += speed;
        seaSprites.forEach((sea, index) => {
            sea.x = (w / 3) * (index - 3) + (counter % w);
        });
    });
}