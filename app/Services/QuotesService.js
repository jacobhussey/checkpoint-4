import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { quoteApi } from "./AxiosService.js"



class QuotesSerivce {

    async getQuotes() {
        const res = await quoteApi.get()
        console.log(res.data, 'got quotes');
        appState.quotes = new Quote(res.data)
    }

}

export const quotesService = new QuotesSerivce