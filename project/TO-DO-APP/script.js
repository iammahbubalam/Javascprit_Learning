/*
 * Title: To Do List js file
 * Description: This file has all the styles associated with the To Do App project
 * Author: Mahbub alam
 * Date: 04/19/2021
 *
 */

// select elements & assign them to variables
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

// functions
let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem2 = createTask(newTask.value);
  todoUl.appendChild(listItem2);
  newTask.value = "";
  // bind the new list item to the incomplete list
  bindInCompleteItems(listItem2, completeTask);
};

let completeTask = function () {
  let listItem3 = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem3.appendChild(deleteBtn);

  let checkBox = listItem3.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem3);
  bindCompleteItems(listItem3, deleteTask);
};

let deleteTask = function () {
  let listItem4 = this.parentNode;
  let ul = listItem4.parentNode;
  ul.removeChild(listItem4);
};

let bindInCompleteItems = function (taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

let bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonClick;
};

for (let i = 0; i < todoUl.children.length; i++) {
  bindInCompleteItems(todoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
