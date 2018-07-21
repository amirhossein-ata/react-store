import {createStore , combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_ITEM
const addItem = (
    {
        name='',
        price = 0,
        description='',
        producer='',
        likes=0,
        rating=0
    }
) =>({
    type:'ADD_ITEM',
    item :{
        id :uuid(),
        name : name ,
        price : price,
        description : description,
        producer : producer ,
        likes : likes ,
        rating : rating
    }
});
//DELETE_ITEM
const deleteItem= ({id}={}) =>({
    type:'DELETE_ITEM',
    id : id 
});
//EDIT_ITEM
const editItem = (id , updates) => ({
    type :'EDIT_ITEM',
    id:id,
    updates:updates
});
//SET_RATING
//ADD_LIKE
const addLike = (id) => ({
    type : 'ADD_LIKE',
    id:id
});

//items_reducer

const itemsReducerDefaultState = []

const itemsReducer = (state=itemsReducerDefaultState  , action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return[
                ...state,
                action.item
             ]
        case 'DELETE_ITEM':
             return  state.filter(({id}) => id !== action.id );
        
        case 'EDIT_ITEM':
             return state.map((item) => {
                 if (item.id === action.id){
                     return {
                         ...item,
                         ...action.updates
                     };
                 }else{
                     return item
                 }
             })
        case 'ADD_LIKE':
             
            return state.map((item)=>{
                if (item.id === action.id){
                    return {
                        ...item,
                        likes : (item.likes + 1)
                    }
                }else{
                    return item
                }
            
            })
        default :
            return state;
    }
}

//FILTER_NAME
const filterName = (name = '') => ({
    type:'FILTER_NAME',
    name:name
})
//FILTER_PRICE
const filterPrice = (price = 0) => ({
    type:'FILTER_PRICE',
    price : price
})
//FILTER_PRODUCER
const filterProducer = (producer = '')=>({
    type:'FILTER_PRODUCER',
    producer : producer
})
//SORT_BY_PRICE
const sortByPrice = () => ({
    type:'SORT_BY_PRICE'
})
//SORT_BY_RATE

const sortByRate = () => ({
    type:'SORT_BY_RATE'
})
//filters_reducer

const filtersReducerDefaultState = {
    itemName :'',
    itemPrice : undefined ,
    itemProducer :'',
    itemRate : undefined,
    sortBy:'price'
}

const filtersReducer = (state=filtersReducerDefaultState , action) => {
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
//get_visible_items

const getVisibleItems = (items,{itemName , itemPrice ,itemProducer,itemRate,sortBy}) => {
    return items.filter((item)=>{
        const producerMatch =itemProducer === "" || item.producer.toLowerCase() === itemProducer.toLowerCase() ;
        const nameMatch = item.name.toLowerCase().includes(itemName.toLowerCase());
        const priceMatch = typeof itemPrice !== 'number' || item.price <= itemPrice;
        const RateMatch = typeof itemRate !== 'number' || item.rating >= itemRate;

        return nameMatch && priceMatch && producerMatch && RateMatch;
     })
     .sort((a,b) => {
        if(sortBy ==='price'){
            return a.price < b.price ? 1 : -1;
        }
        else{
            return a.rating < b.rating ? 1 : -1;
        }
    }) 
};

//create_store

const store = createStore(
    combineReducers({
        items : itemsReducer,
        filters :filtersReducer 
    })
);
store.subscribe(()=> {
    const state = store.getState();
    const visibleItems = getVisibleItems(state.items , state.filters);
    console.log(state.filters)
    console.log(visibleItems);
});

const itemOne = store.dispatch(addItem({name:'book',description:'historical',producer:"HP",price:70,rating:6}));
const itemTwo = store.dispatch(addItem({name:'pen',description:'black',price:120,rating:9}));
const itemThree = store.dispatch(addItem({name:'macbook',description:'red',price:10,rating:4}));

// store.dispatch(editItem(itemTwo.item.id,{name:'pencil',price:1,likes:2}));
// store.dispatch(addLike(itemTwo.item.id));
// store.dispatch(filterName());
// store.dispatch(filterPrice(90));
// store.dispatch(filterProducer("HP"));
store.dispatch(sortByRate());
store.dispatch(sortByPrice());



