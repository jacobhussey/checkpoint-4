export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }


    get QuoteTemplate() {
        return ` 
        <div class="col-6 text-shadow">
        <h3 class="quote-header">"${this.content}"</h3>
        <p class="quote-author">${this.author}</p>
        </div>

        `
    }
}