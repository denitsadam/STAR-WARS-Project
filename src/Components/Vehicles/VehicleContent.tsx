import React from "react";
import { Vehicle } from "../../swapi/interfaces";
import './assets/css/vehicle-content.css';


const VehicleContent = (props: { ship: Vehicle }) => {
    const { ship: vehicle } = props;
    return <div className="vehicle-content">
        <h1>{vehicle.name}</h1>
        <div className="vehicle-data">
            <div className="lbl-value-pair"><label>Class:</label><label>{vehicle.vehicle_class}</label></div>
            <div className="lbl-value-pair"><label>Model:</label><label>{vehicle.model}</label></div>
            <div className="lbl-value-pair"><label>Manufacturer:</label><label>{vehicle.manufacturer}</label></div>
        </div>
        <div className="metrics vehicle-metrics">
            <div>
                <h2>Parameters:</h2>
                <div className="lbl-value-pair"><label>Length:</label><label>{vehicle.length}</label></div>
                <div className="lbl-value-pair"><label>Crew:</label><label>{vehicle.crew}</label></div>
                <div className="lbl-value-pair"><label>Passengers:</label><label>{vehicle.passengers}</label></div>
                <div className="lbl-value-pair"><label>Capacity:</label><label>{vehicle.cargo_capacity}</label></div>
            </div>
            <div>
                <h2>Cost:</h2>
                <div className="lbl-value-pair"><label>Credits:</label><label>{vehicle.cost_in_credits}</label></div>
                <div className="lbl-value-pair"><label>Construction:</label><label>{vehicle.consumables}</label></div>
            </div>
            <div>
                <h2>Mobility:</h2>
                <div className="lbl-value-pair"><label>Atmospheric:</label><label>{vehicle.max_atmosphering_speed}</label></div>
            </div>
        </div>
    </div>
}

export default VehicleContent;