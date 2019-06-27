import { connect } from 'react-redux';  
import {addPost, getPost} from '../actions'  
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import Catalog from './Catalog';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class Home extends Component {

    componentDidMount() {
        this.props.getPost(localStorage.getItem('current'));
    }
    
    render() {
        console.log(this.props.reviews)

        return (
            <div>
                {/* <SearchBar addPost={this.props.addPost} /> */}

                <Navbar style={{backgroundColor: '#e1f0e1'}} light expand="md">
                    <NavbarBrand href="/">FoodieFun!</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className='text-muted'><Link to='/add'>Add Review</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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
    reviews: state.reviews
})

export default connect(mapStateToProps, {getPost, addPost})(Home)