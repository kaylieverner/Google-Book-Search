import React from 'react';

export default function ResultContainer({children}) {

    return (
    <div className="card">
        <div className="card-body">
        <h3>Results</h3>
            <div className="results">
              {children}
            </div>
        </div>
    </div>
    )
}