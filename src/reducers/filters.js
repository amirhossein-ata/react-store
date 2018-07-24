//filters_reducer

const filtersReducerDefaultState = {
    itemName :'',
    itemPrice : undefined ,
    itemProducer :'',
    itemCategory :'',
    itemRate : undefined,
    sortBy:'price'
}
export default (state=filtersReducerDefaultState , action) => {
    switch (action.type){
        case 'FILTER_NAME':
            return{
                ...state,
                itemName:action.name
            }
        case 'FILTER_PRICE':
            return{
                ...state,
                itemPrice:action.price
            }
        case 'FILTER_PRODUCER':
            return{
                ...state,
                itemProducer:action.producer
            }
        case 'FILTER_CATEGORY':
            return{
                ...state,
                itemCategory:action.category

            }
         case 'SORT_BY_PRICE':
            return{
                ...state,
                sortBy:'price'
            }
         case 'SORT_BY_RATE':
            return{
                ...state,
                sortBy:'rate'
            }
         default :
            return state ;
    }
}
