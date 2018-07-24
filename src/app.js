import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {filterName , filterPrice ,filterCategory} from './actions/filters';
import {addItem} from './actions/items';
import getVisibleItems from './selectors/items'
import 'normalize.css/normalize.css' ;
import './styles/styles.scss';

const store = configureStore();
store.subscribe(()=> {
    const state = store.getState();
    const visibleItems = getVisibleItems(state.items , state.filters);
    
    console.log(state.filters)
    console.log(visibleItems);
});

const itemOne = store.dispatch(addItem({name:'great gatsby',description:'novel',producer:"fitzgerals",price:70,rating:6,category:'book'}));
const itemTwo = store.dispatch(addItem({name:'pen',description:'black',price:1,rating:9,'category':'stuff'}));
const itemThree = store.dispatch(addItem({name:'macbook',description:'red',price:10,rating:4 , category:'laptop'}));

// store.dispatch(editItem(itemTwo.item.id,{name:'pencil',price:1,likes:2}));
// store.dispatch(addLike(itemTwo.item.id));
//  store.dispatch(filterName("b"));
// store.dispatch(filterPrice(90));
// store.dispatch(filterProducer("HP"));
// store.dispatch(sortByRate());
// store.dispatch(sortByPrice());

// const visibleItems = getVisibleItems(state.items , state.filters);
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx , document.getElementById('app'));  