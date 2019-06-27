import React from 'react';
import Cards from './Cards';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';  
import { searchBar } from '../actions'; 

function Catalog(props){
    console.log(props)
    return (
        <div>
            {/* Below is the original mapped over array replaced by the ternary operator. The ternary's first case is map over the user input and filters. Second case is default map over(as there would be no input)  */}
            {/* {props.reviews.map((review, index) => <Cards key={index} review={review} /> )}   */}
            {props.searchInput.length > 0 ? props.searchedReviews.map((review,index) => {
                return (
                    <Container fluid>
                        <Cards key={index} review={review} />
                    </Container>
                )}) : props.reviews.map((review, index) => {
                    return (
                        <Container fluid>
                            <Cards key={index} review={review} />
                        </Container>
                    )
                })
            }
            
        </div>
    )
}

const mapStateToProps = state => ({
    searchedReviews: state.searchedReviews,
    searchInput: state.searchInput
})

export default connect(mapStateToProps, {searchBar})(Catalog)