import React from 'react'
import ItemForm from './ItemForm';
import {connect} from 'react-redux';
import {editItem , deleteItem} from '../actions/items'

const EditItemPage = (props) => {
    console.log(props);
    return(
        <div>
            <ItemForm 
                item={props.item}
                onSubmit={(item) => {
                    props.dispatch(editItem(props.item.id,item)) ;
                    props.history.push('/dashboard') ;
                }}  
            />
            <button 
                onClick = {() =>{
                    props.dispatch(deleteItem({id : props.item.id}));
                    props.history.push('/dashboard') ;
                }}
            >
                Remove
            </button>

        </div>

    );
};

const mapStateToProps = (state , props) => {
    return {
         item: state.items.find((item) => {
            return item.id === props.match.params.id ;
        })
    };
};

export default connect(mapStateToProps)(EditItemPage) ;