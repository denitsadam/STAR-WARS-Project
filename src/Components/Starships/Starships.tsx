import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Starship } from "../../swapi/interfaces";
import SwapiService from "../../swapi/SwapiService";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import StarshipContent from "./StarshipContent";


const Starships = () => {
    const [shipsState, setShips] = useState<Starship[]>([]);
    useEffect(() => {
        const swapi = new SwapiService();
        swapi.getStarships().then((ships) => {
            setShips(ships);
        });
    }, []);

    let { id } = useParams();
    const selectedShip = id && shipsState.find(s => s.url.split('/').filter(itm => itm).pop() === id);
    
    return <>
        <Sidebar>
            {shipsState.map(ship => {
                const shipId = ship.url.split('/').filter(itm => itm).pop();
                return <SidebarItem path={`${shipId}`}>
                    <h3>{ship.name}</h3>
                </SidebarItem>
            })}
        </Sidebar>
        {selectedShip && <StarshipContent ship={selectedShip} />}
    </>
}

export default Starships;