// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


let book1 = {
    title: "qwerty",
    pageCount: 3,
    genre: "horror",
}
let book2 = {
    title: "qwert",
    pageCount: 5,
    genre: "comedy",
}
let book3 = {
    title: "qwertyer",
    pageCount: 8,
    genre: "triller",
}

book1.author = ["Vasya", 32];
book2.author = ["Sofia", 35];
book3.author = ["Anna", 15];
console.log(book1)
console.log(book2)
console.log(book3)
 let Users = [
     {
         name: "Anna",
         userName: "wrf",
         password: 147878,
     },
     {
         name: "Annag",
         userName: "wrf",
         password: 147378,
     },
     {
         name: "Annah",
         userName: "wrf",
         password: 147178,
     },
     {
         name: "Annak",
         userName: "wrf",
         password: 149778,
     },
     {
         name: "Annab",
         userName: "wrf",
         password: 147878,
     },
     {
         name: "Annac",
         userName: "wrf",
         password: 147578,
     },
     {
         name: "Annaw",
         userName: "wrf",
         password: 142778,
     },
     {
         name: "Annat",
         userName: "wrf",
         password: 147578,
     },
     {
         name: "Annar",
         userName: "wrf3r",
         password: 14778,
     },
     {
         name: "George",
         userName: "wrftjsr",
         password: 14778,
     }
 ]
console.log(Users)