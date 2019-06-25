import React from 'react';

export default function Card(props) {
    return (
        <div>
            <p>{props.review.resname}</p>
            <p>{props.review.restype}</p>
            <p>{props.review.foodname}</p>
            <p>{props.review.price}</p>
            <p>{props.review.rating}</p>
        </div>
    )
}
