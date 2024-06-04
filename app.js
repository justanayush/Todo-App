const input = document.querySelector('#input-text');
const btn = document.querySelector('.add-btn');
const todos = document.querySelector('.todos')

btn.addEventListener('click', () => {
    if (input.value === ''){
        alert('Please enter a task.')
    }
    else{
        let li = document.createElement('li');
        let val = input.value;
        li.innerHTML = val
        console.log(val)
        todos.appendChild(li)
    }
})