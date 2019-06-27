import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import {deletePost, putOnState, getPost} from '../actions/';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";



class Cards extends Component {    

    putOnState = e => {
        e.preventDefault();
        this.props.putOnState(this.props.review);
    }

    delete = e => {
        this.props.deletePost(this.props.review.id)
        this.props.getPost(localStorage.getItem('current'));
        this.props.history.push('/add');
    }

    render() {
        return (
        <div>
            <p>{this.props.review.resname}</p>
            <p>{this.props.review.restype}</p>
            {/* <img src={this.props.review.imgURL} /> */}
            <p>{this.props.review.foodname}</p>
            <p>{this.props.review.price}</p>
            <p>{this.props.review.rating}</p>
            <p>{this.props.review.comment}</p>
            <button onClick={this.putOnState} ><Link to='/edit'>UPDATE</Link></button>
            <button onClick={this.delete} >DELETE</button>
        </div>
        )
    }
}

export default withRouter(connect(null, {deletePost, putOnState, getPost})(Cards));

