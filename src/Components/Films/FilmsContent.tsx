import React, { useEffect, useState } from "react";
import './assets/css/filmsContent.css';
import { Character, Film } from "../../swapi/interfaces";
import TabControl from "../TabControl/TabControl";
import Grid, { GridCol, GridRow } from "../Grid/Grid";
import SwapiService from "../../swapi/SwapiService";

const FilmsContent = (props: { film: Film }) => {
    const { film } = props;
    useEffect(() => {
        document.getAnimations()[0].currentTime = 0;
    })

    return <div className="films-container">
        <h3>
            Episode {film.episode_id}
        </h3>
        <h1>{film.title}</h1>
        <div className="crawl-section">
            <div className="crawl">
                {film.opening_crawl.split('\r\n\r').map(prgh => <p>{prgh}</p>)}
            </div>
        </div>
        <div className="film-data">
            <div className="lbl-value-pair">
                <label>Released</label>
                <label>{new Date(film.release_date || '').toLocaleString().split(',')[0]}</label>
            </div>
            <div className="lbl-value-pair">
                <label>Director</label>
                {film.director.split(',').map(dir => <label>{dir}</label>)}
            </div>
            <div className="lbl-value-pair">
                <label>Producer</label>
                {film.producer.split(',').map(dir => <label>{dir}</label>)}
            </div>
        </div>
        {/* <TabControl tabs={[
            { text: "Characters", content: <Grid>
                <GridRow>
                    <GridCol>Test1</GridCol>
                    <GridCol>Test1</GridCol>
                    <GridCol>Test1</GridCol>
                    <GridCol>Test1</GridCol>
                </GridRow>
                <GridRow>
                    <GridCol>Test1</GridCol>
                    <GridCol>Test1</GridCol>
                    <GridCol>Test1</GridCol>
                    <GridCol>Test1</GridCol>
                </GridRow>
            </Grid>},
            { text: "Planets", content: <>2</> },
            { text: "Starships", content: <>3</> },
            { text: "Species", content: <>4</> }]}
        /> */}
    </div>
}

export default FilmsContent;