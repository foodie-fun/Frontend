import { connect } from 'react-redux';  
import {addPost, getPost, searchBar} from '../actions'  
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Catalog from './Catalog';
import { Input,Form, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Home extends Component {
    state = {
        searched: ''
    }

    componentDidMount() {
        this.props.getPost(localStorage.getItem('current'));
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.searched !== this.state.searched) {
            this.props.searchBar(this.state.searched)
        }
    }

    changeHandler= e => {
        this.setState({
            ...this.state.searched,
            [e.target.name]: e.target.value
        })
    }
    
    searchSubmit = e => {
        e.preventDefault()
    }

    render() {
        console.log(this.props.reviews)

        return (
            <div className='SearchContainer'>
                {/* <SearchBar addPost={this.props.addPost} /> */}

                <Navbar style={{backgroundColor: '#e1f0e1'}} light expand="md">
                    <NavbarBrand href="/" >FoodieFun!</NavbarBrand>
                                <Form onSubmit={this.searchSubmit}>
                                    <Input className="search-inline" name='searched' value={this.state.searched} type='text' onChange={this.changeHandler} placeholder='Search For Review'/>
                                </Form>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className='text-muted'><Link to='/add'>Add Review</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Register a new user</NavLink>
                            </NavItem>                                                       
                        </Nav>                    
                </Navbar>
                {/* Catalog and Link are not visible to user */}
                <Catalog reviews={this.props.reviews} />
                {/* <Link to='/add'>Add Review</Link> */}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    reviews: state.reviews,
    searchedReviews: state.searchedReviews,
    searchInput: state.searchInput
})

export default connect(mapStateToProps, {getPost, addPost, searchBar})(Home)