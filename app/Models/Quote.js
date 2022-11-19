export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }


    get QuoteTemplate() {
        return `
        <h4>${this.content}</h4>
        <p>${this.author}</p>
        `
    }
}