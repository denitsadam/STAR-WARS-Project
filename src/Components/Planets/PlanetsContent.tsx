import React from "react";
import { Planet } from "../../swapi/interfaces";
import "./assets/css/planets-content.css";

const PlanetsContent = (props: {planet: Planet}) => {
    const { planet } = props;
    return <div className="planet-content">
        <h1>{planet.name}</h1>
        <div className="metrics planet-metrics">
            <div>
                <h2>Parameters:</h2>
                <div className="lbl-value-pair"><label>Day Length:</label><label>{planet.rotation_period}</label></div>
                <div className="lbl-value-pair"><label>Year Length:</label><label>{planet.orbital_period}</label></div>
                <div className="lbl-value-pair"><label>Diameter:</label><label>{planet.diameter}</label></div>
                <div className="lbl-value-pair"><label>Climate:</label><label>{planet.climate}</label></div>
                <div className="lbl-value-pair"><label>Gravity:</label><label>{planet.gravity}</label></div>
                <div className="lbl-value-pair"><label>Water:</label><label>{planet.surface_water}</label></div>
                <div className="lbl-value-pair"><label>Population:</label><label>{planet.population}</label></div>
            </div>
        </div>
    </div>
}

export default PlanetsContent;