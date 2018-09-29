/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const list = document.querySelectorAll('.student-item');
let pagesNumber;
let allStudents;
let pageDiv;

let unorderedL;
let lI;
let a;


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
    /* determine how many pages are needed for the list by dividing the total number
of list items by the max number of items per page*/
    pagesNumber = Math.floor(list.length/10);
    allStudents = list.length;

// create a d​iv​, give it the “pagination” class, and append it to the .page div
      
    pageDiv = document.createElement('div');
    pageDiv.className = 'pagination';
    pageDiv.appendTo('.page');
    pageDiv.append(ul);
    
    
    
    
    unorderedL = document.createElement('ul');
    lI = document.createElement('li');
    a = document.createElement('a');
}

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






