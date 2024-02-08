let AddTodoBtn = document.querySelector("#add-todo")
let saveBtn = document.querySelector("#saveBtn")
let deleteBtn=document.querySelector('#delete')
let popup = document.querySelector(".main")

let title = document.querySelector("#input1")
let description = document.querySelector("#input2")
let priority=document.querySelector('#priority')




AddTodoBtn.addEventListener("click",()=>{
    popup.classList.remove('d-none');
})
saveBtn.addEventListener("click",()=>{
    let addList={
        title:title.value,
        description:description.value,
        
    }
    console.log(title,description,)
    console.log(addList)


    let todolist = localStorage.getItem('lists');
    
    todolist = todolist===null? []:JSON.parse(todolist);

    todolist.unshift(addList);

    localStorage.setItem('lists',JSON.stringify(todolist));
})
saveBtn.addEventListener("click",()=>{
    popup.classList.add('d-none');
})

deleteBtn.addEventListener("click",()=>{
    popup.classList.add('d-none');
})




function printData(){
    let lists = localStorage.getItem('lists');
    let todolist = document.querySelector("#todo-List");
    lists = JSON.parse(lists);
    
    let list = lists.map((value) => {
        return `
            <section class="items">
                <div>
                    <p class="heading">${value.title}</p>
                    <p>${value.description}</p>
                    <span class="Priority"></span>
                    <i class="fa-solid fa-trash-can" id="icon"></i>
                </div>
                <div><hr>
            </section>
        `;
    });
    todolist.innerHTML = list.join("");
    removePriority();
}
printData();

function removePriority(){
    let removeList = document.querySelectorAll("#icon");
    removeList.forEach((removebutton) =>{
        removebutton.addEventListener("click",()=>{
            let id = removebutton.dataset.id
            console.log(id);
            let lists = JSON.parse(localStorage.getItem("lists"));
            lists = lists.filter((value) =>{
                return value.id != id;
            });
            localStorage.setItem("lists",JSON.stringify(lists));
            printData();
        })
        
    });
};




// lists = JSON.parse(lists);
// let list = lists.map((value) => {
//   return `
//   <section class="container-box"  id="todo-List">
//   <section class="items">
//       <div>
//           <p class="heading">${value.title}</p>
//           <p>${value.description}</p>
//           <span class="Priority">${value.priority}</span>
//           <i class="fa-solid fa-trash-can" id="icon"></i>
//       </div>
//       <div><hr>
//   </section>
// </section>
//     `;
// });