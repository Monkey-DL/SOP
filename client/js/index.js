let childrens = [];

for(var i=0;i<5;i++){
    childrens.push(new Children());    
}

var childrenList = document.getElementById("childrenList");

function newButton(item, className){
    var Button = document.createElement("div");
    Button.classList = "button "+ className;
    return Button;
}

for (let i = 0; i < childrens.length; i++) {
    var childrenItem = document.createElement("div");
    childrenItem.classList = "children_list_item";

    var childrenItemText = document.createElement("span");
    childrenItemText.innerHTML = childrens[i].getFullName();
    childrenItem.appendChild(childrenItemText);
    
    childrenItem.appendChild(newButton(childrenItem,"change"));
    childrenItem.appendChild(newButton(childrenItem,"to_list"));
    childrenItem.appendChild(newButton(childrenItem,"delete"));
    
    childrenList.appendChild(childrenItem);
};