import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../swapi/interfaces";
import SwapiService from "../../swapi/SwapiService";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import PeopleContent from "./PeopleContent";

const People = () => {
    const [peopleState, setPeople] = useState<Character[]>([]);
    useEffect(() => {
        const swapi = new SwapiService();
        swapi.getPeople().then((people) => {
            setPeople(people);
        });
    }, []);

    let { id } = useParams();
    const selectedCharacter = id && peopleState.find(s => s.url.split('/').filter(itm => itm).pop() === id);
    
    return <>
        <Sidebar>
            {peopleState.map(specie => {
                const planetId = specie.url.split('/').filter(itm => itm).pop();
                return <SidebarItem path={`${planetId}`}>
                    <h3>{specie.name}</h3>
                </SidebarItem>
            })}
        </Sidebar>
        {selectedCharacter && <PeopleContent character={selectedCharacter} />}
    </>
}

export default People;