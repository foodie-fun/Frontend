import { connect } from 'react-redux';  
import {addPost} from '../actions'  
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Cards from './Cards'
import Catalog from './Catalog';

class Home extends Component {
    render() {
        console.log(this.props.reviews)
        return (
            <div>
                <SearchBar addPost={this.props.addPost} />
                <Catalog reviews={this.props.reviews} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    reviews: state.reviews
})
export default connect(mapStateToProps, {addPost})(Home)