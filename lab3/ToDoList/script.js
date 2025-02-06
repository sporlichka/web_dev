function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function () {
        li.classList.toggle("done");
    };

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
