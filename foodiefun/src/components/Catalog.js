import React from 'react';
import Cards from './Cards';
import { Container } from 'reactstrap';

export default function Catalog(props){
    console.log(props)
    return (
        <div>
            {/* {props.reviews.map((review, index) => <Cards key={index} review={review} /> )}   */}

            {props.reviews.map((review, index) => {
                return (
                    <Container fluid>
                        <Cards key={index} review={review} />
                    </Container>
                )
            })}
        </div>
    )
}
