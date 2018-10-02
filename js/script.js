/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// variables for project
const list = document.querySelector('ul');
const numberOfStudents = list.children;
const studentsAnyNumber = 10;
const selectSearchBox = document.querySelector('.student-search');
const buttonDiv = document.createElement('ul');
// create a d​ iv​, give it the “pagination” class, and append it to the .page div // add a   to the “pagination” div
const pageDiv = document.createElement('div');
pageDiv.className = 'pagination';
pageDiv.append('.page');
// add a ul to the “pagination” div
unorderedL = document.createElement('ul');
pageDiv.append(unorderedL);

const buttonUl = buttonDiv.querySelector('.pagination ul');
const zeroResults = document.querySelector('.zero-result');

// this function displays the amount of pages based on how many students there are in total
const totalNumberOfPages = () => {
    let pageNumbers = Math.floor(numberOfStudents.length /studentsAnyNumber);
    return pageNumbers;
}

//This functions makes it so that 10 students are displayed
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
for (let i = 1; i <= totalNumberOfPages.length; i++) {
  let li = document.createElement('li');
  let pageLinks = document.createElement('a');
    li.className = 'active';
    pageLinks.href = '#';
    pageLinks.textContent = i;
    buttonUl.appendChild(li);
    li.appendChild(pageLinks);
}

buttonDiv.addEventListener('click',(event) => {
    zeroResults.innerHTML = '';
    let buttonsNumber = parseInt(event.target.textContent);
    let maximum = buttonsNumber * 10;
    let minimum = max - 10;
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
