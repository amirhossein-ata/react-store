import React from 'react';
import ShopItem from  './ShopItem'

export default () => (
    <div  class="shelf">
    <div class="shelf__layer">
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
    <div class="shelf__layer">
        <ShopItem
            name="item 5" 
            class_name="shopItem"      
        />                  
        <ShopItem
            name="item 6" 
            class_name="shopItem"      
        />
        <ShopItem
            name="item 7" 
            class_name="shopItem"      
        />  
        <ShopItem
            name="item 8" 
            class_name="shopItem"      
        />                                                    
    </div>
  </div>

);