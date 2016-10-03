console.log('test');

//what i type in
let input = document.getElementById('inputBox');

//to-do list container
let list = document.getElementById('toDoList');

//add something to the to-do list function

function addFunc(){

  //to-do list is added in here
  let newItem = document.createElement('div');
  // adds new value to innerHTML
  newItem.innerHTML = input.value;
  //adds created newItem to list
  list.appendChild(newItem);

  console.log(list);
  console.log(newItem);
}

//list active items in to-do list that are not completed

function activeFunc(){

}

// show everything, Active and completed lists.

function allFunc(){

}

//show completed things

function completedFunc(){

}