import React from 'react';

class Article extends React.Component{
    state={
        hovered:false
    }

    hoverOn = () => {
        this.setState(()=>({
            hovered:true
        }))
        console.log(this.state.hovered)
    }
    hoverOff = () => {
        this.setState(()=>({
            hovered:false
        }))
    }    
    render(props){
        return(
            <div className="articles__parent" 
                onMouseEnter={this.hoverOn}
                onMouseLeave={this.hoverOff}
            >
            {this.state.hovered ? (
                <div className="articles__item"
                >
                    <div className="articles__item__image-hovered"></div>
                    <div className="articles__item__text">
                        {this.props.text}
                    </div>
                </div>
            ):
            (   
                <div className="articles__item"
                >
                    <div className="articles__item__image"></div>
                    <div className="articles__item__text">
                        {this.props.text}
                    </div>
                </div>
            )
            }
            
            </div>

        )
    }
}

export default Article ;