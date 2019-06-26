import React, { Component } from 'react';
import {connect } from 'react-redux';
import {updatePost} from '../actions/';
import { Link } from 'react-router-dom';

class EditForm extends Component {
    state = {
        newCard: {
            id: null,
            resname: '',
            restype: '',
            foodname: '',
            imgURL: '',
            price: '',
            rating: '',
            comment: ''
        }
    };


    handleChanges = e => {
        this.setState({newCard:{...this.state.newCard, [e.target.name]: e.target.value}});
    };

    updateCard = e => {
        console.log(this.props.editedObject)
        e.preventDefault();
        this.setState = ({
            newCard: {...this.state.newCard, id: this.props.editedObject.id }
        })

        // console.log(this.props.editedObject);
        // const edited = this.props.editedObject;
        // console.log(edited);

        // const item = {
        //     user_id: this.props.editedObject.user_id,
        //     id: this.props.editedObject.id,
        //     resname: this.state.newCard.resname,
        //     restype: this.state.newCard.restype,
        //     foodname: this.state.newCard.foodname,
        //     imgURL: this.state.newCard.imgURL,
        //     price: this.state.newCard.price,
        //     rating: this.state.newCard.rating,
        //     comment: this.state.newCard.comment
        // }
        
        this.props.updatePost({user_id: localStorage.getItem('current'), id: this.state.newCard.id, ...this.state.newCard });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.updateCard}>
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
                    <button type='submit'><Link to='/home'>Update Review</Link></button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    editedObject: state.editedObject
})


export default connect(mapStateToProps, {updatePost})(EditForm);