const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskName = taskInput.value.trim();

  if (taskName) {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.addEventListener("change", toggleTaskCompletion);

    const taskText = document.createElement("span");
    taskText.textContent = taskName;
    taskText.className = "task-text";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
  } else {
    alert("Please enter a task name.");
  }
}

function toggleTaskCompletion(event) {
  const taskItem = event.target.nextElementSibling; 
  if (event.target.checked) {
    taskItem.classList.add("task-completed");
  } else {
    taskItem.classList.remove("task-completed");
  }
}

addTaskButton.addEventListener("click", addTask);
