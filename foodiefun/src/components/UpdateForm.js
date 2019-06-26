import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import {deletePost, updatePost} from '../actions/';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    update = e => {
        e.preventDefault();
        this.props.updatePost(this.props.review)

    }

    render() {
        return (
        <div>
            <p>{this.props.review.resname}</p>
            <p>{this.props.review.restype}</p>
            <p>{this.props.review.foodname}</p>
            <p>{this.props.review.price}</p>
            <p>{this.props.review.rating}</p>

            <button onClick={this.update}>UPDATE</button>
            <button onClick={this.delete} >DELETE</button>
        </div>
        )
    }
}


export default connect(null, {deletePost, updatePost})(Cards);
