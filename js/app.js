let submit = document.querySelector("#taskSubmit");

submit.addEventListener("click", () => {
    addTask()
});

const addTask = () => {
    const taskListInput = document.querySelector("#taskListInput").value;
    const abc = document.querySelector("#mainUl");
    const taskInput = document.querySelector("#taskListInputDIV");
    taskInput.innerHTML = `<input type="text" name="task" id="taskListInput" placeholder="Enter Task">
    `
    let convertedTaskListInput = `<li class="mainLi">${taskListInput}</li>`
    abc.innerHTML = abc.innerHTML+ convertedTaskListInput;

    addLi();
}

const addLi = () => {
    let takeOldUlInnerHtml = document.getElementById("#mainUl");
console.log(takeOldUlInnerHtml);
}

let reset  =  document.querySelector("#reset");

reset.addEventListener("click",()=>{
    window.location.href = "https://harshraithatha58.gihub.io/todo/"
})