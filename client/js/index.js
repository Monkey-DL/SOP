let childrens = [];
let trustees = [];

// for (let i = 0; i < 10; i++) {
//     trustees.push(new Trustee());
// };


// for (let i = 0; i < 2; i++) {
//     childrens.push(new Children());
//     for (let j = 0; j < 2; j++) {
//         childrens[i].addTruste(i);
//     };
// };

let childrenList = document.getElementById("childrenList");

let newChildren;
let newChildrenToggle = true;
let newChildrenButton = document.getElementById("newChildrenButton");
newChildrenButton.addEventListener("click", function () {
    if (newChildrenToggle) {
        newChildren = new Children();
        showChildrenInputs();
        newChildrenToggle = !newChildrenToggle;
    } else {
        childrens.push(newChildren);
        showChildrenInputs();
        renderChildrenList();
        newChildrenToggle = !newChildrenToggle;
    }

});
// function newChildren(){};

childrenLastNameInput.addEventListener("input", function () {
    newChildren.setLastName(childrenLastNameInput.value)
});
childrenFirstNameInput.addEventListener("input", function () {
    newChildren.setFirstName(childrenFirstNameInput.value)
});
childrenPatronymicInput.addEventListener("input", function () {
    newChildren.setPatronymic(childrenPatronymicInput.value)
});
childrenBirthdayInput.addEventListener("input", function () {
    newChildren.setBirthday(childrenBirthdayInput.value)
});
childrenSchoolInput.addEventListener("input", function () {
    newChildren.setSchool(childrenSchoolInput.value)
});
childrenClassNumberInput.addEventListener("input", function () {
    newChildren.setClassNumber(childrenClassNumberInput.value)
});
childrenPlaceOfStudyInput.addEventListener("input", function () {
    newChildren.setPlaceOfStudy(childrenPlaceOfStudyInput.value)
});
childrenHomeNumberInput.addEventListener("input", function () {
    newChildren.setHomeNumber(childrenHomeNumberInput.value)
});
childrenMobileNumberInput.addEventListener("input", function () {
    newChildren.setMobileNumber(childrenMobileNumberInput.value)
});
childrenVillageCouncilInput.addEventListener("input", function () {
    newChildren.setVillageCouncil(childrenVillageCouncilInput.value)
});
childrenLocalityInput.addEventListener("input", function () {
    newChildren.setLocality(childrenLocalityInput.value)
});
childrenAddressInput.addEventListener("input", function () {
    newChildren.setAddress(childrenAddressInput.value)
});
childrenNotesInput.addEventListener("input", function () {
    newChildren.setNotes(childrenNotesInput.value)
});
childrenNormInput.addEventListener("input", function () {
    newChildren.setNorm(childrenNormInput.value)
});

// Список детей
function renderChildrenList() {
    clearChildrenList();
    for (let i = 0; i < childrens.length; i++) {
        let childrenItem = document.createElement("div");
        childrenItem.classList = "children_list_item";
        childrenItem.setAttribute("data-index", i);

        let childrenItemText = document.createElement("span");
        childrenItemText.innerHTML = childrens[i].getFullName();
        childrenItem.appendChild(childrenItemText);

        let deleteButton = newButton("delete");

        deleteButton.addEventListener("click", function () {
            let deleteItemIndex = deleteButton.parentElement.getAttribute("data-index");
            childrens.splice(deleteItemIndex, 1);
            renderChildrenList();
            event.stopPropagation();

        });

        childrenItem.appendChild(newButton("change"));
        childrenItem.appendChild(newButton("to_list"));
        childrenItem.appendChild(deleteButton);


        childrenItem.addEventListener("click", function () {
            showChildrenInfo(childrens, childrenItem.getAttribute("data-index"));
        });

        childrenList.appendChild(childrenItem);
    }
};

renderChildrenList();