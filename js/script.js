"use strict";

const numberOfFilms = +prompt('How much films did you watched?', '');

const personalMoviedatabse = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false 
};

for (let i = 0; i < 2; i++) {
   const a = prompt('One of the last watched films?', ''),
         b = prompt('raiting of film', '');

   if (a != null && b != null && a != '' && b != '' && a.length < 50) {

      personalMoviedatabse.movies[a] = b;
      console.log('done');
   } else {
      console.log('error');
      i--;
   }
}

if (personalMoviedatabse.count < 10) {
   console.log('Мало фильмов');
} else if (personalMoviedatabse.count >= 10 && personalMoviedatabse.count < 30 ) {
   console.log('Классический зритель');
} else if (personalMoviedatabse.count >= 30) {
   console.log('Киноман');
} else {
   console.log('Ошибка');
}



console.log(personalMoviedatabse);


