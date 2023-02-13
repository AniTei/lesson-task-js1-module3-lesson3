//making a fork

/* ### Question 1
Convert the below functions to one-line arrow functions.
 */


greet = name => `Hello ${name}!`;

add = (a, b) => a + b;

//har ikke kopla de ulike filene, går bare rett til fasiten, er trøtt
////// FASIT

const greet = (name) => `Hello ${name}!`;

const add = (a, b) => a + b;

//OBS, GLEMTE VISST Å DECLEAR THEM AS VARIABLES, const!!!!!!!!
//ellers likt, OK



/* ### Question 2
Convert the below code to use the then/catch syntax instead.
 */

async function getCatFacts() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
    const results = await response.json();
    console.log(results.length);
  } catch (error) {
    console.log(error);
  }
}

///////////////////////

function thenCatch(){
    .then(function){
        response = fetch("https://api.noroff.dev/api/v1/cat-facts");
        results = response.json();
        console.log(results.length);
    }
    .catch(function (error)){
        console.log(error);
    }
    
}
thenCatch();

//jeg kan ikke denne, vet ikke om jeg gidder å bruke mer tid på den??
// for det første glemte jeg fetch, nei vent, 
// jeg har fetch, men på et annet sted?
// fetch is needed before the first then
// response, result, error, all need seperate then s
//And the whole of a function need sto be inside the () of the then or catch method
//the secont option maybe looks most like what I tried to do?


//////FASIT

fetch("https://api.noroff.dev/api/v1/cat-facts")
    .then(function (response) {
        return response.json();
    })
    .then(function (results) {
        console.log(results.length);
    })
    .catch(function (error) {
        console.log(error);
    });

// we can also enclose the code in a function and then call it
// this will have the same effect but means the code is reusable and can be called again from somewhere else in the code
function getCatFacts() {
    fetch("https://api.noroff.dev/api/v1/cat-facts")
        .then(function (response) {
            return response.json();
        })
        .then(function (results) {
            console.log(results.length);
        })
        .catch(function (error) {
            console.log(error);
        });
}

getCatFacts();

// with arrow functions
function getCatFacts2() {
    fetch("https://api.noroff.dev/api/v1/cat-facts")
        .then((response) => response.json())
        .then((results) => {
            console.log(results.length);
        })
        .catch((error) => console.log(error));
}

getCatFacts2();







