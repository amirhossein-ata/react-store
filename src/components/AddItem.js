import React from 'react' ;
import ItemForm from './ItemForm';
import {connect} from 'react-redux';
import {addItem} from '../actions/items';
const AddItemPage = (props) => (
    <div>
        <h1>Add Item </h1>
        <ItemForm 
            onSubmit={(item) => {
                props.dispatch(addItem(item));
                props.history.push("/dashboard");

            }}
            
        />
    </div>
)

export default connect()(AddItemPage);