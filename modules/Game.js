import Country from "./Country";

class Game {
    #score = 0;
    #countries;
    #index = 0;

    #country = null;

    constructor(countries) {
        this.#countries = countries;
        this.#country = new Country(this.#countries.at(this.#index));

        this.#country.render();
    }

    get score() {
        return this.#score;
    }

    get country() {
        return this.#country;
    }

    addScore() {
        this.#score++;
    }

    isGameDone() {
        return (this.#index >= this.#countries.length);
    }

    next() {
        if (this.isGameDone()) return;
        this.#index++;
        this.#country = new Country(this.#countries.at(this.#index));

        this.#country.render();
    }
}

export default Game;