export class Image {
    constructor(data) {
        this.imgUrl = data.largeImgUrl
        this.author = data.author
    }


    get ImageTemplate() {
        return `
        <div class="m-3">
        <h4 class="text-white text-shadow">Image by:</h4>
        <div class="text-white text-shadow">
        ${this.author}
        </div>
        </div>
        `
    }

}





