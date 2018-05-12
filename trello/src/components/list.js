import React from 'react';

import Card from './card';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{
                text: 'Buy pattys'
            }, {
                text: 'Buy buns'
            }, {
                text: 'Buy cheese'
            }]
        }
    }

    render() {
        const cards = this.state.cards.map((card, index) =>
            <li key={index}>
                <Card {...card} />
            </li>
        );
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {cards}
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};