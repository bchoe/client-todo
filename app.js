console.log('test');

//what i type in
let input = document.getElementById('inputBox');

//to-do list container
let listDiv = document.getElementById('toDoList');

//add something to the to-do list function

function addFunc(){

  //to-do list is added in here
  let newItem = document.createElement('div');
  // adds new value to innerHTML
  newItem.innerHTML = input.value;
  //adds created newItem to list
  listDiv.appendChild(newItem);

  console.log(listDiv);
  console.log(newItem);
}