import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Cards from './Cards'

export default class Home extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                {/* <Cards /> */}
            </div>
        )
    }
}
