import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"

//Globals
let fish : PIXI.Sprite
let bubble : PIXI.Sprite
let water : PIXI.Sprite


//Canvas
const pixi = new PIXI.Application({ width: 800, height: 450 })
document.body.appendChild(pixi.view)

// pixi.ticker.add((delta) => {
//     console.log("animating....")
// })


//Preload Images
const loader = new PIXI.Loader()
loader.add('fishTexture', fishImage)
      .add('bubbleTexture', bubbleImage)
      .add('waterTexture', waterImage)
loader.load(()=>loadCompleted())


//Load Sprites
function loadCompleted() {
    //Water
    water = new PIXI.Sprite(loader.resources["waterTexture"].texture!)
    water.x = 0
    water.y = 0
    pixi.stage.addChild(water)

    //Fish
    for(let f= 0; f<30; f++){
        fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
        fish.x = Math.random()*800
        fish.y = Math.random()*450
        pixi.stage.addChild(fish)

        const myfilter = new PIXI.filters.ColorMatrixFilter()
        fish.filters = [myfilter]
        myfilter.hue(Math.random()*360, false) // HUE filter
    }

    let anotherFish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
    anotherFish.x = 400
    anotherFish.y = 100
    pixi.stage.addChild(anotherFish)

    //Bubble
    for(let f=0; f<20; f++) {
        bubble = new PIXI.Sprite(loader.resources["bubbleTexture"].texture!)
        bubble.x = Math.random()*800
        bubble.y = Math.random()*450
        pixi.stage.addChild(bubble)
    }

    //Update
    pixi.ticker.add((delta) => update(delta))
    console.log("All Images are loaded")
}

function update(delta:number) {
    fish.x += 0.1 * delta
    bubble.x += 0.1 * delta
}

//Score
const graphics = new PIXI.Graphics()
graphics.beginFill(0xDE3249)
graphics.drawRect(50, 50, 100, 100)
graphics.endFill()

const basicText = new PIXI.Text(`Score: 0 Lives: 3`)
basicText.x = 50
basicText.y = 100

pixi.stage.addChild(graphics)
pixi.stage.addChild(basicText)