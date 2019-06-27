import { connect } from 'react-redux';  
import {addPost, getPost} from '../actions'  
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import Catalog from './Catalog';

class Home extends Component {

    componentDidMount() {
        this.props.getPost(localStorage.getItem('current'));
    }
    
    render() {
        console.log(this.props.reviews)

        return (
            <div>
                {/* <SearchBar addPost={this.props.addPost} /> */}
                <Catalog reviews={this.props.reviews} />
                <Link to='/add'>Add Review</Link>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    reviews: state.reviews
})

export default connect(mapStateToProps, {getPost, addPost})(Home)