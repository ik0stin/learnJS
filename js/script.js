"use strict";



const personalMoviedatabse = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMoviedatabse.count = +prompt('Сколько фильмов посмотрели?', '');
   
      while (personalMoviedatabse.count == '' || personalMoviedatabse.count == null || isNaN(personalMoviedatabse.count)) {
         personalMoviedatabse.count = +prompt('Сколько фильмов посмотрели?', '');
      }
   },
   rememberMyFilms: function() {
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
   },
   detectPersonalLevel: function() {
      if (personalMoviedatabse.count < 10) {
         console.log('Мало фильмов');
      } else if (personalMoviedatabse.count >= 10 && personalMoviedatabse.count < 30 ) {
         console.log('Классический зритель');
      } else if (personalMoviedatabse.count >= 30) {
         console.log('Киноман');
      } else {
         console.log('Ошибка');
      }   
   },
   showMyDB: function(hidden) {
      if ( !hidden) {
         console.log(personalMoviedatabse); 
      }
   },
   toggleVisibleMyDB: function() {
      if (personalMoviedatabse.privat) {
         personalMoviedatabse.privat == false;
      } else {
         personalMoviedatabse.privat == true;
      }
   },
   writeYourGenres () {
      for(let i = 1; i <= 3; i++) {
         let genre = prompt(`Ваш любимый жанр под номером ${i}`);

         if (genre == null || genre == '') {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
            i--;
         } else {
            personalMoviedatabse.genres[i - 1] = genre;
         }
      }
   }   
};






















// Объекты

const obj = {
   name: 'text',
   width: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function() {
      console.log('Test');
 }};

 obj.makeTest();


// деструктуризация объекта
 const {border, bg} = obj.colors;
 console.log(border);


console.log(Object.keys(obj).length);

for (let key in obj) {
   if (typeof(obj[key]) === 'object') {
      for (let i in obj[key]) {
         console.log(`Свлйство ${i} имеет значение ${obj[key][i]}`);
      }
   } else {
      console.log(`Свлйство ${key} имеет значение ${obj[key]}`);
   }
}


// Массивы и псевдомассивы

const arr = [1, 2, 3, 6, 8];

arr.pop(); //Удаляет последний эл-т
arr.push(10); //Добавяет еще один эл-т в коенц массива

console.log(arr);

// перебор всех эл-тов массива 1 способ
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// перебор всех эл-тов массива 2 способ
for (let value of arr) {
   console.log(value);
}

// перебор всех эл-тов массива 3 способ
arr.forEach(function(item, i, arr) {    //item-название эл-та массива(сам придумываешь), i - номпер массива, arr -сам массив
   console.log(`${i}: ${item} внутри массива ${arr}`);
});


// сформировывает массив с разделением на основании заданного эл-та
const str = prompt("", "");
const products = str.split(", ");
products.sort(); //сортирует эл-ты массива в алфавитном порядке, сортирует, как строки

// псевдомассивы они без методов




// Передача данных по ссылке или по значению

function copy(mainObj) {
   let objCopy = {};
   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }
   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      y: 4
   }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;


console.log(numbers);
console.log(newNumbers);



// 2 способ

const add = {
   d: 17,
   e: 20
};

const clone = Object.assign({}, add);


// метод копии массива

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

const array = ["a", "b"];
const newAarray = [...array];

console.log(newAarray);

const q = {
   one: 1,
   two: 2
}
const newQ = {...q};

console.log(newQ);




// прототипно-ориентированное наследование

const soldier = {
   health: 200,
   armor: 300,
   sayHello: function() {
      console.log("Hello");
   }
};

// const john = {
//    health: 150
// };

// Object.setPrototypeOf(john, soldier);

const john = Object.create(soldier);

john.sayHello();