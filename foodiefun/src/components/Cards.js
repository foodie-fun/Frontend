import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import {deletePost, putOnState, getPost} from '../actions/';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import { Button , Card, CardDeck, CardImg, CardHeader, CardFooter, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Col, Container, Row } from 'reactstrap';


class Cards extends Component {    

    putOnState = e => {
        e.preventDefault();
        this.props.putOnState(this.props.review);
    }

    delete = e => {
        e.persist();
        this.props.deletePost(this.props.review.id)
        this.props.getPost(localStorage.getItem('current'));
        // this.props.history.push('/add');
    }

    render() {
        return (
        <div>
            {/* <p>{this.props.review.resname}</p>
            <p>{this.props.review.restype}</p>
            <img src={this.props.review.imgURL} />
            <p>{this.props.review.foodname}</p>
            <p>{this.props.review.price}</p>
            <p>{this.props.review.rating}</p>
            <p>{this.props.review.comment}</p>
            <button onClick={this.putOnState} ><Link to='/edit'>UPDATE</Link></button>
            <button onClick={this.delete} >DELETE</button> */}
            <Col sm='3'>
                <CardDeck className='Container'>
                    <Card>
                        <CardBody>
                                <div className="clearfix" style={{ backgroundColor: '#e1f0e1', padding: '.5rem' }}>
                                    <CardTitle><strong>Resturant Name:</strong> {this.props.review.resname}</CardTitle>
                                    <CardSubtitle><strong>Type of Food:</strong> {this.props.review.restype}</CardSubtitle>
                                </div>
                        </CardBody>
                            <CardImg top width="100%" src={this.props.review.imgURL} alt={this.props.review.foodname} />
                        <CardBody>
                            <CardText> <strong>Menu Item Name:</strong>  {this.props.review.foodname} </CardText>
                            <CardText> <strong>Price: </strong>${this.props.review.price} </CardText>
                            <CardText> <strong>Overall Rating:</strong> {this.props.review.rating} </CardText>
                            <CardText> <strong>Comments:</strong> {this.props.review.comment} </CardText>
                                <div className="bg-light clearfix" style={{ padding: '.5rem' }}>
                                    <Button color="success" size="sm" className='float-left'  onClick={this.putOnState}> <Link to='/edit' className='UpdateBtn' >UPDATE</Link> </Button>{' '}
                                    <Button color="danger" size="sm" className='float-right' onClick={this.delete} >DELETE</Button>
                                </div>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Col>
        </div>
        )
    }
}

export default withRouter(connect(null, {deletePost, putOnState, getPost})(Cards));

