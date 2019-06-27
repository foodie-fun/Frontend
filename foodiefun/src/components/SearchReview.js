// import React, { Component } from 'react';
// import { connect } from 'react-redux'; 
// import {} from '../actions/';
// import {Link} from 'react-router-dom';

// class SearchReview extends Component {
//     constructor() {
//         super();
//         this.state = {
//             reviews: [{
//                 resname: "NAME"
//             }, {
//                 resname: "NAME TWO"
//             }],
//             filtered: [],
//             search: ''
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             ...this.state,
//             filtered: [...this.state.reviews]
//         })
//     }

//     changeHandler = e => {
//         this.setState ({
//             ...this.state,
//             [e.target.name]: e.target.value
//         })
//     }

//     render() {
//         console.log(this.props.reviews);

//         return (
//             <div>
//                 <input type ='text' name='search' onChange={this.changeHandler} placeholder='Search For Post' />
//                 {this.state.filtered.map(review => {
//                     return <h1>{review.resname}</h1>
//                 })}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     reviews: state.reviews
// }) 

// export default connect(mapStateToProps, {})(SearchReview)