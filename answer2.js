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
