import { Character, Film, Planet, Specie, Starship, Vehicle } from './interfaces';

const BASE_URL = "https://swapi.dev/api"

export default class SwapiService {

    private getMultiple(path: string, callback: (data: any) => void) {
        const xhttp = new XMLHttpRequest();
        const url = `${BASE_URL}/${path}`;
        xhttp.open("GET", url);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const results = JSON.parse(xhttp.responseText).results;
                callback(results);
            }
            else if (this.readyState === 4 && this.status !== 200) {
                callback([]);
            }
        }
    }

    private getSingle(path: string, callback: (data: any) => void) {
        const xhttp = new XMLHttpRequest();
        const url = `${BASE_URL}/${path}`;
        xhttp.open("GET", url);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const results = JSON.parse(xhttp.responseText);
                callback(results);
            }
            else if (this.readyState === 4 && this.status !== 200) {
                callback(null);
            }
        }
    }

    getFilms() {
        interface Resolve {
            (films: Film[]): void;
        }

        const handler = (resolve: Resolve) => {
            this.getMultiple("films", resolve);
        };

        return new Promise(handler);
    }

    getPeople(peopleIds?: number[]) {
        interface ArrResolve {
            (people: Character[]): void;
        }

        interface Resolve {
            (character: Character): void;
        }

        if (peopleIds)
            return Promise.all(peopleIds.map(id => new Promise((resolve: Resolve) => {
                this.getSingle(`people/${id}`, resolve);
            }))).then(charr => charr.filter(ch => ch));

        return new Promise((resolve: ArrResolve) => {
            this.getMultiple("people", resolve);
        });
    }

    getStarships() {
        interface Resolve {
            (films: Starship[]): void;
        }

        const handler = (resolve: Resolve) => {
            this.getMultiple("starships", resolve);
        };

        return new Promise(handler);
    }

    getVehicles() {
        interface Resolve {
            (films: Vehicle[]): void;
        }

        const handler = (resolve: Resolve) => {
            this.getMultiple("vehicles", resolve);
        };

        return new Promise(handler);
    }

    getSpecies() {
        interface Resolve {
            (films: Specie[]): void;
        }

        const handler = (resolve: Resolve) => {
            this.getMultiple("species", resolve);
        };

        return new Promise(handler);
    }

    getPlanets() {
        interface Resolve {
            (films: Planet[]): void;
        }

        const handler = (resolve: Resolve) => {
            this.getMultiple("planets", resolve);
        };

        return new Promise(handler);
    }
}