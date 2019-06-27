import React, { Component } from 'react'
import {getPost, addPost, updatePost } from '../actions'
import {connect } from 'react-redux';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        e.persist()
        console.log(this.state.newCard)
        const post = {user_id: localStorage.getItem('current'), ...this.state.newCard}
        this.props.addPost(post);
        this.props.getPost(localStorage.getItem('current'));
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addToCard}>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                    <Label for="resname">Restaurant Name</Label>
                    <Input type="text"
                        name='resname'
                        value={this.state.newCard.resname}
                        onChange={this.handleChanges}
                        placeholder='Restaurant Name'
                        required />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                    <Label for="restype">Type of Food</Label>
                    <Input type="text"
                        name='restype'
                        value={this.state.newCard.restype}
                        onChange={this.handleChanges}
                        placeholder='Type of Food'   
                        required />
                    </FormGroup>
                </Col>
                </Row>
                <Col md={6}>
                    <FormGroup>
                    <Label for="imgURL">Image URL</Label>
                    <Input type="text"
                            name='imgURL'
                            value={this.state.newCard.imgURL}
                            onChange={this.handleChanges}
                            placeholder='Imgur Links Work!' 
                            required />
                    </FormGroup>
                </Col>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                    <Label for="foodname">Menu Item Name</Label>
                    <Input type="text"
                        name='foodname'
                        value={this.state.newCard.foodname}
                        onChange={this.handleChanges}
                        placeholder='Menu Item Name'  
                        required  />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number"
                        name='price'
                        value={this.state.newCard.price}
                        onChange={this.handleChanges}
                        placeholder='Price of Food' 
                        required/>
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                    <Label for="rating">Rating 1-10</Label>
                    <Input type="number"
                        name='rating'
                        value={this.state.newCard.rating}
                        onChange={this.handleChanges}
                        placeholder='Rating'
                        required/>
                    </FormGroup>  
                </Col>
                </Row>
                <Col md={4}>
                    <FormGroup check>
                        <Label for="comment" check>Comments</Label>
                        <Input type="text"
                            name='comment'
                            value={this.state.newCard.comment}
                            onChange={this.handleChanges}
                            placeholder='Comments'/>
                    </FormGroup>
                </Col>
                <Button style={{backgroundColor: '#e1f0e1', color:'black'}} type='submit'>Add Post</Button>
            </Form>
            </div>
        )
    }
}


export default connect(null, {getPost, addPost, updatePost})(AddForm)