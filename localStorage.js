
// Loading once DOM is Loaded
window.addEventListener('DOMContentLoaded', event => {
    // Set variables for form, list, button, and input
    const form = document.querySelector('form');
    const noteList = document.querySelector('ul');
    const clearButton = document.querySelector('button');
    const inputBox = document.getElementById('item');

    // Programmatic list item function
    const listMaker = userText => {
        // creating new list item
        const li = document.createElement('li');

        // setting the list item text to user's input
        li.textContent = userText;

        // adding list item to ul element
        noteList.appendChild('li');
    }
    
})
