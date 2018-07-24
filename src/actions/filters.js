
//FILTER_NAME
export const filterName = (name = '') => ({
    type:'FILTER_NAME',
    name:name
})
//FILTER_PRICE
export const filterPrice = (price = 0) => ({
    type:'FILTER_PRICE',
    price : price
})
//FILTER_PRODUCER
export const filterProducer = (producer = '')=>({
    type:'FILTER_PRODUCER',
    producer : producer
})
//FILTER_CATEGORY
export const filterCategory = (category = '')=>({
    type:'FILTER_CATEGORY',
    category : category
})

//SORT_BY_PRICE
export const sortByPrice = () => ({
    type:'SORT_BY_PRICE'
})
//SORT_BY_RATE

export const sortByRate = () => ({
    type:'SORT_BY_RATE'
})
