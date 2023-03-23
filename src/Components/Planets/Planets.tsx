import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Planet } from "../../swapi/interfaces";
import SwapiService from "../../swapi/SwapiService";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import PlanetsContent from "./PlanetsContent";

const Planets = () => {
    const [planetsState, setPlanets] = useState<Planet[]>([]);
    useEffect(() => {
        const swapi = new SwapiService();
        swapi.getPlanets().then((planets) => {
            setPlanets(planets);
        });
    }, []);

    let { id } = useParams();
    const selectedPlanet = id && planetsState.find(s => s.url.split('/').filter(itm => itm).pop() === id);
    
    return <>
        <Sidebar>
            {planetsState.map(specie => {
                const planetId = specie.url.split('/').filter(itm => itm).pop();
                return <SidebarItem path={`${planetId}`}>
                    <h3>{specie.name}</h3>
                </SidebarItem>
            })}
        </Sidebar>
        {selectedPlanet && <PlanetsContent planet={selectedPlanet} />}
    </>
}

export default Planets;