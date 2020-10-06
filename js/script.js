"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
   }
}

start();

const personalMoviedatabse = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: true 
};


function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
   
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
   
         personalMoviedatabse.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

rememberMyFilms();


function detectPersonalLevel() {
   if (personalMoviedatabse.count < 10) {
      console.log('Мало фильмов');
   } else if (personalMoviedatabse.count >= 10 && personalMoviedatabse.count < 30 ) {
      console.log('Классический зритель');
   } else if (personalMoviedatabse.count >= 30) {
      console.log('Киноман');
   } else {
      console.log('Ошибка');
   }   
}

detectPersonalLevel();

function showMyDB (hidden) {
   if ( !hidden) {
      console.log(personalMoviedatabse); 
   }
}

showMyDB(personalMoviedatabse.privat);

function writeYourGenres () {
   for(let i = 1; i <= 3; i++) {
      personalMoviedatabse.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

writeYourGenres();


