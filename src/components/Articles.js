import React from 'react' ;
import Article from './Article'

class Articles extends React.Component{

    render(){
        return(
            <div>
                <h5 className="articles__title">Articles</h5>
                    
                <div className="articles">
                    <Article
                        text="this is first article title"
                    />
                    <Article 
                        text="this is second article title"
                    />
                </div>

            </div>
        );
    };
}
export default Articles ;