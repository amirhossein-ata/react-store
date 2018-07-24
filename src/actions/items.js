import uuid from 'uuid';

//ADD_ITEM
export const addItem = (
    {
        name='',
        price = 0,
        description='',
        producer='',
        likes=0,
        rating=0,
        category=''
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
        rating : rating,
        category : category
    }
});
//DELETE_ITEM
export const deleteItem= ({id}={}) =>({
    type:'DELETE_ITEM',
    id : id 
});
//EDIT_ITEM
export const editItem = (id , updates) => ({
    type :'EDIT_ITEM',
    id:id,
    updates:updates
});
//SET_RATING
//ADD_LIKE
export const addLike = (id) => ({
    type : 'ADD_LIKE',
    id:id
});
