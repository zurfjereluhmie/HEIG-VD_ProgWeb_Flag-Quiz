import { $ } from './utils';

class Country {
    #countryData;
    #possibleAns;

    constructor(country) {
        if (!country) throw new Error("invalid argument");

        this.#countryData = country;
        this.#generateAns();
    }

    get country() {
        return this.#countryData;
    }

    #generateAns() {
        const arr = [];
        const translations = this.#countryData.translations;
        Object.keys(translations).forEach((key) => {
            arr.push(translations[key].common.toLowerCase());
        });

        this.#possibleAns = new Set(arr);
    }

    checkAns(input) {
        return this.#possibleAns.has(input.toLowerCase());
    }

    render() {
        const h1 = document.createElement("h1");
        h1.textContent = this.#countryData.flag;
        $("#flag").innerHTML = "";
        $("#flag").appendChild(h1);
    }
}

export default Country;