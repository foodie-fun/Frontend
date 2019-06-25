    
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser } from '../actions';
import AddForm from './AddForm'
class SearchBar extends Component {
    
    render() {
        
        return (
            <div>
                <AddForm addPost = {this.props.addPost} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    user: state.user,
})

export default connect(mapStateToProps, { getUser }) (SearchBar)