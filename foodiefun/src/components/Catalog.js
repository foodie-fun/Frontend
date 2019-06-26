import React from 'react';
import Cards from './Cards';


export default function Catalog(props){
    console.log(props)
    return (
        <div>
            {props.reviews.map((review, index) => <Cards key={index} review={review} /> )}            
        </div>
    )
}
