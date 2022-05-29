import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import bgImage from "./images/water.jpg"


import { Fish } from "./fish"

export class Game {

    pixi: PIXI.Application
    loader: PIXI.Loader
    fishes: Fish[] = []

    constructor() {
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)
        
        for(let i = 0; i<10; i++){
            let fish = new Fish(loader.resources["fishTexture"].texture!)
            this.fishes.push(fish)
            this.pixi.stage.addChild(fish)
        }
    }
}

new Game()