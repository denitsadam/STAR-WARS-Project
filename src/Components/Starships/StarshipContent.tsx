import React from "react";
import { Starship } from "../../swapi/interfaces";
import './assets/css/starship-content.css';


const StarshipContent = (props: { ship: Starship }) => {
    const { ship } = props;
    return <div className="starship-content">
        <h1>{ship.name}</h1>
        <div className="ship-data">
            <div className="lbl-value-pair"><label>Class:</label><label>{ship.starship_class}</label></div>
            <div className="lbl-value-pair"><label>Model:</label><label>{ship.model}</label></div>
            <div className="lbl-value-pair"><label>Manufacturer:</label><label>{ship.manufacturer}</label></div>
        </div>
        <div className="ship-metrics">
            <div>
                <h2>Parameters:</h2>
                <div className="lbl-value-pair"><label>Length:</label><label>{ship.length}</label></div>
                <div className="lbl-value-pair"><label>Crew:</label><label>{ship.crew}</label></div>
                <div className="lbl-value-pair"><label>Passengers:</label><label>{ship.passengers}</label></div>
                <div className="lbl-value-pair"><label>Capacity:</label><label>{ship.cargo_capacity}</label></div>
            </div>
            <div>
                <h2>Cost:</h2>
                <div className="lbl-value-pair"><label>Credits:</label><label>{ship.cost_in_credits}</label></div>
                <div className="lbl-value-pair"><label>Construction:</label><label>{ship.consumables}</label></div>
            </div>
            <div>
                <h2>Mobility:</h2>
                <div className="lbl-value-pair"><label>Atmospheric:</label><label>{ship.max_atmosphering_speed}</label></div>
                <div className="lbl-value-pair"><label>Hyperdrive:</label><label>{ship.hyperdrive_rating}</label></div>
                <div className="lbl-value-pair"><label>MGLT:</label><label>{ship.MGLT}</label></div>
            </div>
        </div>
    </div>
}

export default StarshipContent;