const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');


// const listItems = document.querySelectorAll('li');


listUl.addEventListener('click', (evt) => {
    if(evt.target.tagName.toLowerCase() == 'button' ){
        // evt.target.textContent = evt.target.textContent.toUpperCase();
        if (evt.target.className == 'remove') {
            let li  = evt.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li); 
        }
    }
    
});

// listDiv.addEventListener('mouseout', (evt) => {
//     if( evt.target.tagName.toLowerCase() == 'li'){
//         evt.target.textContent = evt.target.textContent.toLowerCase();
//     }
// });

// document.addEventListener('click', (evt) => {
//     console.log(evt.target.tagName);
// })

// listItems.forEach(element => {
//     console.log(element);
//     element.addEventListener('mouseover', () => {
//         element.textContent = element.textContent.toUpperCase();
//     });

//     element.addEventListener('mouseout', () => {
//         element.textContent = element.textContent.toLowerCase();
//     });
// });


toggleList.addEventListener('click', () => {
    if (listDiv.style.display === 'none'){
        listDiv.style.display = 'block';
        toggleList.textContent = 'Hide list'
    }
    else {
        listDiv.style.display = 'none';
        toggleList.textContent = 'Show list'
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
})

// removeItemButton.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     let li = document.querySelector('li:last-child');
//     ul.removeChild(li);
// })





// const myHeading = document.getElementsByTagName("h1")[0];
// const myHeading = document.getElementById("myHeading");
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');
// const myList = document.getElementsByTagName('li')
// for (let i = 0; i < myList.length; i += 1){
//     myList[i].style.color = 'purple'
// }

// const errorNotPurple = document.querySelectorAll('.error-not-purple')
// for (let i = 0; i < errorNotPurple.length; i += 1){
//     errorNotPurple[i].style.color = 'red'
// }

// const evens = document.querySelectorAll('li:nth-child(even')
// for (let i = 0; i < evens.length; i += 1){
//     evens[i].style.backgroundColor = 'lightgray'
// }

// myButton.addEventListener('click', () => {
//     myHeading.style.color = myTextInput.value;
// })