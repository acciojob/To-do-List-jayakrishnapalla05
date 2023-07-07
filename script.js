//your code here
const newTodo=document.getElementById("newTodoInput");
const addTodo=document.getElementById("addTodoBtn");
const todoList=document.getElementById("todoList");


addTodo.addEventListener('click', call);
function call(){
	if(newTodo.value!=="")
	{
	  const li=document.createElement("li");
		li.innerText=newTodo.value;
		todoList.appendChild(li);
		newTodo.value="";
	}
}
