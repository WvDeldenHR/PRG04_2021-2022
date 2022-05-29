import * as PIXI from "pixi.js"
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import bgImage from "./images/water.jpg"

export class Game {

    pixi: PIXI.Application
    bg:PIXI.Sprite
    fish:PIXI.Sprite
    anotherFish:PIXI.Sprite
    bubble:PIXI.Sprite
    anotherBubble:PIXI.Sprite
    loader:PIXI.Loader

    constructor() {
        this.pixi = new PIXI.Application({ width: 900, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader
            .add("bgTexture", bgImage)
            .add("fishTexture", fishImage)
            .add("bubbleTexture", bubbleImage)
            .add("backgroundTexture", bgImage)

        this.loader.load(() => this.doneLoading())
    }

    doneLoading() {
        console.log("all textures loaded!")

        this.bg = new PIXI.Sprite(this.loader.resources["bgTexture"].texture!)
        this.bg.x = 0
        this.bg.y = 0
        this.pixi.stage.addChild(this.bg)

        this.fish = new PIXI.Sprite(this.loader.resources["fishTexture"].texture!)
        this.fish.x = Math.random()*900
        this.fish.y = Math.random()*500
        this.pixi.stage.addChild(this.fish)

        const myfilter = new PIXI.filters.ColorMatrixFilter()
        this.fish.filters = [myfilter]
        myfilter.hue(Math.random()*360, false) // HUE filter

        this.anotherFish = new PIXI.Sprite(this.loader.resources["fishTexture"].texture!)
        this.pixi.stage.addChild(this.anotherFish)

        this.bubble = new PIXI.Sprite(this.loader.resources["bubbleTexture"].texture!)
        this.bubble.x = Math.random()*900
        this.bubble.y = Math.random()*500
        this.pixi.stage.addChild(this.bubble)

        this.anotherBubble = new PIXI.Sprite(this.loader.resources["bubbleTexture"].texture!)
        this.pixi.stage.addChild(this.anotherBubble)

        this.pixi.ticker.add((delta) => this.update(delta))
    }

    update(delta : number) {
        this.fish.x -= 2
        this.anotherFish.x -= 3
        this.bubble.y -= 2
        this.anotherBubble.y -= 3
    }
}

new Game()