import React from 'react';
import './index.css'

export default function Jumbotron () {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="display-4 jumbotronHeader">Google Book Search</h1>
            <p className="tagline">Search and Save Books of Interest</p>
        </div>
    </div>
  );
}
