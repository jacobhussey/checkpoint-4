import { setHTML } from "../Utils/Writer.js"


function _drawTime() {
    let date = new Date().toLocaleTimeString()
    setHTML('clock', date)
}

setInterval(_drawTime, 1000)

export class ClockController{
    constructor(){
        _drawTime()
    }
}