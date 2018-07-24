import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
class Item extends React.Component {
    render(props){

        return(
            <div>
                {this.props.name} / {this.props.description} / {this.props.price} / {this.props.producer} / {this.props.likes} / {this.props.rating} / {this.props.category} 
                <Link to={`/edit/${this.props.id}`}><button>edit</button></Link>
            </div>

        )
    }
}

export default connect()(Item) ;