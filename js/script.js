//Define UI Element
let form = document.querySelector("#task_form");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task");

//Define Event Listeners
form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);
filter.addEventListener("keyup", filterTask);

//Define functions
//Add Task
function addTask(e){
  if(taskInput.value === ''){
    alert("Add a task!");
  }
  else{
    //Create li Element
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput.value + " "));
    let link = document.createElement("a");
    link.setAttribute('href', '#');
    link.innerHTML = "x";
    li.appendChild(link);
    taskList.appendChild(li);

    taskInput.value = '';
  }
  e.preventDefault();
}

//Remove Task
function removeTask(e){
  if(e.target.hasAttribute("href")){
    if(confirm("Are you sure?")){
      let element = e.target.parentElement;
      element.remove();
    }
  }
}

//Clear Task
function clearTask(e){
  // taskList.innerHTML = "";

  //Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

//Filter Task
function filterTask(e){
  let text  = e.target.value.toLowerCase();

  document.querySelectorAll("li").forEach(task => {
    let item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!= -1){
      task.style.display = 'block';
    }
    else{
      task.style.display = "none";
    }
  })

}

