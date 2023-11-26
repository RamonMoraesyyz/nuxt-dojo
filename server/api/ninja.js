export default defineEventHandler( async (event) => {
    //handle query params
    //const { name } = getQuery(event)

    //handle post data
    //const { age } = await readBody(event)

    //api call with prvate key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_qYkaY2nwzutjxjY81dD8TSzXESzrtEXcvfqBiDou')


    return data

})

