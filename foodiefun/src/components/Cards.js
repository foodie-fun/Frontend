import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import {deletePost, putOnState} from '../actions/';
import {Link} from 'react-router-dom';

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    putOnState = e => {
        e.preventDefault();
        this.props.putOnState(this.props.review);
    }

    delete = e => {
        this.props.deletePost(this.props.review.id)
    }

    render() {
        return (
        <div>
            <p>{this.props.review.resname}</p>
            <p>{this.props.review.restype}</p>
            <p>{this.props.review.foodname}</p>
            <p>{this.props.review.price}</p>
            <p>{this.props.review.rating}</p>

            <button onClick={this.putOnState}><Link to='/edit'>UPDATE</Link></button>
            <button onClick={this.delete} >DELETE</button>
        </div>
        )
    }
}


export default connect(null, {deletePost, putOnState})(Cards);

