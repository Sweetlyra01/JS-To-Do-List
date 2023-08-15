// inputs
let taskToDo = document.querySelector("#taskToDo");
let date = document.querySelector("#date");
let time = document.querySelector("#time");

//buttons
let addTaskBtn = document.querySelector("#addTaskBtn")
//display
let displayTask = document.querySelector("#displayTask")


let tasks = JSON.parse(localStorage.getItem("entries"));

let toDoList = ""


if (tasks == null) {
    toDoList = `<p id="warning">No task added.<p>`
} else {
    tasks.forEach((x) => {
        toDoList += `<p> ${x.taskToDoVal} ${x.dateVal} ${x.timeVal}<p>`
    })
}

displayTask.innerHTML = toDoList;
let addTask = () => {
    if (tasks == null) {
        tasks = [];
    }
    let task = {
        taskToDoVal: taskToDo.value,
        dateVal: date.value,
        timeVal: time.value
     }

    tasks.push(task);
    console.log(tasks);

     //JSON.stringyfy converts objects into string
    localStorage.setItem("entries", JSON.stringify(tasks));

    if (tasks.length == 1) {
        let warning = document.querySelector("#warning");
        warning.style.display = "none";
    }
    //display newly added names
     let item = document.createElement("p");

     item.innerHTML=`${task.taskToDoVal} ${task.dateVal} ${task.timeVal}`;
    
     displayTask.appendChild(item);    
    }
    //events
    addTaskBtn.addEventListener("click", addTask)

    
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "<span>delete</span>";
    delBtn.classList = "del-btn";
    delBtn.addEventListener("click", delItem);

    function delItem() {
        let delText = "Are you sure, though?";
        
        if (confirm(delText) === true) {
            delBtn.parentElement.parentElement.remove();
        } else {
            delText= "Noice!";
            alert(delText);
        }
        if (todoItemsContainer.childElementCount === 1) {
            document.querySelector("#emptySoul").style.display = 'block';
        } else if (todoItemsContainer.childElementCount < 6) {
            addItemBtn.removeAttribute("disabled", "");
            addItemBtn.removeAttribute("style", "color: gray");
            document.querySelector("#limitReached").style.display = 'none';
        }
}