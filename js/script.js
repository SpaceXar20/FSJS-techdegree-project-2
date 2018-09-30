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
let li; 
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
    // add a ul to the “pagination” div
    unorderedL = document.createElement('ul');
    pageDiv.append(ul);
    
    
    // f​or​ every page
// add l​i​ and ​a​ tags with the page number text
    for (let i = 0; i < pagesNumber.length; i++) {
        
    li = document.createElement('li');
    a = document.createElement('a');
    
    /*
    add an event listener to each a​ ​ tag, or add an event listener to the pagination div,
and use event delegation to target the a tags to define what happens they are clicked
    */
    document.querySelector('pageDiv').addEventListener('click')

     // calls the showPage function to display the appropriate page
        ShowPage();

     // loop over pagination links to remove active class from all
      for (let i= 0; i < pagesNumber.length; i++) {
        const listItems = document.createElement('li');
        ul.appendChild(listItems);
        const a = document.createElement('a');
        a.textContent = i + 1;
        list.appendChild(a);
        
        if  (a.textContent=== i) {
            let pageButtons = document.createElement('button');
            let pageLinks = pageButtons * pagesNumber;
            $(ul).append(pageLinks); 
        }
     
     /* add the active class to the link that was just clicked, otherwise known as the
event.target*/
          
      }  
    }
    
}
appendPageLinks(list);
// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






