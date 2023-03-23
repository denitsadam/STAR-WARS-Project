import React from "react";
import { Specie } from "../../swapi/interfaces";
import "./assets/css/specie-content.css";

const SpecieContent = (props: { specie: Specie }) => {
    const { specie } = props;
    return <div className="specie-content">
        <h1>{specie.name}</h1>
        <div className="metrics specie-metrics">
            <div>
                <h2>Parameters:</h2>
                <div className="lbl-value-pair"><label>Classification:</label><label>{specie.classification}</label></div>
                <div className="lbl-value-pair"><label>Designation:</label><label>{specie.designation}</label></div>
                <div className="lbl-value-pair"><label>Height:</label><label>{specie.average_height}</label></div>
                <div className="lbl-value-pair"><label>Skin:</label><label>{specie.skin_colors}</label></div>
                <div className="lbl-value-pair"><label>Hair:</label><label>{specie.hair_colors}</label></div>
                <div className="lbl-value-pair"><label>Eyes:</label><label>{specie.eye_colors}</label></div>
                <div className="lbl-value-pair"><label>Lifespan:</label><label>{specie.average_lifespan}</label></div>
                <div className="lbl-value-pair"><label>Language:</label><label>{specie.language}</label></div>
            </div>
        </div>
    </div>
}

export default SpecieContent;