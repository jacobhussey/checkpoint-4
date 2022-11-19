import { appState } from "../AppState.js";
import { imagesServices } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawImage() {
    let image = appState.images
    document.querySelector('body').style.backgroundImage = `url(${image.imgUrl})`
    setHTML('image', image.ImageTemplate)
}

export class ImagesController {
    constructor() {
        console.log('this is the image controller');
        this.getImage()
        appState.on('images', _drawImage)
    }


    async getImage() {
        try {
            await imagesServices.getImage()
        } catch (error) {
            Pop.error(error.message)

        }
    }


}