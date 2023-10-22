function loadCSS(filename) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filename;
    document.head.appendChild(link);
}

// Load the CSS file
loadCSS('style.css');

// Add your existing code for the task list
function addTask() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value.trim();
    var taskList = document.getElementById('task-list');

    if (taskText !== '') {
        var newTask = document.createElement('li');

        // Create a checkbox input
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                newTask.style.textDecoration = 'line-through';
            } else {
                newTask.style.textDecoration = 'none';
            }
        });

        // Create a label for the task text
        var label = document.createElement('label');
        label.textContent = taskText;

        newTask.appendChild(checkbox);
        newTask.appendChild(label);
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}