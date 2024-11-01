const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Function to handle adding a new task
function addTask() {
  const taskName = taskInput.value.trim();

  if (taskName) {
    const listItem = document.createElement("li");
    listItem.className = "task-item";

    // Create a checkbox for marking task completion
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.addEventListener("change", toggleTaskCompletion);

    // Create a span to hold the task text
    const taskText = document.createElement("span");
    taskText.textContent = taskName;
    taskText.className = "task-text";

    // Create a "Remove" button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    // Append checkbox, task text, and remove button to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear input field after adding the task
    taskInput.value = "";
  } else {
    alert("Please enter a task name.");
  }
}

// Function to toggle task completion
function toggleTaskCompletion(event) {
  const taskItem = event.target.nextElementSibling; // The task text span
  if (event.target.checked) {
    taskItem.classList.add("task-completed");
  } else {
    taskItem.classList.remove("task-completed");
  }
}

addTaskButton.addEventListener("click", addTask);