const taskInput = document.getElementById('taskinput')
const description = document.getElementById('descinput')
const createbutton = document.getElementById('tasksubmit')
const tododiv = document.getElementById("tododiv")
const donediv = document.getElementById("donediv")
let i = 0
let id;
class input{
    constructor(taskname,taskdescription = null){
        this.taskname = taskname
        this.taskdesecription = taskdescription
    }
    add(){
        let divcr = document.createElement('div')
        let h2cr = document.createElement('h2')
        let pcr = document.createElement('p')
        divcr.appendChild(h2cr)
        divcr.appendChild(pcr)
        tododiv.appendChild(divcr)
        divcr.id = i
        i += 1
        divcr.style.backgroundColor = "lightskyblue"
        divcr.style.height = "7em"
        h2cr.innerHTML = "Task Name: " + this.taskname
        pcr.innerHTML ="Description: " + "<br>" +  this.taskdesecription
        pcr.style.textAlign ="left"
        pcr.style.fontWeight ="bolder"
        divcr.addEventListener("dblclick",function(){
            divcr.remove()
        })
        divcr.addEventListener("dragstart", function(event){
            event.dataTransfer.setData("text", event.target.id);
        })
        divcr.setAttribute("draggable",true)
       
        divcr.addEventListener('dragover',function(ev){
            ev.preventDefault();
        })
        divcr.addEventListener("drop",function(ev){
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
            
        })

    }
}

donediv.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text", event.target.id);
})


function allowDrop(ev) {
    ev.preventDefault();
}



function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



createbutton.addEventListener('click',create)

function create() {
    if(taskInput.value == ""){
        alert('Please insert a task name')
        taskInput.style.backgroundColor = "red";
        return 
    }

    if(taskInput.value != ""){
       
        let a = new input(taskInput.value, description.value)
        taskInput.value = ""
        description.value = ""
        a.add()
        return;
    }


}




