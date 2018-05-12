import React from 'react';

import './card.css';

export default function Card(props) {
    const text  = 'Example card';
    return (
        <div className="card">
            {props.text}
        </div>
    );
};

Card.defaultProps = {
  text: ''
};