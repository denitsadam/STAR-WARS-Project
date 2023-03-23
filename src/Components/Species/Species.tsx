import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Specie } from "../../swapi/interfaces";
import SwapiService from "../../swapi/SwapiService";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import SpecieContent from "./SpecieContent";


const Species = () => {
    const [speciesState, setSpecies] = useState<Specie[]>([]);
    useEffect(() => {
        const swapi = new SwapiService();
        swapi.getSpecies().then((species) => {
            setSpecies(species);
        });
    }, []);

    let { id } = useParams();
    const selectedSpecie = id && speciesState.find(s => s.url.split('/').filter(itm => itm).pop() === id);
    
    return <>
        <Sidebar>
            {speciesState.map(specie => {
                const specieId = specie.url.split('/').filter(itm => itm).pop();
                return <SidebarItem path={`${specieId}`}>
                    <h3>{specie.name}</h3>
                </SidebarItem>
            })}
        </Sidebar>
        {selectedSpecie && <SpecieContent specie={selectedSpecie} />}
    </>
}

export default Species;