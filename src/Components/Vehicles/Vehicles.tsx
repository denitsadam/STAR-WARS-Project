import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Vehicle } from "../../swapi/interfaces";
import SwapiService from "../../swapi/SwapiService";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import "./assets/css/vehicles.css";
import VehicleContent from "./VehicleContent";


const Vehicles = () => {
    const [vehiclesState, setVehicles] = useState<Vehicle[]>([]);
    useEffect(() => {
        const swapi = new SwapiService();
        swapi.getVehicles().then((vehicles) => {
            setVehicles(vehicles);
        });
    }, []);

    let { id } = useParams();
    const selectedVehicle = id && vehiclesState.find(s => s.url.split('/').filter(itm => itm).pop() === id);
    
    return <>
        <Sidebar>
            {vehiclesState.map(ship => {
                const vehicleId = ship.url.split('/').filter(itm => itm).pop();
                return <SidebarItem path={`${vehicleId}`}>
                    <h3>{ship.name}</h3>
                </SidebarItem>
            })}
        </Sidebar>
        {selectedVehicle && <VehicleContent ship={selectedVehicle} />}
    </>
}

export default Vehicles;