const input = document.querySelector('#input-text');
const btn = document.querySelector('.add-btn');
const todos = document.querySelector('.todos')

input.addEventListener('keypress', (e)=>{
    console.log(e.key)
    if (e.key === 'Enter'){
        task();
        input.value = "";
    }
});

function task(){
    let li = document.createElement('li');
            let p = document.createElement('p');
            let img1 = document.createElement('img');
            img1.setAttribute('src','images/1.jpg');
            img1.setAttribute('class', 'unchecked');
            p.appendChild(img1);
            let img2 = document.createElement('img');
            img2.setAttribute('src','images/cross.png');
            img2.setAttribute('class', 'delete');
            let span = document.createElement('span');
            let val = input.value;
            span.innerHTML = val;
            p.appendChild(span);
            p.appendChild(img2);
            li.appendChild(p);
            todos.appendChild(li);
            saveData();
}
function addTask(){
    btn.addEventListener('click', (e) => {
        if (input.value === ''){
            alert('Please enter a task.')
        }
        else{
            task();
            }
        input.value = ""
    })

}
todos.addEventListener('click',(e)=>{
    function toggleClass(){
        if(e.target.parentElement.querySelector('.unchecked').getAttribute('src') === "images/1.jpg"){
            e.target.parentElement.querySelector('.unchecked').setAttribute('src', 'images/2.jpg')
        }else{
            e.target.parentElement.querySelector('.unchecked').setAttribute('src', 'images/1.jpg')
        }
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.classList.toggle('task-complete');
        toggleClass();
       
    }
    if(e.target.tagName === "IMG" && e.target.classList.contains('unchecked')){
        e.target.parentElement.querySelector('span').classList.toggle('task-complete');
        toggleClass();
    }
    if(e.target.tagName === "IMG" && e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        saveData();
    }
})
addTask();

function saveData(){
    localStorage.setItem('data', todos.innerHTML);
}
function showData(){
    todos.innerHTML = localStorage.getItem('data');
}
showData();