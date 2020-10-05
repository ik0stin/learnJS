"use strict";

const numberOfFilms = +prompt('How much films did you watched?', '');

const personalMoviedatabse = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false 
};

const a = prompt('One of the last watched films?', ''),
      b = prompt('raiting of film', ''),
      c = prompt('One of the last watched films?', ''),
      d = prompt('raiting of film', '');

personalMoviedatabse.movies[a] = b;
personalMoviedatabse.movies[c] = d;

console.log(personalMoviedatabse);