/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

console.log(data);
// select the element with a class of `student-list` and assign it to a variable
const studentList = document.querySelector(".student-list");
console.log(studentList);
const list = studentList.children;
const itemsPerPage = 9;


const page = document.querySelector('.page');

// select the element with a class of `link-list` and assign it to a variable
 
const linkList = document.querySelector(".link-list");
/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
/* This function is responsible for rendering the student cards to the page. 
Depending on which page is requested by the user the corresponding students from a given 
array will be shown on the page.*/


function showPage(list, page) {
   // create two variables that will represent the index for the first and last student on the page
  const startIndex = (page  * itemsPerPage) - itemsPerPage;
  const endIndex = page* itemsPerPage;
  // set the innerHTML property of the variable you just created to an empty string
  studentList.innerHTML = "";
   
   
   
   
   // loop over the length of the `list` parameter
   for(let i =0; i<list.length;i++){
     // inside the loop create a conditional to display the proper students
      if(i >= startIndex && i < endIndex){
        // inside the conditional:
         // create the elements needed to display the student information
         
        const html = `<li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src=${list[i].picture. thumbnail}>
          <h3>${list[i].name.title}. ${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined: ${list[i].registered.date}<br> ${list[i].registered.age} years ago</span>
        </div>
      </li>`;
      // insert the above elements
      studentList.insertAdjacentHTML("beforeend", html);
      }
      
       
         
   }
}; 
 







   



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   
 // create a variable to calculate the number of pages needed
const numOfPages = Math.ceil(list.length / itemsPerPage);
   // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = "";
   // loop over the number of pages needed
    for(let i =1; i<=numOfPages; i++){
  // creates the elements needed to display the pagination button
      const nuHtml = `<li>
      <button type="button">${i}</button>
      </li>`;
  // insert the above elements
      linkList.insertAdjacentHTML("beforeend", nuHtml);
      
   };
     
   // give the first pagination button a class of "active"
   if (linkList.querySelector("button")) {
    
     linkList.querySelector("button").classList.add("active");
   }
   
   
 
   // create an event listener on the `link-list` element
   linkList.addEventListener("click", (e) => {
    const activeButton = linkList.querySelector(".active");
    const buttonClicked = e.target.closest("button");

  // if the click target is a button:

      

      if(buttonClicked){
        // remove the "active" class from the previous button
      activeButton.classList.remove("active");
      // add the active class to the clicked button
        buttonClicked.classList.add("active");
        // call the showPage function passing the `list` parameter and page to display as arguments
        showPage(list, buttonClicked.innerHTML);
      }


   }
   
   );
     
       
       
       
 };


// Call functions

showPage(data,1);
  addPagination(data);
