import React, { Component } from 'react'

export default class AddForm extends Component {
    state = {
        newCard: {
            resname: '',
            restype: '',
            foodname: '',
            imgURL: '',
            price: null,
            rating: null,
            description: ''
        }
    };
    handleChanges = e => {
        this.setState({newCard: e.target.value});
    };

    addToCard = e => {
        e.preventDefault();
        this.props.addCard(this.state.newCard);
        this.setState({ newCard: ''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addToCard}>
                    <input
                        type="text"
                        value={this.state.newCard.resname}
                        onChange={this.handleChanges}
                        placeholder='Restaurant Name'
                    />
                    <input 
                        type="text"
                        value={this.state.newCard.restype}
                        onChange={this.handleChanges}
                        placeholder='Type of Food'                        
                    />
                    <input 
                        type="text"
                        value={this.state.newCard.foodname}
                        onChange={this.handleChanges}
                        placeholder='Type of Food'                        
                    />
                    <input 
                        type="text"
                        value={this.state.newCard.imgURL}
                        onChange={this.handleChanges}
                        placeholder='imgURL'                        
                    />
                    <input 
                        type="text"
                        value={this.state.newCard.restype}
                        onChange={this.handleChanges}
                        placeholder='Price of Food'                        
                    />
                    <input
                        type="text"
                        value={this.state.newCard.rating}
                        onChange={this.handleChanges}
                        placeholder='Food Rating, 1-5'
                    />
                    <input
                        type="text"
                        value={this.state.newCard.description}
                        onChange={this.handleChanges}
                        placeholder='Description'
                    />         

                </form>
            </div>
        )
    }
}
