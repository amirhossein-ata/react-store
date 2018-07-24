import React from 'react'
import ItemsList from './ItemsList'
import ItemsListFilter from './itemsListFilters'
import {NavLink} from 'react-router-dom';

const ItemsDashboardPage = () => (
    <div>
        <NavLink to="/addItem" activeClassName="is-active" exact={true}>Add Item</NavLink> 
        <ItemsListFilter />
        <ItemsList />
    </div>
);
 
export default ItemsDashboardPage ;