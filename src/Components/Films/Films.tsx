import React, { useEffect, useState } from "react";
import SwapiService from "../../swapi/SwapiService";
import { Film } from "../../swapi/interfaces";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import FilmsContent from "./FilmsContent";

const Films = () => {
    const [filmsState, setFilms] = useState<Film[]>([]);
    useEffect(() => {
        const swapi = new SwapiService();
        swapi.getFilms().then((films) => {
            setFilms(films);
        });
    }, []);

    let { id } = useParams();
    const selectedFilm = id && filmsState[Number.parseInt(id) - 1];
    return <>
        <Sidebar>
            {filmsState.map(film => {
                const filmId = film.url.split('/').filter(itm => itm).pop();
                return <SidebarItem path={`${filmId}`}>
                    <h3>{film.title}</h3>
                </SidebarItem>
            })}
        </Sidebar>
        {selectedFilm &&
            <FilmsContent film={selectedFilm} />
        }
    </>
}

export default Films;