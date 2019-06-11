let childrens = ["Макаров Илай", "Дюжев Виталий", "Манкин Светослав"];

var childrenList = document.getElementById("childrenList");




for (let i = 0; i < childrens.length; i++) {
    var childrenItem = document.createElement("div");
    childrenItem.classList = "children_list_item";

    var childrenItemText = document.createElement("span");
    childrenItemText.innerHTML = childrens[i];
    childrenItem.appendChild(childrenItemText);

    var changeButton = document.createElement("div");
    changeButton.classList = "button change";
    childrenItem.appendChild(changeButton);

    var toListButton = document.createElement("div");
    toListButton.classList = "button to_list";
    childrenItem.appendChild(toListButton);

    var deleteButton = document.createElement("div");
    deleteButton.classList = "button delete";
    childrenItem.appendChild(deleteButton);

    childrenList.appendChild(childrenItem);
};