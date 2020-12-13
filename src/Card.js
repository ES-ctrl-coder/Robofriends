import React from 'react';

function Card(props) {
    return (
        <div id="box" className="tc bg-blue dib br3 pa3 ma3 grow bw1 ba b--red shadow-5">
            <img width="180px" height="180px" alt="robot" src={`https://robohash.org/${props.id}`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;