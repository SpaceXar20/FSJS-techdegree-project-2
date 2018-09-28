/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const list = document.querySelectorAll('.student-item');
let pagesNumber;
let allStudents;
let htmlDiv;
let selection;
let unorderedL;

// Create a function to hide all of the items in the list except for the ten you want to show
// Tip: Keep in mind that with a list of 54 students, the last page will only display four
const  ShowPage = (list,page) => {
    for (let i = 0; i < list.length; i++) {
     if (i  >= (page * 10) - 10 && i < (page * 10)) {
        list[i].style.display = 'block';
    } else {
        list[i].style.display = 'none';
        }
    }
};    



// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = (list) => {
    // I dont understand this instruction: (if pagination already exists, remove it), Am I right to assume that it has to do with node.removeChild();????
    pagesNumber = Math.floor(list.length/10);
    allStudents = list.length;
    ////I am unsure if I did some of these steps right:  create a d​iv​, give it the “pagination” class, and append it to the .page div // add a ul  to the “pagination” div
// f​or​ every page
    selection = document.querySelector('.page');
    htmlDiv = document.createElement('div');
    htmlDiv.className = 'pagination';
    selection.appendChild('htmlDiv');
    

    for (let i = 0; i < pagesNumber.length; i++) {
        unorderedL = document.createElement('ul');
    }



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






