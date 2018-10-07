/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// this variable selects the ul with queryselector
const list = document.querySelector('ul'); 
const numberOfStudents = list.children;
//I made a variable hold the number 10 to later display 10 students
const studentsAnyNumber = 10;
//Selects student-search class 
const selectSearchBox = document.querySelector('.student-search');
//I create a (ul) element
const buttonDiv = document.createElement('ul');
let page = document.body.querySelector('.page'); //select page class in variable
// create a d​ iv​, give it the “pagination” class, and append it to the .page div // add a   to the “pagination” div
const pageDiv = document.createElement('div');
pageDiv.className = 'pagination';
page.appendChild(pageDiv)
// add a ul to the “pagination” div
unorderedL = document.createElement('ul');
pageDiv.append(unorderedL);

const buttonUl = document.querySelector('.pagination ul');
const zeroResults = document.querySelector('.zero-result');

// this function displays the amount of pages based on how many students there are in total
const totalNumberOfPages = () => {
    let pageNumbers = Math.ceil(numberOfStudents.length / studentsAnyNumber);
    return pageNumbers;
}


//This functions makes it so that 10 students are displayed when the page loads for the first time
const tenStudents = () => {
    for (let i = 0; i < numberOfStudents.length; i++) {
        if (i < studentsAnyNumber) {
           numberOfStudents[i].style.display= '';     
        } else {
            numberOfStudents[i].style.display= 'none';  
        }
        
    }
}


//This functions displays the box to search for students
let searchBox = document.createElement('input');
let button = document.createElement('button');
const showSearchBox = () => {
    searchBox.placeholder = 'Search for students...';
    button.textContent = 'Search';
    selectSearchBox.appendChild(searchBox);
    selectSearchBox.appendChild(button);
}  


//this (for) loop divides students pages
for (let i = 1; i <= totalNumberOfPages(); i++) {
  let li = document.createElement('li');
  let a = document.createElement('a');
    a.className = 'active';
    a.href = '#';
    a.textContent = i;
    buttonUl.appendChild(li);
    li.appendChild(a);
}
//Add interactivity to navigational buttons
buttonUl.addEventListener('click',(event) => {
    zeroResults.innerHTML = '';
    let buttonsNumber = parseInt(event.target.textContent);
    let maximum = buttonsNumber * 10;
    let minimum = maximum - 10;
    for (let i = 0; i < numberOfStudents.length; i++) {
       if (i >= minimum && i < maximum) {
           numberOfStudents[i].style.display = '';
       }    else {
           numberOfStudents[i].style.display = 'none';
       }     
        
    }
});

//Shows 10 students when the browser loads
totalNumberOfPages();

//This function displays the search box
showSearchBox();

//This function displays 10 students when the page loads for the first time
tenStudents();
