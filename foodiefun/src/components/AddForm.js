import React, { Component } from 'react'
import {getPost, addPost, updatePost } from '../actions'
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';

class AddForm extends Component {
    state = {
        newCard: {
            resname: '',
            restype: '',
            foodname: '',
            imgURL: '',
            price: '',
            rating: '',
            comment: ''
        }
    };

    componentDidMount() {
        this.props.getPost();
    }
    
    handleChanges = e => {
        this.setState({newCard:{...this.state.newCard, [e.target.name]: e.target.value}});
    };

    addToCard = e => {
        e.preventDefault();
        console.log(this.state.newCard)
        const post = {user_id: localStorage.getItem('current'), ...this.state.newCard}
        this.props.addPost(post);
        this.props.getPost(localStorage.getItem('current'));
        this.props.history.push('/home');
    }

    checkUpdate = e => {
        let anything = {
            id:5 
        }

        this.props.updatePost(anything);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addToCard}>
                    <input
                        type="text"
                        name='resname'
                        value={this.state.newCard.resname}
                        onChange={this.handleChanges}
                        placeholder='Restaurant Name'
                        required
                    />
                    <input 
                        type="text"
                        name='restype'
                        value={this.state.newCard.restype}
                        onChange={this.handleChanges}
                        placeholder='Type of Food'   
                        required                     
                    />
                    <input 
                        type="text"
                        name='foodname'
                        value={this.state.newCard.foodname}
                        onChange={this.handleChanges}
                        placeholder='food name'  
                        required                      
                    />
                    <input 
                        type="text"
                        name='imgURL'
                        value={this.state.newCard.imgURL}
                        onChange={this.handleChanges}
                        placeholder='imgURL' 
                        required                       
                    />
                    <input 
                        type="number"
                        name='price'
                        value={this.state.newCard.price}
                        onChange={this.handleChanges}
                        placeholder='Price of Food' 
                        required                       
                    />
                    <input
                        type="number"
                        name='rating'
                        value={this.state.newCard.rating}
                        onChange={this.handleChanges}
                        placeholder='Food Rating, 1-5'
                        required
                    />
                    <input
                        type="text"
                        name='comment'
                        value={this.state.newCard.comment}
                        onChange={this.handleChanges}
                        placeholder='Description'
                    />         
                    <button type='submit'>Add Post</button>
                    <button onClick={this.checkUpdate}>Check Update</button>
                </form>
                <Link to='/home'>Go Home</Link>
            </div>
        )
    }
}


export default connect(null, {getPost, addPost, updatePost})(AddForm)