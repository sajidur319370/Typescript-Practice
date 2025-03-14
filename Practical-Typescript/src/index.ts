const taskForm = document.querySelector<HTMLFormElement>(".form")!;
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskList = document.querySelector<HTMLDListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

// Load Task from storage function
const tasks: Task[] = loadTask();

tasks.forEach(renderTask);

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDiscription = formInput?.value;
  if (taskDiscription) {
    const task: Task = {
      // collect description from  formInput
      description: taskDiscription,
      isCompleted: false,
    };
    // add task in Tasks List by function
    addTask(task);
    // Render Tasks in screen
    renderTask(task);
    // Update in local storage
    updateStorage();
    formInput.value = "";
    return;
  }
  alert("Please enter a task discription!!");
}

taskForm?.addEventListener("submit", createTask);

function addTask(task: Task) {
  tasks.push(task);
  console.log(tasks);
  return;
}
function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
  // check box
  const checkBox = document.createElement("input");
  checkBox.type = "checkBox";
  checkBox.checked = task.isCompleted;
  taskElement.appendChild(checkBox);
  checkBox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskList?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTask(): Task[] {
  const storedTask = localStorage.getItem("tasks");
  return storedTask ? JSON.parse(storedTask) : [];
}
