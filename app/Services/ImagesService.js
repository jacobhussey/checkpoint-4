import { appState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { imageApi } from "./AxiosService.js"




class ImagesServices {
    async getImage() {
        const res = await imageApi.get()
        console.log(res.data, 'got image');
        appState.images = new Image(res.data)
    }
}

export const imagesServices = new ImagesServices