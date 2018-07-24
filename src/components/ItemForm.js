import React from 'react';

export default class ItemForm extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name : this.props.item ? this.props.item.name :'',
            description : this.props.item ? this.props.item.description : '',
            price : this.props.item ? this.props.item.price : '' ,
            producer : this.props.item ? this.props.item.producer : '',
            category : this.props.item ? this.props.item.category : ''
        }
    }
    
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({name:name}));
    }
    onDescriptionChange = (e) => {
        const description = e.target.value ;
        this.setState(() => ({description : description}));
    }
    onProducerChange = (e) => {
        const producer = e.target.value ;
        this.setState(() => ({producer : producer}))
    }
    onCategoryChange = (e) => {
        const category = e.target.value;
        this.setState(() => ({category : category}))
    }
    onPriceChange = (e) => {
        const price = e.target.value; 
        if (price.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({price : price}))
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name || !this.state.producer || !this.state.price || !this.state.category){
            this.setState(() => ({error : 'please provide the required inputs'}))
        }
        else{
            this.setState(()=> ({error : ''}))
            this.props.onSubmit({
                name:this.state.name,
                description:this.state.description,
                price:this.state.price,
                producer:this.state.producer,
                category:this.state.category      
            })
        }
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <p>Name:</p>
                    <input
                        type="text"
                        placeholder="name"
                        autoFocus
                        value = {this.state.name}
                        onChange={this.onNameChange}
                    />
                    <p>Description:</p>
                    <input
                        type="text"
                        placeholder="description"
                        value = {this.state.description}
                        onChange = {this.onDescriptionChange}
                    />
                    <p>Price:</p>
                    <input
                        type="text"
                        placeholder="price"  
                        value = {this.state.price}
                        onChange = {this.onPriceChange}
                    />
                    <p>Producer:</p>
                    <input
                        type="text"
                        placeholder="producer"  
                        value = {this.state.producer}
                        onChange = {this.onProducerChange}
                    />
                    <p>Category:</p>
                    <input
                        type="text"
                        placeholder="category"
                        value = {this.state.category}  
                        onChange = {this.onCategoryChange}
                    />
                    <br></br>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
