let childrens = [];
let trustees = [];




for (let i = 0; i < 2; i++) {
    childrens.push(new Children());
};

let childrenList = document.getElementById("childrenList");


// Добавление ребёнка
var targetChildren;
let newChildrenToggle = true;
let targetChildrenButton = document.getElementById("newChildrenButton");
targetChildrenButton.addEventListener("click", function () {
    targetChildrenButton.classList.toggle("button_Toggle");
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
// Поля ввода данных ребёнка
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


// Добавление опекуна

let targetTrustee;
let newTrusteeToggle = true;
let targetTrusteeButton = document.getElementById("newTrusteeButton");
targetTrusteeButton.addEventListener("click", function () {
    targetTrusteeButton.classList.toggle("button_Toggle");
    if (newTrusteeToggle) {
        showTrusteeInputs();
        targetTrustee = new Trustee(trustees);
        newTrusteeToggle = !newTrusteeToggle;
    } else {
        targetChildren.addTrustee(targetTrustee.getId());
        trustees.push(targetTrustee);
        showTrusteeInputs();
        newTrusteeToggle = !newTrusteeToggle;
    }
});


trusteeStatusInput.addEventListener("input", function () {
    targetTrustee.setStatus(trusteeStatusInput.value)
});
trusteeLastNameInput.addEventListener("input", function () {
    targetTrustee.setLastName(trusteeLastNameInput.value);
});
trusteeFirstNameInput.addEventListener("input", function () {
    targetTrustee.setFirstName(trusteeFirstNameInput.value);
});
trusteePatronymicInput.addEventListener("input", function () {
    targetTrustee.setPatronymic(trusteePatronymicInput.value);
});
trusteeBirthdayInput.addEventListener("input", function () {
    targetTrustee.setBirthday(trusteeBirthdayInput.value);
});
trusteeRelationsInput.addEventListener("input", function () {
    targetTrustee.setRelations(trusteeRelationsInput.value);
});
trusteeHomeNumberInput.addEventListener("input", function () {
    targetTrustee.setHomeNumber(trusteeHomeNumberInput.value);
});
trusteeMobileNumberInput.addEventListener("input", function () {
    targetTrustee.setMobileNumber(trusteeMobileNumberInput.value);
});
trusteeWorkNumberInput.addEventListener("input", function () {
    targetTrustee.setWorkNumber(trusteeWorkNumberInput.value);
});
trusteeEmailInput.addEventListener("input", function () {
    targetTrustee.setEmail(trusteeEmailInput.value);
});
trusteeDistrictInput.addEventListener("input", function () {
    targetTrustee.setDistrict(trusteeDistrictInput.value);
});
trusteeVillageCouncilInput.addEventListener("input", function () {
    targetTrustee.setVillageCouncil(trusteeVillageCouncilInput.value);
});
trusteeLocalityInput.addEventListener("input", function () {
    targetTrustee.setLocality(trusteeLocalityInput.value);
});
trusteeAddressInput.addEventListener("input", function () {
    targetTrustee.setAddress(trusteeAddressInput.value);
});
trusteeIndexInput.addEventListener("input", function () {
    targetTrustee.setIndex(trusteeIndexInput.value);
});
trusteeWorkInput.addEventListener("input", function () {
    targetTrustee.setWork(trusteeWorkInput.value);
});
trusteePositionInput.addEventListener("input", function () {
    targetTrustee.setPosition(trusteePositionInput.value);
});
trusteeCurrentEmploymentInput.addEventListener("input", function () {
    targetTrustee.setCurrentEmployment(trusteeCurrentEmploymentInput.value);
});
trusteeNotesInput.addEventListener("input", function () {
    targetTrustee.setNotes(trusteeNotesInput.value);
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

        let changeButton = newButton("change");

        changeButton.addEventListener("click", function () {

            renderChildrenList();
            event.stopPropagation();

        });

        childrenItem.appendChild(newButton("to_list"));
        childrenItem.appendChild(changeButton);
        childrenItem.appendChild(deleteButton);

        childrenItem.addEventListener("click", function () {
            targetChildren=childrenItem.getAttribute("data-index");
            
            showChildrenInfo(childrens, targetChildren, trustees)
            clearTrusteeInfo();
        });

        childrenList.appendChild(childrenItem);
    }
};

renderChildrenList();