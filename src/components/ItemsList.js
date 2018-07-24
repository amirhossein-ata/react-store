import React from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';
import selectItems from '../selectors/items'

const ItemsList = (props) => (
    <div>
        {props.items.map((item) => (
            <Item
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                producer={item.producer}
                likes={item.likes}
                rating={item.rating}
                category={item.category}
            />
        ))}
    </div>
)

const mapStateToProps = (state) => {
    return{
        items : selectItems(state.items , state.filters)
    };
}
export default connect(mapStateToProps)(ItemsList) ;