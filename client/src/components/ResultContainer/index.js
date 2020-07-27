import React from 'react';

export default function ResultContainer(props) {

    return (
    <div className="card">
        <div className="card-body">
        <h3>{props.title}</h3>
            <div className="results">
                {props.resultCard}
                
            </div>
        </div>
    </div>
    )
}