function addTask() {

    const input = document.getElementById('inputTask');
    const taskText = input.value.trim();

    // Prevent empty task
    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create list item
    const newTask = document.createElement('li');

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');

    // Toggle complete
    taskSpan.onclick = function(){
        taskSpan.classList.toggle('completed');
    };

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');

    // Delete task
    deleteBtn.onclick = function(){
        newTask.remove();
    };

    // Append elements
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteBtn);

    taskList.appendChild(newTask);

    // Clear input
    input.value = "";
}

// Add task using Enter key
document
.getElementById('inputTask')
.addEventListener('keypress', function(event){

    if(event.key === 'Enter'){
        addTask();
    }

});
