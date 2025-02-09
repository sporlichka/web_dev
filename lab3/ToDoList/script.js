const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write a task");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <label>
          <input type="checkbox" class="task-checkbox">
          <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = ""; // очищает поле ввода

    const checkbox = li.querySelector(".task-checkbox");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("span");
    const deleteBtn = li.querySelector(".delete-btn");

    // Обработчик чекбокса
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    // Обработчик редактирования
    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null && update.trim() !== "") {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
        }
    });

    // Обработчик удаления
    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
        }
    });
}
