import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Dogs.css';


export default class Dogs extends Component {
    render() {
        let dogs = this.props.dogs;
        return (
            <div className="Dogs container">
                <div className="row justify-content-center ">
                {dogs.map((d)=>{
                    let dog = d.name.toLowerCase();
                    return <div key={dog} className="d-flex justify-content-center col-md-6 col-lg"><NavLink to={`/dogs/${dog}`}><img className="Dogs-img img-thumbnail" alt={dog} src={d.src}/></NavLink></div>;
                })}
                </div>
                
            </div>
        )
    }
}
