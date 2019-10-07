import React, { Component } from 'react';
export default class Dog extends Component {
    render() {


        return (
            <div>
                Name: {this.props.dog.name}
            </div>
        )
    }
}

