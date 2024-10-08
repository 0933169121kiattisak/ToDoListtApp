const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputBtn = document.getElementById("inputBtn");

const addTask = () => {
    if(inputBox.value === ''){
        alert('Please Add Your Task!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
};
const handleTaskAction = (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}

const saveData = () => {
    localStorage.setItem("data",listContainer.innerHTML)
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

listContainer.addEventListener('click', handleTaskAction,false)
inputBtn.addEventListener('click',addTask)
