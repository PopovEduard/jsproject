"use strict";

let personalMovieDB={
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i=0; i<2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классный зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');    
        }    
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    },
    writeYourGenres: function() {    
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
                personalMovieDB.genres.forEach((i, item)=>{
                    console.log(`Любимый жанр ${i + 1} - это ${item}`);

                });
            }
            
        }        
    }
};

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');
hearts.forEach(item => {
    console.log(item);
});
const heart = document.querySelector('.heart');
box.style.backgroundColor = 'red';
box.style.width = '500px';
box.style.cssText = 'background-color: red; width: 500px';
const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);