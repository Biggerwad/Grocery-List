

const h2 = document.querySelector('h2');
const inputField = document.querySelector("#input-field");
const myButton = document.querySelector('#btn')

const ul = document.querySelector("#items-to-shop");
const li = document.querySelectorAll('li');
const deleteBtn = document.getElementsByClassName('btn');

// Implementing the delete button

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function (event) {
        event.target.parentNode.remove();
    })
}

// Giving the condition for input to be parsed and implementing the enter keypress

inputField.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 && inputField.value.length > 0) {
        
        const newDiv = document.createElement('div');
        const newListItem = document.createElement('li');
        const newButtonTag = document.createElement('button')
        const breakTag = document.createElement('br')

        const delValue = newButtonTag.innerHTML = "X"
        newButtonTag.setAttribute('class', 'btn')

        const newListContent = document.createTextNode(inputField.value);


        ul.append(newDiv);
        newDiv.append(newListItem);
        newListItem.append(newListContent);
        newListItem.append(newButtonTag)

        inputField.value = '';

        newButtonTag.addEventListener('click', (event) => {
            event.target.parentNode.remove()
        })
    }
})

// Implementing the add button
myButton.addEventListener('click', function () {
    if (inputField.value.length > 0) {

        const newDiv = document.createElement('div');
        const newListItem = document.createElement('li');
        const newButtonTag = document.createElement('button')
        const breakTag = document.createElement('br')

        const delValue = newButtonTag.innerHTML = "X"
        newButtonTag.setAttribute('class', 'btn')

        const newListContent = document.createTextNode(inputField.value);


        ul.append(newDiv);
        newDiv.append(newListItem);
        newListItem.append(newListContent);
        newListItem.append(newButtonTag)

        inputField.value = '';

        newButtonTag.addEventListener('click', (event) => {
            event.target.parentNode.remove()
        })
    }
})