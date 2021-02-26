let fruits = [];

let ul = document.createElement("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

document.body.append(ul);

button.addEventListener("click", function () {
    let li = returnListItem(input.value);
    if (li) {
        input.value = '';
        ul.append(li);
    }
});

function returnListItem(text = '') {
    if (!text.trim()) {
        return false;
    }
}

let li = document.createElement("li");
let button = document.querySelector("button");
let span = document.querySelector("span");



let nameElement = document.querySelector('person h1');

let age = querySelector('.person #age');


fetch('./data.json').then(function(result){
    result.json().then(function(json) {
        nameElement.innerText = json.name.full;
        age.innerText = json.age + ' years old';

    });
});
 
let fruits = ["Limpn", "Lime", "Apple", "Banana", '',]


document.body.append(ul);
for (let i in fruits) {
    let li = returnListItem(fruits[i]);
    if (li) {
        ul.append(li);
