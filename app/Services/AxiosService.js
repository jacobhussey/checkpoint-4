
export const imageApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/images'
})

export const quoteApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

export const weatherApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})

// export const todoApi = new axios.create({
//     baseURL: 'https://bcw-sandbox.herokuapp.com/api/jacobhussey/todos'
// })

export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})