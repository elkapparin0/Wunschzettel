const wunsch = []

const btnAdd = document.getElementById("btnAdd");
const inputNewTask = document.getElementById("inputNewTask");
const currentTasks = document.getElementById("currentTasks");
let i = 0;

function addwish(){
    const newwish = inputNewTask.value;
    inputNewTask.value = ""

    


    const tasks = document.createElement("div");
        tasks.id = `task${i}`;
        tasks.innerHTML = newTask;

        
        const check = document.createElement("input")
        check.type="checkbox"
        check.id = "check${i}";
        check.name = newTask;
        check.value = newTask;
    

        currentTasks.appendChild(tasks);
        currentTasks.appendChild(check);
        i++;
        
}

btnAdd.addEventListener("click", () => {
    addTask();
})