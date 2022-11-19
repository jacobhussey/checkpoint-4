import { Pop } from "../Utils/Pop";


export class QuotesController {
    constructor() {
        console.log('this is the quotes');
    }


    async getQuotes() {
        try {
            await qu
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }
}