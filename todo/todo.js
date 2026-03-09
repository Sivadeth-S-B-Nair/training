const input=document.getElementById("input");
const tbody=document.getElementById("tbody");


let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

function addTask(){
    const task={name:input.value,isCompleted:false};
    if(task.name==""){
        return
    }
    tasks=[...tasks,task];
    localStorage.setItem("tasks",JSON.stringify(tasks))
    console.log(tasks);
    input.value="";
    tasksTableView();
}
function tasksTableView(){
    tbody.innerHTML="";
    tasks.forEach((task,index) => {
        const row=document.createElement("tr");
        const col1=document.createElement("td");
        const col2=document.createElement("td");
        const col3=document.createElement("td");
        const btngrp=document.createElement("div")
        btngrp.setAttribute("class","btn-grp")
        const delbtn=document.createElement("button");
        delbtn.setAttribute("class","del-btn")
        const completebtn=document.createElement("button");
        if(task.isCompleted){
            completebtn.innerHTML="Completed";
            completebtn.setAttribute("class","completed");
        }
        else{
            completebtn.innerHTML="Mark Completed";
            completebtn.setAttribute("class","not-completed");
        }
        col1.innerHTML=index+1;
        col2.innerHTML=task.name;
        delbtn.innerHTML="Delete";
        btngrp.appendChild(delbtn);
        btngrp.appendChild(completebtn);
        col3.appendChild(btngrp);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        tbody.appendChild(row);

        delbtn.addEventListener("click",function(){
            tasks=tasks.filter((t,i)=>{
                return i!==index;
            })
            localStorage.setItem("tasks",JSON.stringify(tasks))
            tasksTableView();
        })

        completebtn.addEventListener("click",function(){
            if(task.isCompleted){
                task.isCompleted=false
            }
            else{
                task.isCompleted=true
            }
            localStorage.setItem("tasks",JSON.stringify(tasks));
            tasksTableView();
        });
        
    });
}

tasksTableView();




