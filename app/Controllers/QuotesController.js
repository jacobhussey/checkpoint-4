import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawQuote() {
    let quotes = appState.quotes
    setHTML('quote', quotes.QuoteTemplate)
}

export class QuotesController {
    constructor() {
        console.log('this is the quotes');
        this.getQuotes()
        appState.on('quotes', _drawQuote)
    }


    async getQuotes() {
        try {
            await quotesService.getQuotes()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
}