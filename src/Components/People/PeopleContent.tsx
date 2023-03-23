import React from "react";
import { Character, Planet } from "../../swapi/interfaces";
import "./assets/css/people-content.css";

const PeopleContent = (props: {character: Character}) => {
    const { character } = props;
    return <div className="people-content">
        <h1>{character.name}</h1>
        <div className="metrics people-metrics">
            <div>
                <h2>Parameters:</h2>
                <div className="lbl-value-pair"><label>Height:</label><label>{character.height}</label></div>
                <div className="lbl-value-pair"><label>Weight:</label><label>{character.mass}</label></div>
                <div className="lbl-value-pair"><label>Hair:</label><label>{character.hair_color}</label></div>
                <div className="lbl-value-pair"><label>Skin:</label><label>{character.skin_color}</label></div>
                <div className="lbl-value-pair"><label>Eyes:</label><label>{character.eye_color}</label></div>
                <div className="lbl-value-pair"><label>Gender:</label><label>{character.gender}</label></div>
                <div className="lbl-value-pair"><label>Birth Year:</label><label>{character.birth_year}</label></div>
            </div>
        </div>
    </div>
}

export default PeopleContent;