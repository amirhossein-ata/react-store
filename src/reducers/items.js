//items_reducer

const itemsReducerDefaultState = []

export default (state=itemsReducerDefaultState  , action) => {
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
