let childrens = [];
let trustees = [];

for (let i = 0; i < 10; i++) {
    trustees.push(new Trustee(trustees));
    console.log(trustees[i]);
    
};


for (let i = 0; i < 2; i++) {
    childrens.push(new Children());
    for (let j = 0; j < 2; j++) {
        childrens[i].addTruste(i);
    };
};

let childrenList = document.getElementById("childrenList");

let targetChildren;
let newChildrenToggle = true;
let targetChildrenButton = document.getElementById("newChildrenButton");
targetChildrenButton.addEventListener("click", function () {
    if (newChildrenToggle) {
        targetChildren = new Children();
        showChildrenInputs();
        newChildrenToggle = !newChildrenToggle;
    } else {
        childrens.push(targetChildren);
        showChildrenInputs();
        renderChildrenList();
        newChildrenToggle = !newChildrenToggle;
    }
});

childrenLastNameInput.addEventListener("input", function () {
    targetChildren.setLastName(childrenLastNameInput.value)
});
childrenFirstNameInput.addEventListener("input", function () {
    targetChildren.setFirstName(childrenFirstNameInput.value)
});
childrenPatronymicInput.addEventListener("input", function () {
    targetChildren.setPatronymic(childrenPatronymicInput.value)
});
childrenBirthdayInput.addEventListener("input", function () {
    targetChildren.setBirthday(childrenBirthdayInput.value)
});
childrenSchoolInput.addEventListener("input", function () {
    targetChildren.setSchool(childrenSchoolInput.value)
});
childrenClassNumberInput.addEventListener("input", function () {
    targetChildren.setClassNumber(childrenClassNumberInput.value)
});
childrenPlaceOfStudyInput.addEventListener("input", function () {
    targetChildren.setPlaceOfStudy(childrenPlaceOfStudyInput.value)
});
childrenHomeNumberInput.addEventListener("input", function () {
    targetChildren.setHomeNumber(childrenHomeNumberInput.value)
});
childrenMobileNumberInput.addEventListener("input", function () {
    targetChildren.setMobileNumber(childrenMobileNumberInput.value)
});
childrenVillageCouncilInput.addEventListener("input", function () {
    targetChildren.setVillageCouncil(childrenVillageCouncilInput.value)
});
childrenLocalityInput.addEventListener("input", function () {
    targetChildren.setLocality(childrenLocalityInput.value)
});
childrenAddressInput.addEventListener("input", function () {
    targetChildren.setAddress(childrenAddressInput.value)
});
childrenNotesInput.addEventListener("input", function () {
    targetChildren.setNotes(childrenNotesInput.value)
});
childrenNormInput.addEventListener("input", function () {
    targetChildren.setNorm(childrenNormInput.value)
});

let targetTrustee;
let newTrusteeToggle=true;
let targetTrusteeButton = document.getElementById("newTrusteeButton");
targetTrusteeButton.addEventListener("click", function () {
    if (newTrusteeToggle) {
        showTrusteeInputs();
        targetTrustee=new Trustee(trustees);
        newTrusteeToggle = !newTrusteeToggle;
    } else {
        targetChildren.trustees.addTruste(targetTrustee.getId());
        showTrusteeInputs();
        newTrusteeToggle = !newTrusteeToggle;
    }
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

        let changeButton=newButton("change");

        changeButton.addEventListener("click", function () {
            
            renderChildrenList();
            event.stopPropagation();

        });

        childrenItem.appendChild(newButton("to_list"));
        childrenItem.appendChild(deleteButton);
        childrenItem.appendChild(changeButton);


        childrenItem.addEventListener("click", function () {
            showChildrenInfo(childrens, childrenItem.getAttribute("data-index"));
        });

        childrenList.appendChild(childrenItem);
    }
};

renderChildrenList();