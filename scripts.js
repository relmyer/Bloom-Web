// Adding new items to the To-Do list
document.getElementById('add-item').addEventListener('click', function() {
    const newItem = document.getElementById('new-item').value;
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        document.getElementById('todo-items').appendChild(li);
        document.getElementById('new-item').value = '';  // Clear the input
    }
});

// Starting a video call (this is a placeholder for actual functionality)
document.getElementById('start-call').addEventListener('click', function() {
    alert('Call started! This feature will be activated later.');
});
