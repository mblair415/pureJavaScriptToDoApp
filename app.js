let testList = [];

function addItem(){
  const counter = testList.length + 1;

  if (document.getElementById("singleToDoItem").value != ""){
    const item = document.getElementById("singleToDoItem").value;
    const text = document.createTextNode(item);
    const newItem = document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("toDoList").appendChild(newItem);
    document.getElementById("singleToDoItem").value = "";

    if (counter % 3 == 0) {
      newItem.className = "redText";
    }

    testList.push([counter, item]);
  }
}

document.getElementById('singleToDoItem').onkeypress = e => {
  if (!e) {
    e = window.event;
  }
  const keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    addItem();
    return false;
  }
}
