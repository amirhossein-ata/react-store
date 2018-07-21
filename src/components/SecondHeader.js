import React from 'react';
import ShopItem from './ShopItem';

export default () => (
    <div className="secondHeader">
    <ShopItem
      name="item 1" 
      class_name="secondHeader__part1"      
    />
    <ShopItem
      name="item 2" 
      class_name="secondHeader__part2"      
    />
    <div className="secondHeader__part3">
      <ShopItem
        name="item 2" 
        class_name="secondHeader__part3__part1"      
      />
      <ShopItem
        name="item 2" 
        class_name="secondHeader__part3__part2"      
      />
    </div>


  </div>

);