import { Assets } from './pixi';

export default async () => {

    const textures = {}
    textures.beach = await Assets.load('/img/boat/beach.png');
    textures.cloud1 = await Assets.load('/img/boat/cloud1.png');
    textures.cloud2 = await Assets.load('/img/boat/cloud2.png');
    textures.cloud3 = await Assets.load('/img/boat/cloud3.png');
    textures.cloud4 = await Assets.load('/img/boat/cloud4.png');
    textures.palms = await Assets.load('/img/boat/palms.png');
    textures.backSea = await Assets.load('/img/boat/backsea.png');
    textures.boat = await Assets.load('/img/boat/boat.png');
    textures.sea = await Assets.load('/img/boat/sea.png');

    return textures
}