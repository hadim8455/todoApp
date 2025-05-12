


function submitBtn(){

    var userLogin = JSON.parse(localStorage.getItem("userLogin"))
    console.log(userLogin.email) 
    
    var todoInput = document.getElementById("todoInput")
    console.log(todoInput.value)

    var todoObject = {
        todo: todoInput.value,
        email: userLogin.email
    }
    // console.log(todoObject)
    
    var todoData = localStorage.getItem("todoData");
    console.log(todoData)
    
    
    if(todoData == null){
        var Arr = [todoObject]
        // console.log(todoArr)
        localStorage.setItem("todoData", JSON.stringify(Arr));
        
    }
    else{
        var todoArr = JSON.parse(localStorage.getItem("todoData"));
        todoArr.push(todoObject);
        // localStorage.setItem(JSON.stringify("todoData", newArr))
        localStorage.setItem("todoData", JSON.stringify(todoArr))
    }
    
    todoInput.value = ""

    renderUI()
    
}

function renderUI(){
    // var getLoginnUser = JSON.parse(localStorage.getItem("userLogin"))
    var gettodoData = JSON.parse(localStorage.getItem("todoData"))
    
    var parent = document.getElementById("listContainer")
    parent.innerHTML = ""

    for(var i = 0; i < gettodoData.length; i++){
        console.log(gettodoData[i].todo)
        parent.innerHTML += `<div class="list">
                            <h1>${gettodoData[i].todo}</h1>
                            <div>
                            <button onclick="editBtn(${i})">Edit</button>
                            <button onclick="deleteBtn(${i})">Delete</button>
                            </div>
                            </div>`
    }
    
}
function deleteBtn(){
    var deleteBtn = localStorage.removeItem("todoData")
    renderUI()
}

function editBtn(indexNumber){
    var editArr = JSON.parse(localStorage.getItem("todoData"))
    var object = editArr[indexNumber]
    // console.log("func call",object.todo)
    var editPrompt = prompt("Enter Update Value...", object.todo)
    console.log("newValue", editPrompt)

    var updateObject = {
        todo: editPrompt,
        email: object.email
    }
    console.log(updateObject)

    editArr[indexNumber] = updateObject
    console.log(editArr)

    localStorage.setItem("todoData",JSON.stringify(editArr))
    renderUI()

    
}
function deleteBtn(indexNumber){
    console.log(indexNumber)
    var deleteArr = JSON.parse(localStorage.getItem("todoData"))
    deleteArr.splice(indexNumber, 1)
    console.log(deleteArr)
    localStorage.setItem("todoData", JSON.stringify(deleteArr))
    renderUI()
}












