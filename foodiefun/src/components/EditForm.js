import React, { Component } from 'react';
import {connect } from 'react-redux';
import {updatePost, getPost} from '../actions/';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        e.persist();     
        this.props.updatePost(this.state.newCard);
        this.SetTimeout()
    }

    SetTimeout = () => {
        setTimeout(this.props.history.push('/home'), 5000)
    }

    componentDidMount() {
        console.log("I am in CDM")
        this.setState ({
            newCard: this.props.editedObject
        })
        console.log(this.props.editedObject)
        this.props.getPost();
        console.log("I am after the getpost")
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.updateCard}>
                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="resname">Restaurant Name</Label>
                        <Input 
                            type="text"
                            name='resname'
                            value={this.state.newCard.resname}
                            onChange={this.handleChanges}
                            placeholder='Restaurant Name'
                            required 
                        />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="restype">Type of Food</Label>
                        <Input 
                            type="text"
                            name='restype'
                            value={this.state.newCard.restype}
                            onChange={this.handleChanges}
                            placeholder='Type of Food'   
                            required 
                        />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="imgURL">Image URL</Label>
                        <Input 
                            type="text"
                            name='imgURL'
                            value={this.state.newCard.imgURL}
                            onChange={this.handleChanges}
                            placeholder='Imgur Links Work!' 
                            required 
                        />
                        </FormGroup>
                    </Col>
                    <Row form>
                    <Col md={6}>
                        <FormGroup>
                        <Label for="foodname">Menu Item Name</Label>
                        <Input  
                            type="text"
                            name='foodname'
                            value={this.state.newCard.foodname}
                            onChange={this.handleChanges}
                            placeholder='Menu Item Name'  
                            required  
                        />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                        <Label for="price">Price</Label>
                        <Input 
                            type="number"
                            name='price'
                            value={this.state.newCard.price}
                            onChange={this.handleChanges}
                            placeholder='Price of Food' 
                            required
                        />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                        <Label for="rating">Rating 1-10</Label>
                        <Input 
                            type="number"
                            name='rating'
                            value={this.state.newCard.rating}
                            onChange={this.handleChanges}
                            placeholder='Food Rating, 1-5'
                            required
                        />
                        </FormGroup>  
                    </Col>
                    </Row>
                    <Col md={4}>
                        <FormGroup check>
                            <Label for="comment" check>Comments</Label>
                            <Input 
                                type="text"
                                name='comment'
                                value={this.state.newCard.comment}
                                onChange={this.handleChanges}
                                placeholder='Description'
                            />
                        </FormGroup>
                    </Col>
                    <Button style={{backgroundColor: '#e1f0e1', color:'black'}} type='submit'>Update Review</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    editedObject: state.editedObject
})


export default connect(mapStateToProps, {updatePost, getPost})(EditForm);