const taskInput = document.querySelector("#task");
const btnInput = document.querySelector("#btn");
const list = document.querySelector(".list");
const listItem = document.querySelectorAll(".listitem");
// const listItem = document.querySelectorAll(".onComplete");
console.log(listItem);

btnInput.addEventListener("click", (e) => {
  // console.log(taskInput.value);
  if (taskInput.value === "") {
    alert("Add Content");
  } else {
    //main div to add children
    let mainDiv = document.createElement("div");
    mainDiv.className = "listitem";
    //content in inout
    let contentDiv = document.createElement("div");
    contentDiv.innerText = taskInput.value;
    // contentDiv.className = "listitem";
    contentDiv.id = "false";
    //delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "deleteBtn";
    //checker
    let check = document.createElement("span");
    check.style.backgroundColor = "white";
    check.innerHTML = "\u00d7";
    check.className = "doneBtn";

    // check.type = "checkbox";
    // check.checked = false;
    // check.id = contentDiv.innerHTML
    // check.id = "radio";
    // check.name = "radio";
    check.addEventListener("click", function (e) {
      check.style.backgroundColor = "orange";
      check.nextSibling.style.textDecoration = "line-through";
    });
    let slash = false;

    // contentDiv.appendChild(deleteBtn);

    mainDiv.appendChild(check);
    mainDiv.appendChild(contentDiv);
    mainDiv.appendChild(deleteBtn);
    list.appendChild(mainDiv);
    taskInput.value = "";

    saveData();

    // deleteBtn.addEventListener("click", function (mainDivms) {
    //   console.log(deleteBtn.parentElement.parentElement);
    //   let pare = deleteBtn.parentElement.parentElement;
    //   let mainDiv = deleteBtn.parentElement;
    //   pare.removeChild(mainDiv);
    // });

    // mainDiv.addEventListener("dblclick", function () {
    //   console.log("called dblckick mainDiv");
    //   if (slash == false) {
    //     slash = !slash;
    //     mainDiv.style.textDecoration = "line-through";
    //     mainDiv.style.color = "white";
    //   } else {
    //     slash = !slash;
    //     mainDiv.style.textDecoration = "none";
    //     mainDiv.style.color = "#22223B";
    //   }
    // });
  }
  // console.log(list.children, "list");
});

list.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.className == "deleteBtn") {
    let deleNode = e.target.parentElement;
    deleNode.remove();
    console.log(list);
  }
  saveData();
  e.preventDefault();
});
// console.log(listItem, "listItem");
// listItem.forEach((each) => {
//   console.log(each);
// });
list.addEventListener("click", function (e) {
  if (e.target.className == "listitem") {
    if ((e.target.id = "false")) {
      e.target.id = "true";
      e.target.style.textDecoration = "line-through";
      e.target.style.color = "white";
    } else if ((e.target.id = "true")) {
      e.target.id = "false";
      mainDiv.style.textDecoration = "none";
      mainDiv.style.color = "#22223B";
    }
  }
  saveData();
});

function saveData() {
  console.log(list.innerHTML);
  localStorage.setItem("data", list.innerHTML);
}

function showTasks() {
  list.innerHTML = localStorage.getItem("data");
}

showTasks();
