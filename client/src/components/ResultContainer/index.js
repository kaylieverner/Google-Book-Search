import React from 'react';
import ResultCard from "../ResultCard/index";

export default function ResultContainer(props) {

    return (
    <div className="card">
        <div className="card-body">
        <h3>{props.title}</h3>
            <div className="results">
                <ResultCard
                src={"https://via.placeholder.com/150"}
                title={"Harry Potter"}
                tagline={"Book about wizards"}
                author={"JK Rowling"}
                summary={"lorem ipsum stuff about harry potter summary stuff"}
                ></ResultCard>

                <ResultCard
                src={"https://via.placeholder.com/150"}
                title={"Harry Potter"}
                tagline={"Book about wizards"}
                author={"JK Rowling"}
                summary={"lorem ipsum stuff about harry potter summary stuff"}
                ></ResultCard>
            </div>
        </div>
    </div>
    )
}