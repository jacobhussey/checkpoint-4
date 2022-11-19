export class Image {
    constructor(data) {
        this.imgUrl = data.largeImgUrl
        this.author = data.author
    }


    get ImageTemplate() {
        return `
        <h4 class="text-white">Image by: ${this.author}</h4>
        `
    }

}





