// Опекуны поля для отображеня информации
let trusteeLastName = document.getElementById("trusteeLastName");
let trusteeFirstName = document.getElementById("trusteeFirstName");
let trusteePatronymic = document.getElementById("trusteePatronymic");
let trusteeBirthday = document.getElementById("trusteeBirthday");
let trusteeRelations = document.getElementById("trusteeRelations");

let trusteeHomeNumber = document.getElementById("trusteeHomeNumber");
let trusteeMobileNumber = document.getElementById("trusteeMobileNumber");
let trusteeWorkNumber = document.getElementById("trusteeWorkNumber");
let trusteeEmail = document.getElementById("trusteeEmail");

let trusteeDistrict = document.getElementById("trusteeDistrict");
let trusteeVillageCouncil = document.getElementById("trusteeVillageCouncil");
let trusteeLocality = document.getElementById("trusteeLocality");
let trusteeAddress = document.getElementById("trusteeAddress");
let trusteeIndex = document.getElementById("trusteeIndex");

let trusteeWork = document.getElementById("trusteeWork");
let trusteePosition = document.getElementById("trusteePosition");
let trusteeCurrentEmployment = document.getElementById("trusteeCurrentEmployment");

let trusteeNotes = document.getElementById("trusteeNotes");

// Опекуны текстовые поля
let trusteeLastNameInput = document.getElementById("trusteeLastNameInput");
let trusteeFirstNameInput = document.getElementById("trusteeFirstNameInput");
let trusteePatronymicInput = document.getElementById("trusteePatronymicInput");
let trusteeBirthdayInput = document.getElementById("trusteeBirthdayInput");
let trusteeRelationsInput = document.getElementById("trusteeRelationsInput");

let trusteeHomeNumberInput = document.getElementById("trusteeHomeNumberInput");
let trusteeMobileNumberInput = document.getElementById("trusteeMobileNumberInput");
let trusteeWorkNumberInput = document.getElementById("trusteeWorkNumberInput");
let trusteeEmailInput = document.getElementById("trusteeEmailInput");

let trusteeDistrictInput = document.getElementById("trusteeDistrictInput");
let trusteeVillageCouncilInput = document.getElementById("trusteeVillageCouncilInput");
let trusteeLocalityInput = document.getElementById("trusteeLocalityInput");
let trusteeAddressInput = document.getElementById("trusteeAddressInput");
let trusteeIndexInput = document.getElementById("trusteeIndexInput");

let trusteeWorkInput = document.getElementById("trusteeWorkInput");
let trusteePositionInput = document.getElementById("trusteePositionInput");
let trusteeCurrentEmploymentInput = document.getElementById("trusteeCurrentEmploymentInput");

let trusteeNotesInput = document.getElementById("trusteeNotes");


// Дети поля для отображеня информации
let childrenLastName = document.getElementById("childrenLastName");
let childrenFirstName = document.getElementById("childrenFirstName");
let childrenPatronymic = document.getElementById("childrenPatronymic");
let childrenBirthday = document.getElementById("childrenBirthday");

let childrenSchool = document.getElementById("childrenSchool");
let childrenClassNumber = document.getElementById("childrenClassNumber");
let childrenPlaceOfStudy = document.getElementById("childrenPlaceOfStudy");

let childrenHomeNumber = document.getElementById("childrenHomeNumber");
let childrenMobileNumber = document.getElementById("childrenMobileNumber");

let childrenVillageCouncil = document.getElementById("childrenVillageCouncil");
let childrenLocality = document.getElementById("childrenLocality");
let childrenAddress = document.getElementById("childrenAddress");



let childrenNotes = document.getElementById("childrenNotes");

// Дети текстовые поля
let childrenLastNameInput = document.getElementById("childrenLastNameInput");
let childrenFirstNameInput = document.getElementById("childrenFirstNameInput");
let childrenPatronymicInput = document.getElementById("childrenPatronymicInput");
let childrenBirthdayInput = document.getElementById("childrenBirthdayInput");

let childrenSchoolInput = document.getElementById("childrenSchoolInput");
let childrenClassNumberInput = document.getElementById("childrenClassNumberInput");
let childrenPlaceOfStudyInput = document.getElementById("childrenPlaceOfStudyInput");

let childrenHomeNumberInput = document.getElementById("childrenHomeNumberInput");
let childrenMobileNumberInput = document.getElementById("childrenMobileNumberInput");

let childrenVillageCouncilInput = document.getElementById("childrenVillageCouncilInput");
let childrenLocalityInput = document.getElementById("childrenLocalityInput");
let childrenAddressInput = document.getElementById("childrenAddressInput");

let childrenchildrenNormInput = document.getElementById("schildrenNormInput");

let childrenNotesInput = document.getElementById("childrenNotesInput");


let childrenTrusteeList = document.getElementById("childrenTrusteeList");
let newTrusteeButton = document.getElementById("newTrusteeButton");


function showTrusteeInfo(trustees, index) {
    trusteeLastName.innerHTML = trustees[index].getLastName();
    trusteeFirstName.innerHTML = trustees[index].getFirstName();
    trusteePatronymic.innerHTML = trustees[index].getPatronymic();
    trusteeBirthday.innerHTML = trustees[index].getBirthday();
    trusteeRelations.innerHTML = trustees[index].getRelations();
    trusteeHomeNumber.innerHTML = trustees[index].getHomeNumber();
    trusteeMobileNumber.innerHTML = trustees[index].getMobileNumber();
    trusteeWorkNumber.innerHTML = trustees[index].getWorkNumber();
    trusteeEmail.innerHTML = trustees[index].getEmail();
    trusteeDistrict.innerHTML = trustees[index].getDistrict();
    trusteeVillageCouncil.innerHTML = trustees[index].getVillageCouncil();
    trusteeLocality.innerHTML = trustees[index].getLocality();
    trusteeAddress.innerHTML = trustees[index].getAddress();
    trusteeIndex.innerHTML = trustees[index].getIndex();
    trusteeWork.innerHTML = trustees[index].getWork();
    trusteePosition.innerHTML = trustees[index].getPosition();
    trusteeCurrentEmployment.innerHTML = trustees[index].getCurrentEmployment();
    trusteeNotes.innerHTML = trustees[index].getNotes();
}

function showTrusteeInputs() {
    trusteeLastNameInput.classList.toggle("displaynone");
    trusteeFirstNameInput.classList.toggle("displaynone");
    trusteePatronymicInput.classList.toggle("displaynone");
    trusteeBirthdayInput.classList.toggle("displaynone");
    trusteeRelationsInput.classList.toggle("displaynone");

    trusteeHomeNumberInput.classList.toggle("displaynone");
    trusteeMobileNumberInput.classList.toggle("displaynone");
    trusteeWorkNumberInput.classList.toggle("displaynone");
    trusteeEmailInput.classList.toggle("displaynone");

    trusteeDistrictInput.classList.toggle("displaynone");
    trusteeVillageCouncilInput.classList.toggle("displaynone");
    trusteeLocalityInput.classList.toggle("displaynone");
    trusteeAddressInput.classList.toggle("displaynone");
    trusteeIndexInput.classList.toggle("displaynone");

    trusteeWorkInput.classList.toggle("displaynone");
    trusteePositionInput.classList.toggle("displaynone");
    trusteeCurrentEmploymentInput.classList.toggle("displaynone");

    trusteeNotesInput.classList.toggle("displaynone");
}

function newButton(className) {
    let Button = document.createElement("div");
    Button.classList = "button " + className;
    return Button;
}

function showChildrenInfo(childrens, index,trustees) {
    childrenLastName.innerHTML = childrens[index].getLastName();
    childrenFirstName.innerHTML = childrens[index].getFirstName();
    childrenPatronymic.innerHTML = childrens[index].getPatronymic();
    childrenBirthday.innerHTML = childrens[index].getBirthday();

    childrenSchool.innerHTML = childrens[index].getSchool();
    childrenClassNumber.innerHTML = childrens[index].getClassNumber();
    childrenPlaceOfStudy.innerHTML = childrens[index].getPlaceOfStudy();

    childrenHomeNumber.innerHTML = childrens[index].getHomeNumber();
    childrenMobileNumber.innerHTML = childrens[index].getMobileNumber();

    childrenVillageCouncil.innerHTML = childrens[index].getVillageCouncil();
    childrenLocality.innerHTML = childrens[index].getLocality();
    childrenAddress.innerHTML = childrens[index].getAddress();
    childrenNorm.innerHTML = childrens[index].getNorm();



    childrenNotes.innerHTML = childrens[index].getNotes();

    let childrensTrustees = childrens[index].getTrustees();


    if (childrenTrusteeList.children.length > 0) {
        for (let i = childrenTrusteeList.children.length - 1; i >= 0; i--) {
            childrenTrusteeList.removeChild(childrenTrusteeList.children[i]);
        }
    }
    for (let i = 0; i < childrensTrustees.length; i++) {
        let childrenTrusteItem = document.createElement("div");
        childrenTrusteItem.classList = "trustee_list_item";
        childrenTrusteItem.setAttribute("data-index", new Trustee().get);

        let childrenItemText = document.createElement("span");
        childrenItemText.innerHTML = trustees[i].getStatus();
        childrenTrusteItem.appendChild(childrenItemText);

        childrenTrusteItem.appendChild(newButton("change"));
        childrenTrusteItem.appendChild(newButton("delete"));

        childrenTrusteItem.addEventListener("click", function () {
            showTrusteeInfo(trustees, childrenTrusteItem.getAttribute("data-index"));
        });

        childrenTrusteeList.appendChild(childrenTrusteItem);

    }
}

function clearChildrenList() {
    if (childrenList.children.length > 0) {
        for (let i = childrenList.children.length - 1; i >= 0; i--) {
            childrenList.removeChild(childrenList.children[i]);
        }
    }
}

function showChildrenInputs() {
    childrenLastNameInput.classList.toggle("displaynone");
    childrenFirstNameInput.classList.toggle("displaynone");
    childrenPatronymicInput.classList.toggle("displaynone");
    childrenBirthdayInput.classList.toggle("displaynone");

    childrenSchoolInput.classList.toggle("displaynone");
    childrenClassNumberInput.classList.toggle("displaynone");
    childrenPlaceOfStudyInput.classList.toggle("displaynone");

    childrenHomeNumberInput.classList.toggle("displaynone");
    childrenMobileNumberInput.classList.toggle("displaynone");

    childrenVillageCouncilInput.classList.toggle("displaynone");
    childrenLocalityInput.classList.toggle("displaynone");
    childrenAddressInput.classList.toggle("displaynone");
    childrenNormInput.classList.toggle("displaynone");
    childrenNotesInput.classList.toggle("displaynone");


    childrenLastName.classList.toggle("displaynone");
    childrenFirstName.classList.toggle("displaynone");
    childrenPatronymic.classList.toggle("displaynone");
    childrenBirthday.classList.toggle("displaynone");

    childrenSchool.classList.toggle("displaynone");
    childrenClassNumber.classList.toggle("displaynone");
    childrenPlaceOfStudy.classList.toggle("displaynone");

    childrenHomeNumber.classList.toggle("displaynone");
    childrenMobileNumber.classList.toggle("displaynone");

    childrenVillageCouncil.classList.toggle("displaynone");
    childrenLocality.classList.toggle("displaynone");
    childrenAddress.classList.toggle("displaynone");

    childrenNotes.classList.toggle("displaynone");

    newTrusteeButton.classList.toggle("displaynone");
}