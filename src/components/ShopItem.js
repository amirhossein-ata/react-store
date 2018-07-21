import React from 'react';

class ShopItem extends React.Component{
    render(props){
        return(
            <div className={this.props.class_name}>
                <p>{this.props.name}</p>
            </div>
      
                  
        );
    }
}
export default ShopItem;