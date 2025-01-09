import { Assets } from './pixi';

export default async () => {

    const textures = {}
    textures.beach = await Assets.load('/img/boatopt/beach.png');
    textures.cloud1 = await Assets.load('/img/boatopt/cloud1.png');
    textures.cloud2 = await Assets.load('/img/boatopt/cloud2.png');
    textures.cloud3 = await Assets.load('/img/boatopt/cloud3.png');
    textures.cloud4 = await Assets.load('/img/boatopt/cloud4.png');
    textures.palms = await Assets.load('/img/boatopt/palms.png');
    textures.backSea = await Assets.load('/img/boatopt/backsea.png');
    textures.boat = await Assets.load('/img/boatopt/boat.png');
    textures.sea = await Assets.load('/img/boatopt/sea.png');

    return textures
}