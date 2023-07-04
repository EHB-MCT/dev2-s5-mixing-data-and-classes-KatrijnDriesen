"use strict";

import { Joke } from './joke.js';

const app = {
    items: [],

    init() {
        this.getData();
    },

    getData() {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10&type=twopart")
        .then(response => response.json())
        .then((data) => {
            app.items = data.jokes.map((element) => {
                const joke = new Joke(element.setup, element.delivery, element.flags);
                return joke;
            });
            app.render();
        });
    },

    onSearch() {

    },

    render() {
        const jokesList = document.getElementById("list");
        jokesList.innerHTML = "";  
        this.items.forEach((grapje) => {
            const html = grapje.htmlString;
            jokesList.insertAdjacentHTML("beforeend", html);
        });

    }

};
app.init();