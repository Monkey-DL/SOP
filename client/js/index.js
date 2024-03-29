let childrens = [];
let trustees = [];

let childrenList = document.getElementById("childrenList");

let httpRequest = new XMLHttpRequest();
httpRequest.overrideMimeType('application/json');


window.addEventListener('load', function () {
    httpRequest.open('POST', '/getData', true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.onreadystatechange = function () {};
    httpRequest.addEventListener('load', function () {
        let ResponseJSON = JSON.parse(httpRequest.response);
        childrens = [];
        ResponseJSON[0].forEach(element => {
            childrens.push(new Children(childrens));
            childrens[childrens.length - 1].copyChildrenJSON(element);
        });
        renderChildrenList(childrens);

        trustees = [];
        ResponseJSON[1].forEach(element => {
            trustees.push(new Trustee(trustees));
            trustees[trustees.length - 1].copyTrusteeJSON(element);
        });
        console.log(childrens);
    });
    httpRequest.send();


});

// Добавление ребёнка
let targetChildrenIndex;
let targetChildren;

let newChildrenToggle = false;
let targetChildrenButton = document.getElementById("newChildrenButton");
targetChildrenButton.addEventListener("click", function () {
    targetChildrenButton.classList.toggle("displaynone");
    confirmChangesChildrenButton.classList.toggle("displaynone");
    clearTrusteeInfo();
    targetChildren = new Children(childrens);
    showChildrenInputs();
    newChildrenToggle = !newChildrenToggle;
});

confirmChildrenButton.addEventListener("click", function () {
    let childrensJSON = JSON.stringify(targetChildren);
    let newTrusteeJSON;
    if (newChildrenToggle) {
        showChildrenInfo(targetChildren, trustees);
        // showChildrenInputs();
        newChildrenToggle = !newChildrenToggle;

        httpRequest.onreadystatechange = function () {};
        httpRequest.open('POST', '/addChildren', true);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.addEventListener('load', function () {
            renderChildrenList(childrens);

            targetChildren = undefined;
        });

        newTrusteeJSON = JSON.stringify(newTrustees);
        httpRequest.send('children=' + childrensJSON + '&newTrustees=' + newTrusteeJSON);

        newTrustees = [];
        targetChildren = undefined;
    } else {
        childrens.forEach(children => {
            if (children.getId() == targetChildrenIndex) {
                children.copyChildren(targetChildren);
            }
        });

        httpRequest.onreadystatechange = function () {};
        httpRequest.open('POST', '/changeChildren', true);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.addEventListener('load', function () {

            showChildrenInfo(targetChildren, trustees);
            renderTrusteeList(targetChildren.getTrustees(), targetChildren.getId(), trustees);
        });
        httpRequest.send('children=' + childrensJSON);

        // showChildrenInputs();

        // hiddenAll();
    }
    confirmChangesChildrenButton.classList.toggle("displaynone");
    targetChildrenButton.classList.toggle("displaynone");
    clearChildrenInputs();
    hiddenAll();
});

canselChildrenButton.addEventListener("click", function () {
    if (newChildrenToggle) {
        newChildrenToggle = !newChildrenToggle;
    }
    clearChildrenInputs();
    // showChildrenInputs();
    hiddenAll();
    confirmChangesChildrenButton.classList.toggle("displaynone");
    targetChildrenButton.classList.toggle("displaynone");
    renderChildrenList(childrens);
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

childrenFilterInput.addEventListener("input", function () {
    if (childrenFilterInput.value == "") {
        renderChildrenList(childrens);
    } else {
        renderChildrenList(childrens.filter(children => !children.getLastName().indexOf(childrenFilterInput.value) > 0));
    }
});

// Добавление опекуна
let targetTrustee;
let targetTrusteeIndex;
let newTrusteeToggle = false;
let newTrustees = [];
let changetrustees = [];

let targetTrusteeButton = document.getElementById("newTrusteeButton");
targetTrusteeButton.addEventListener("click", function () {
    targetTrusteeButton.classList.toggle("displaynone");
    confirmChangesTrusteeButton.classList.toggle("displaynone");
    showTrusteeInputs();
    targetTrustee = new Trustee(trustees);
    newTrusteeToggle = !newTrusteeToggle;
});

// Подтверждение изменений в опекуне
confirmTrusteeButton.addEventListener("click", function () {
    if (newTrusteeToggle) {
        targetChildren.addTrustee(targetTrustee.getId());
        trustees.push(targetTrustee);
        newTrustees.push(targetTrustee);
        showTrusteeInputs();
        newTrusteeToggle = !newTrusteeToggle;
        renderTrusteeList(targetChildren.getTrustees(), targetChildren.getId(), trustees);
        clearTrusteeInputs();
    } else {
        trustees.forEach(trustee => {
            if (trustee.getId() == targetTrusteeIndex) {
                trustee.copyTrustee(targetTrustee);
            }
        });
        clearTrusteeInputs();
        showTrusteeInputs();
        showTrusteeInfo(trustees, targetTrusteeIndex);

        renderTrusteeList(targetChildren.getTrustees(), targetChildren.getId(), trustees);
    }
    confirmChangesTrusteeButton.classList.toggle("displaynone");
    newTrusteeButton.classList.toggle("displaynone");
});

canselTrusteeButton.addEventListener("click", function () {
    if (newTrusteeToggle) {
        newTrusteeToggle = !newTrusteeToggle;
    }
    clearTrusteeInputs();
    showTrusteeInputs();
    showTrusteeInfo(trustees, targetTrusteeIndex);
    confirmChangesTrusteeButton.classList.toggle("displaynone");
    newTrusteeButton.classList.toggle("displaynone");
    renderTrusteeList(targetChildren.getTrustees(), targetChildren.getId(), trustees);
});

// Поля ввода данных опекуна
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

//список опекунов
function renderTrusteeList(childrenTrustees, index, trustees) {
    clearTrusteeList();
    for (let i = 0; i < childrenTrustees.length; i++) {
        let childrenTrusteItem = document.createElement("div");
        childrenTrusteItem.classList = "trustee_list_item";
        childrenTrusteItem.setAttribute("data-index", childrenTrustees[i]);
        childrenTrusteItem.setAttribute("data-children-index", index);

        let childrenItemText = document.createElement("span");
        childrenItemText.innerHTML = trustees[childrenTrustees[i]].getStatus();
        childrenTrusteItem.appendChild(childrenItemText);

        let changeButton = newButton("change");
        changeButton.addEventListener("click", function () {
            confirmChangesTrusteeButton.classList.toggle("displaynone");
            showTrusteeInputs();
            newTrusteeButton.classList.toggle("displaynone")
            targetTrusteeIndex = changeButton.parentNode.getAttribute("data-index");
            trustees.forEach(trustee => {
                if (trustee.getId() == targetTrusteeIndex) {
                    fillTrusteeInputs(trustees, targetTrusteeIndex);
                    targetTrustee = new Trustee(trustees);
                    targetTrustee.copyTrustee(trustee);
                }
            });
            event.stopPropagation();
        });

        //Закончить удаление опекунов из массива
        let deleteButton = newButton("delete");
        deleteButton.addEventListener("click", function () {
            for (let j = 0; j < childrenTrustees.length; j++) {
                if (childrenTrustees[j] == this.parentNode.getAttribute("data-index")) {
                    childrenTrustees.splice(j, 1);
                    break;
                }
            }
            // for (let i = 0; i < trustees.length; i++) {
            //     if (trustees[i].getId()==this.parentNode.getAttribute("date-index")){

            //     }
            // }
            this.parentNode.parentNode.removeChild(this.parentNode);
            event.stopPropagation();
        });
        childrenTrusteItem.appendChild(changeButton);
        childrenTrusteItem.appendChild(deleteButton);

        childrenTrusteItem.addEventListener("click", function () {
            showTrusteeInfo(trustees, childrenTrusteItem.getAttribute("data-index"));
        });

        childrenTrusteeList.appendChild(childrenTrusteItem);

    }
}

// Список детей
function renderChildrenList(childrens) {
    clearChildrenList();
    for (let i = 0; i < childrens.length; i++) {
        let childrenItem = document.createElement("div");
        childrenItem.classList = "children_list_item";
        childrenItem.setAttribute("data-index", childrens[i].getId());

        let childrenItemText = document.createElement("span");
        childrenItemText.innerHTML = childrens[i].getFullName();
        childrenItem.appendChild(childrenItemText);

        let deleteButton = newButton("delete");

        deleteButton.addEventListener("click", function () {

            let deleteItemIndex = deleteButton.parentElement.getAttribute("data-index");
            for (children in childrens) {
                if (childrens[children].getId() == deleteItemIndex) {
                    childrens.splice(children, 1);
                }
            }

            httpRequest.onreadystatechange = function () {};
            httpRequest.open('POST', '/deleteChildren', true);
            httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            httpRequest.addEventListener('load', function () {
                renderChildrenList(childrens);
                clearChildrenInfo();
                clearTrusteeInfo();
            });
            httpRequest.send('deleteId=' + deleteItemIndex);


            event.stopPropagation();
        });

        let changeButton = newButton("change");

        changeButton.addEventListener("click", function () {
            targetChildrenButton.classList.toggle("displaynone");
            confirmChangesChildrenButton.classList.toggle("displaynone");
            targetChildrenIndex = childrenItem.getAttribute("data-index");
            childrens.forEach(children => {
                if (children.getId() == targetChildrenIndex) {
                    targetChildren = new Children(childrens);
                    targetChildren.copyChildren(children);
                }
            });
            showChildrenInputs();
            fillChildrenInputs(targetChildren, trustees);
            event.stopPropagation();

        });

        // childrenItem.appendChild(newButton("to_list"));
        childrenItem.appendChild(changeButton);
        childrenItem.appendChild(deleteButton);

        childrenItem.addEventListener("click", function () {
            targetChildrenIndex = childrenItem.getAttribute("data-index");
            childrens.forEach(children => {
                if (children.getId() == targetChildrenIndex) {
                    targetChildren = children;
                }
            });
            showChildrenInfo(targetChildren, trustees)
        });

        childrenList.appendChild(childrenItem);
    }
};



renderChildrenList(childrens);