// const a = 5;
// const b = 2;

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);


// array ----------------------------------------------------------

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
// console.log(daysOfWeek)
// console.log(daysOfWeek[0], daysOfWeek[6])
// console.log(daysOfWeek.length)
// daysOfWeek.push('weeks')
// console.log(daysOfWeek)

// // object
// const player = {
//     name: "suhun",
//     points: 10,
//     fat: false,
// };
// console.log(player)
// console.log(player.name)
// console.log(player.points)
// console.log(player.fat)

// player.fat = true;  // object안의 내용물 수정 ok
// player.lastName = "potato"  // object안에 새로운 내용물 추가 ok
// console.log(player)


// funtcion ----------------------------------------------------------

// function sayHello(name, age){
//     console.log('hello my name is', name);
//     console.log('i am', age, 'years old');
// }
// sayHello('huhu', 14)
// sayHello('unii', 17)


// const player2 = {
//     name: "suhunidang",
//     sayHello: function(myName){
//         console.log('hello!', myName)
//     }
// };

// console.log(player2.name);
// player2.sayHello('uniuni');


// function return -----------------------------------------------

// const age = 96;
// function calculateKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);
// console.log(krAge);
// const myAge = calculateKrAge(26);
// console.log(myAge)


// conditional -------------------------------------------------------

// const age = parseInt(prompt('how old are you'));

// console.log(isNaN(age));

// if (isNaN(age) || age<0) {
//     // condition == true
//     console.log('please enter number');
// } else if (age < 18) {
//     console.log('you are too young~');
// } else if (age >= 18 && age <= 50) {
//     console.log('you can drink')
// } else {
//     // condition == false
//     console.log('tnk')
// }



// const title = document.getElementById('h1')

// hello.innerText='got you ..'
// console.dir(title)

// const hellos = document.getElementsByClassName('hello');
// console.log(hellos);

// const title = document.querySelector(".hello h1")
// console.log(title)
// console.dir(title)

// title.style.color = "green";

// /// event ------------------------------------------------

// function handleTitleClick(){
//     title.style.color = "red";
//     console.log('title was clicked!!!');
// }

// function handleMouseEnter() {
//     title.innerText = 'mouse is here!'
// }

// function handleMouseleave() {
//     title.innerText = 'mouse is gone!'
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseleave);

// function handleWindowResize() {
//     document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy() {
//     alert('copier!!!')
// }

// function handleWindowOffline() {
//     alert('sos')
// }

// function handleWindowOnline() {
//     alert('okokok online')
// }

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

const h1 = document.querySelector('div.hello:first-child h1')

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener('click', handleTitleClick)