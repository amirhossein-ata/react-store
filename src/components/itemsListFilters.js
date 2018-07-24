import React from 'react';
import {connect} from 'react-redux';
import {filterName , filterCategory,sortByPrice ,sortByRate} from '../actions/filters'
const ItemsListFilters = (props) => (
    <div>
        <p>filter name :</p>
        <input 
            type="text" 
            value={props.filters.itemName}
            onChange={(e) => {
                props.dispatch(filterName(e.target.value));
            }}
        />
        <p>filter category </p>
        <input 
            type="text" 
            value={props.filters.itemCategory}
            onChange={(e) => {
                props.dispatch(filterCategory(e.target.value));
            }}
        />
        <p>sort by </p>
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                const sortBy = e.target.value
                if (sortBy ==='price') {
                    props.dispatch(sortByPrice())
                }
                else if (sortBy === 'rate'){
                    props.dispatch(sortByRate())
                }
            }}
        >
            <option value="price">price</option>
            <option value="rate">rate</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters : state.filters
    }
}

export default connect(mapStateToProps)(ItemsListFilters) ;