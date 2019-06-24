import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser } from '../actions';

class SearchBar extends Component {

    render() {
        
        return (
            <div>
                <h2>Inside SearchBar</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    user: state.user,
})

export default connect(mapStateToProps, { getUser }) (SearchBar)