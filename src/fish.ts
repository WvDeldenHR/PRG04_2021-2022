import * as PIXI from 'pixi.js'

export class Fish extends PIXI.Sprite{
    constructor(texture: PIXI.Texture){
        super(texture); // new PIXI.Sprite()
    }
}