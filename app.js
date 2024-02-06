const { shuffle } = require("lodash");
import { $ } from './modules/utils';
import Game from "./modules/Game";


const reqAPI = async () => {
    return await fetch("https://restcountries.com/v3.1/all")
        .then((rep) => rep.json());
}

const initGame = async () => {
    const data = await reqAPI();
    const countriesMixed = shuffle(data);
    const game = new Game(countriesMixed);


    $("form").addEventListener("submit", (e) => {
        e.preventDefault();

        const userInput = $("form input");

        if (game.isGameDone()) {
            alert(`Game Over! Your score is ${game.score}`);
            return;
        }

        if (game.country.checkAns(userInput.value)) game.addScore();

        if (game.score > localStorage.getItem("highScore")) {
            localStorage.setItem("highScore", game.score);
            displayHighScore();
        }

        $("#score").querySelector("h1").textContent = `Score: ${game.score}`;

        game.next();

        $("form").reset();
    });
}

document.addEventListener("DOMContentLoaded", () => displayHighScore());

const displayHighScore = () => {
    const highScore = localStorage.getItem("highScore");
    if (!highScore) return;

    $("#highscore h1").textContent = `Highscore: ${highScore}`;
}

initGame();