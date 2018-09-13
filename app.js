let testList = [];

function addItem(){
  if (document.getElementById("singleToDoItem").value != ""){
    const item = document.getElementById("singleToDoItem").value;
    const text = document.createTextNode(item);
    const newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("toDoList").appendChild(newItem);
    document.getElementById("singleToDoItem").value = "";

    testList.push([testList.length + 1, item]);
  }
}
