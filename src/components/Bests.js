import React from 'react';
import ShopItem from './ShopItem';

export default () => (
    <div>
        <br></br>
        <hr></hr>
        <h3 className="bests__title">
            best sellers
        </h3>
        
        <div className="bests">
            <ShopItem
                name="item 1" 
                class_name="shopItem"      
            />                  
            <ShopItem
                name="item 2" 
                class_name="shopItem"      
            />
            <ShopItem
                name="item 3" 
                class_name="shopItem"      
            />  
            <ShopItem
                name="item 4" 
                class_name="shopItem"      
            />
        </div>
    </div>
);
