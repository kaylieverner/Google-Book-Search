import React from 'react';

export default function SearchBox({children}) {

    return (
    <div className="card">
        <div className="card-body">
        <h3>Search</h3>
        {children}
        </div>
    </div>
    )
}