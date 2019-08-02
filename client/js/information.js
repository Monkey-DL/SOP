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

let newTrusteeButton = document.getElementById("newTrusteeButton");
let confirmChangesTrusteeButton = document.getElementById("confirmChangesTrustee");
let confirmTrusteeButton = document.getElementById("confirmTrustee");
let canselTrusteeButton = document.getElementById("canselTrustee");

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



let childrenRecognitionDate = document.getElementById("childrenRecognitionDate");
let childrenReviewDate = document.getElementById("childrenReviewDate");
let childrenTermControl = document.getElementById("childrenTermControl");
let childernListOfDates = document.getElementById("listOfDates");
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

let sopDate = document.getElementById("sopDate");
let sopSchool = document.getElementById("sopSchool");
let sopDateInput = document.getElementById("sopDateInput");
let sopSchoolInput = document.getElementById("sopSchoolInput");
let childrenNormInput = document.getElementById("childrenNormInput");

let newDateButton = document.getElementById("newDateButton");
let confirmChangesDatesButton = document.getElementById("confirmChangesDatesButton");
let confirmDateButton = document.getElementById("confirmDate");
let canselDateButton = document.getElementById("canselDate");



let childrenNotesInput = document.getElementById("childrenNotesInput");


let childrenTrusteeList = document.getElementById("childrenTrusteeList");

let confirmChangesChildrenButton = document.getElementById("confirmChangesChildren");
let confirmChildrenButton = document.getElementById("confirmChildren");
let canselChildrenButton = document.getElementById("canselChildren");

let childrenRecognitionDateButton = document.getElementById("childrenRecognitionDateButton");
let childrenReviewDateButton = document.getElementById("childrenReviewDateButton");
let childrenTermControlButton = document.getElementById("childrenTermControlButton");

function newButton(className) {
    let Button = document.createElement("div");
    Button.classList = "button " + className;
    return Button;
}

function showTrusteeInfo(trustees, index) {
    trustees.forEach(trustee => {
        if (trustee.getId() == index) {
            trusteeStatus.innerHTML = trustee.getStatus();
            trusteeLastName.innerHTML = trustee.getLastName();
            trusteeFirstName.innerHTML = trustee.getFirstName();
            trusteePatronymic.innerHTML = trustee.getPatronymic();
            trusteeBirthday.innerHTML = trustee.getBirthday();
            trusteeRelations.innerHTML = trustee.getRelations();
            trusteeHomeNumber.innerHTML = trustee.getHomeNumber();
            trusteeMobileNumber.innerHTML = trustee.getMobileNumber();
            trusteeWorkNumber.innerHTML = trustee.getWorkNumber();
            trusteeEmail.innerHTML = trustee.getEmail();
            trusteeDistrict.innerHTML = trustee.getDistrict();
            trusteeVillageCouncil.innerHTML = trustee.getVillageCouncil();
            trusteeLocality.innerHTML = trustee.getLocality();
            trusteeAddress.innerHTML = trustee.getAddress();
            trusteeIndex.innerHTML = trustee.getIndex();
            trusteeWork.innerHTML = trustee.getWork();
            trusteePosition.innerHTML = trustee.getPosition();
            trusteeCurrentEmployment.innerHTML = trustee.getCurrentEmployment();
            trusteeNotes.innerHTML = trustee.getNotes();
        }
    });

}

function clearTrusteeInfo() {
    trusteeStatus.innerHTML = "";
    trusteeLastName.innerHTML = "";
    trusteeFirstName.innerHTML = "";
    trusteePatronymic.innerHTML = "";
    trusteeBirthday.innerHTML = "";
    trusteeRelations.innerHTML = "";
    trusteeHomeNumber.innerHTML = "";
    trusteeMobileNumber.innerHTML = "";
    trusteeWorkNumber.innerHTML = "";
    trusteeEmail.innerHTML = "";
    trusteeDistrict.innerHTML = "";
    trusteeVillageCouncil.innerHTML = "";
    trusteeLocality.innerHTML = "";
    trusteeAddress.innerHTML = "";
    trusteeIndex.innerHTML = "";
    trusteeWork.innerHTML = "";
    trusteePosition.innerHTML = "";
    trusteeCurrentEmployment.innerHTML = "";
    trusteeNotes.innerHTML = "";
    clearTrusteeList()
}

function fillTrusteeInputs(trustees, index) {
    trustees.forEach(trustee => {
        if (trustee.getId() == index) {
            trusteeStatusInput.value = trustee.getStatus();
            trusteeLastNameInput.value = trustee.getLastName();
            trusteeFirstNameInput.value = trustee.getFirstName();
            trusteePatronymicInput.value = trustee.getPatronymic();
            trusteeBirthdayInput.value = trustee.getBirthday();
            trusteeRelationsInput.value = trustee.getRelations();

            trusteeHomeNumberInput.value = trustee.getHomeNumber();
            trusteeMobileNumberInput.value = trustee.getMobileNumber();
            trusteeWorkNumberInput.value = trustee.getWorkNumber();
            trusteeEmailInput.value = trustee.getEmail();

            trusteeDistrictInput.value = trustee.getDistrict();
            trusteeVillageCouncilInput.value = trustee.getVillageCouncil();
            trusteeLocalityInput.value = trustee.getLocality();
            trusteeAddressInput.value = trustee.getAddress();
            trusteeIndexInput.value = trustee.getIndex();

            trusteeWorkInput.value = trustee.getWork();
            trusteePositionInput.value = trustee.getPosition();
            trusteeCurrentEmploymentInput.value = trustee.getCurrentEmployment();

            // trusteeNotesInput.value = trustee.getNotes();
        }
    });
}

function clearTrusteeInputs(trustees, index) {

    trusteeStatusInput.value = "";
    trusteeLastNameInput.value = "";
    trusteeFirstNameInput.value = "";
    trusteePatronymicInput.value = "";
    trusteeBirthdayInput.value = "";
    trusteeRelationsInput.value = "";

    trusteeHomeNumberInput.value = "";
    trusteeMobileNumberInput.value = "";
    trusteeWorkNumberInput.value = "";
    trusteeEmailInput.value = "";

    trusteeDistrictInput.value = "";
    trusteeVillageCouncilInput.value = "";
    trusteeLocalityInput.value = "";
    trusteeAddressInput.value = "";
    trusteeIndexInput.value = "";

    trusteeWorkInput.value = "";
    trusteePositionInput.value = "";
    trusteeCurrentEmploymentInput.value = "";

    // trusteeNotesInput.value = "";
}

function showTrusteeInputs() {
    trusteeStatusInput.classList.toggle("displaynone");
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


    trusteeStatus.classList.toggle("displaynone");
    trusteeLastName.classList.toggle("displaynone");
    trusteeFirstName.classList.toggle("displaynone");
    trusteePatronymic.classList.toggle("displaynone");
    trusteeBirthday.classList.toggle("displaynone");
    trusteeRelations.classList.toggle("displaynone");

    trusteeHomeNumber.classList.toggle("displaynone");
    trusteeMobileNumber.classList.toggle("displaynone");
    trusteeWorkNumber.classList.toggle("displaynone");
    trusteeEmail.classList.toggle("displaynone");

    trusteeDistrict.classList.toggle("displaynone");
    trusteeVillageCouncil.classList.toggle("displaynone");
    trusteeLocality.classList.toggle("displaynone");
    trusteeAddress.classList.toggle("displaynone");
    trusteeIndex.classList.toggle("displaynone");

    trusteeWork.classList.toggle("displaynone");
    trusteePosition.classList.toggle("displaynone");
    trusteeCurrentEmployment.classList.toggle("displaynone");

    trusteeNotes.classList.toggle("displaynone");
}

function clearTrusteeList() {
    childrenTrusteeList.innerHTML = "";
}

let dateType;

function renderListOfDates(children, dateType) {
    listOfDates.innerHTML = "";
    switch (dateType) {
        case "RecognitionDate":
            datesList = children.getAllRecognitionDates();
            break;
        case "ReviewDate":
            datesList = children.getAllReviewDates();
            break;
        case "TermControl":
            datesList = children.getAllTermControl();
            break;

        default:
            break;
    }

    for (let i = 0; i < datesList.length; i++) {
        element = datesList[i];
        let listOfDatesItem = document.createElement("div");
        listOfDatesItem.classList = "listOfDates_item";
        listOfDatesItem.setAttribute("data-index", i);

        let listOfDatesItemText = document.createElement("span");
        listOfDatesItemText.innerHTML = i + 1 + ") " + element.getDate();
        if (dateType != "TermControl") {
            listOfDatesItemText.innerHTML += " " + element.getSchool();
        }
        listOfDatesItem.appendChild(listOfDatesItemText);

        let deleteButton = newButton("delete");
        deleteButton.addEventListener("click", function () {
            datesList.splice(deleteButton.parentNode.getAttribute("data-index"), 1)
            event.stopPropagation();
            renderListOfDates(children);
        });

        listOfDatesItem.appendChild(deleteButton);
        listOfDates.appendChild(listOfDatesItem);
    }
}

function showChildrenInfo(children, trustees) {
    childrenLastName.innerHTML = children.getLastName();
    childrenFirstName.innerHTML = children.getFirstName();
    childrenPatronymic.innerHTML = children.getPatronymic();
    childrenBirthday.innerHTML = children.getBirthday();

    childrenSchool.innerHTML = children.getSchool();
    childrenClassNumber.innerHTML = children.getClassNumber();
    childrenPlaceOfStudy.innerHTML = children.getPlaceOfStudy();

    childrenHomeNumber.innerHTML = children.getHomeNumber();
    childrenMobileNumber.innerHTML = children.getMobileNumber();

    childrenVillageCouncil.innerHTML = children.getVillageCouncil();
    childrenLocality.innerHTML = children.getLocality();
    childrenAddress.innerHTML = children.getAddress();

    childrenRecognitionDate.innerHTML = children.getLastRecognitionDate();
    childrenReviewDate.innerHTML = children.getReviewDate();
    childrenTermControl.innerHTML = children.getTermControl();

    childrenNorm.innerHTML = children.getNorm();

    childrenNotes.innerHTML = children.getNotes();

    let childrenTrustees = children.getTrustees();

    renderTrusteeList(childrenTrustees, children.getId(), trustees);
}

function clearChildrenInfo() {
    childrenLastName.innerHTML = "";
    childrenFirstName.innerHTML = "";
    childrenPatronymic.innerHTML = "";
    childrenBirthday.innerHTML = "";

    childrenSchool.innerHTML = "";
    childrenClassNumber.innerHTML = "";
    childrenPlaceOfStudy.innerHTML = "";

    childrenHomeNumber.innerHTML = "";
    childrenMobileNumber.innerHTML = "";

    childrenVillageCouncil.innerHTML = "";
    childrenLocality.innerHTML = "";
    childrenAddress.innerHTML = "";

    childrenRecognitionDate.innerHTML = "";
    childrenReviewDate.innerHTML = "";
    childrenTermControl.innerHTML = "";
    childrenNorm.innerHTML = "";

    childrenNotes.innerHTML = "";

    clearTrusteeList();
}

function fillChildrenInputs(children, trustees) {
    childrenLastNameInput.value = children.getLastName();
    childrenFirstNameInput.value = children.getFirstName();
    childrenPatronymicInput.value = children.getPatronymic();
    childrenBirthdayInput.value = children.getBirthday();

    childrenSchoolInput.value = children.getSchool();
    childrenClassNumberInput.value = children.getClassNumber();
    childrenPlaceOfStudyInput.value = children.getPlaceOfStudy();

    childrenHomeNumberInput.value = children.getHomeNumber();
    childrenMobileNumberInput.value = children.getMobileNumber();

    childrenVillageCouncilInput.value = children.getVillageCouncil();
    childrenLocalityInput.value = children.getLocality();
    childrenAddressInput.value = children.getAddress();

    childrenNormInput.value = children.getNorm();

    childrenNotesInput.value = children.getNotes();

    renderTrusteeList(children.getTrustees(), children.getId(), trustees);
}

function clearChildrenInputs() {
    childrenLastNameInput.value = "";
    childrenFirstNameInput.value = "";
    childrenPatronymicInput.value = "";
    childrenBirthdayInput.value = "";

    childrenSchoolInput.value = "";
    childrenClassNumberInput.value = "";
    childrenPlaceOfStudyInput.value = "";

    childrenHomeNumberInput.value = "";
    childrenMobileNumberInput.value = "";

    childrenVillageCouncilInput.value = "";
    childrenLocalityInput.value = "";
    childrenAddressInput.value = "";

    childrenNormInput.value = "";

    childrenNotesInput.value = "";

    clearTrusteeList();
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

    childrenNorm.classList.toggle("displaynone");
    childrenNotes.classList.toggle("displaynone");

    newDateButton.classList.toggle("displaynone");
    newTrusteeButton.classList.toggle("displaynone");
}

function clearChildrenList() {
    childrenList.innerHTML = "";
}

childrenRecognitionDateButton.addEventListener("click", function () {
    dateType = "RecognitionDate";
    renderListOfDates(targetChildren, dateType);
    this.classList.toggle("borderBottom");
    childrenReviewDateButton.classList.remove("borderBottom");
    childrenTermControlButton.classList.remove("borderBottom");
});
childrenReviewDateButton.addEventListener("click", function () {
    dateType = "ReviewDate";
    renderListOfDates(targetChildren, dateType)
    this.classList.toggle("borderBottom");
    childrenRecognitionDateButton.classList.remove("borderBottom");
    childrenTermControlButton.classList.remove("borderBottom");
});
childrenTermControlButton.addEventListener("click", function () {
    dateType = "TermControl";
    renderListOfDates(targetChildren, dateType)
    this.classList.toggle("borderBottom");
    childrenRecognitionDateButton.classList.remove("borderBottom");
    childrenReviewDateButton.classList.remove("borderBottom");
});

newDateButton.addEventListener("click", function () {
    showSopInputs();
});

confirmDateButton.addEventListener("click", function () {
    let newSopDate = new SopDate(sopDateInput.value, sopSchoolInput.value);

    if (dateType == "RecognitionDate") {
        targetChildren.addRecognitionDate(newSopDate);
    }
    if (dateType == "ReviewDate") {
        targetChildren.addReviewDate(newSopDate);
    }
    if (dateType == "TermControl") {
        targetChildren.addTermControl(newSopDate);
    }
    showSopInputs();
    renderListOfDates(targetChildren, dateType);
});

canselDateButton.addEventListener("click", function () {

    showSopInputs();
});

function showSopInputs() {
    listOfDates.classList.toggle("displaynone");
    confirmChangesDatesButton.classList.toggle("displaynone");
    newDateButton.classList.toggle("displaynone");
    sopDate.classList.toggle("displaynone");
    sopSchool.classList.toggle("displaynone");
    sopDateInput.value = "";
    sopSchoolInput.value = "";
}

function hiddenAll() {
    trusteeLastName = document.getElementById("trusteeLastName");
    trusteeFirstName = document.getElementById("trusteeFirstName");
    trusteePatronymic = document.getElementById("trusteePatronymic");
    trusteeBirthday = document.getElementById("trusteeBirthday");
    trusteeRelations = document.getElementById("trusteeRelations");

    trusteeHomeNumber = document.getElementById("trusteeHomeNumber");
    trusteeMobileNumber = document.getElementById("trusteeMobileNumber");
    trusteeWorkNumber = document.getElementById("trusteeWorkNumber");
    trusteeEmail = document.getElementById("trusteeEmail");

    trusteeDistrict = document.getElementById("trusteeDistrict");
    trusteeVillageCouncil = document.getElementById("trusteeVillageCouncil");
    trusteeLocality = document.getElementById("trusteeLocality");
    trusteeAddress = document.getElementById("trusteeAddress");
    trusteeIndex = document.getElementById("trusteeIndex");

    trusteeWork = document.getElementById("trusteeWork");
    trusteePosition = document.getElementById("trusteePosition");
    trusteeCurrentEmployment = document.getElementById("trusteeCurrentEmployment");

    trusteeNotes = document.getElementById("trusteeNotes");

    // Опекуны текстовые поля
    trusteeStatusInput.classList.add("displaynone");
    trusteeLastNameInput.classList.add("displaynone");
    trusteeFirstNameInput.classList.add("displaynone");
    trusteePatronymicInput.classList.add("displaynone");
    trusteeBirthdayInput.classList.add("displaynone");
    trusteeRelationsInput.classList.add("displaynone");

    trusteeHomeNumberInput.classList.add("displaynone");
    trusteeMobileNumberInput.classList.add("displaynone");
    trusteeWorkNumberInput.classList.add("displaynone");
    trusteeEmailInput.classList.add("displaynone");

    trusteeDistrictInput.classList.add("displaynone");
    trusteeVillageCouncilInput.classList.add("displaynone");
    trusteeLocalityInput.classList.add("displaynone");
    trusteeAddressInput.classList.add("displaynone");
    trusteeIndexInput.classList.add("displaynone");

    trusteeWorkInput.classList.add("displaynone");
    trusteePositionInput.classList.add("displaynone");
    trusteeCurrentEmploymentInput.classList.add("displaynone");

    trusteeNotesInput.classList.add("displaynone");

    newTrusteeButton.classList.add("displaynone");
    confirmChangesTrusteeButton.classList.add("displaynone");

    // Дети поля для отображеня информации
    childrenLastName.classList.remove("displaynone");
    childrenFirstName.classList.remove("displaynone");
    childrenPatronymic.classList.remove("displaynone");
    childrenBirthday.classList.remove("displaynone");

    childrenSchool.classList.remove("displaynone");
    childrenClassNumber.classList.remove("displaynone");
    childrenPlaceOfStudy.classList.remove("displaynone");

    childrenHomeNumber.classList.remove("displaynone");
    childrenMobileNumber.classList.remove("displaynone");

    childrenVillageCouncil.classList.remove("displaynone");
    childrenLocality.classList.remove("displaynone");
    childrenAddress.classList.remove("displaynone");

    childernListOfDates.classList.remove("displaynone");
    childrenNotes.classList.remove("displaynone");

    // Дети текстовые поля
    childrenLastNameInput.classList.add("displaynone");
    childrenFirstNameInput.classList.add("displaynone");
    childrenPatronymicInput.classList.add("displaynone");
    childrenBirthdayInput.classList.add("displaynone");

    childrenSchoolInput.classList.add("displaynone");
    childrenClassNumberInput.classList.add("displaynone");
    childrenPlaceOfStudyInput.classList.add("displaynone");

    childrenHomeNumberInput.classList.add("displaynone");
    childrenMobileNumberInput.classList.add("displaynone");

    childrenVillageCouncilInput.classList.add("displaynone");
    childrenLocalityInput.classList.add("displaynone");
    childrenAddressInput.classList.add("displaynone");

    sopDate.classList.add("displaynone");
    sopSchool.classList.add("displaynone");
    childrenNormInput.classList.add("displaynone");

    newDateButton.classList.add("displaynone");
    confirmChangesDatesButton.classList.add("displaynone");

    childrenNotesInput.classList.add("displaynone");
}