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
let confirmTrusteeButton=document.getElementById("confirmTrustee");
let canselTrusteeButton=document.getElementById("canselTrustee");

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

let childrenNormInput = document.getElementById("childrenNormInput");

let childrenNotesInput = document.getElementById("childrenNotesInput");


let childrenTrusteeList = document.getElementById("childrenTrusteeList");

let confirmChangesChildrenButton = document.getElementById("confirmChangesChildren");
let confirmChildrenButton=document.getElementById("confirmChildren");
let canselChildrenButton=document.getElementById("canselChildren");

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
    if (childrenTrusteeList.children.length > 0) {
        for (let i = childrenTrusteeList.children.length - 1; i >= 0; i--) {
            childrenTrusteeList.removeChild(childrenTrusteeList.children[i]);
        }
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

function clearChildrenInputs(){
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

    childrenNotes.classList.toggle("displaynone");

    newTrusteeButton.classList.toggle("displaynone");
}

function clearChildrenList() {
    if (childrenList.children.length > 0) {
        for (let i = childrenList.children.length - 1; i >= 0; i--) {
            childrenList.removeChild(childrenList.children[i]);
        }
    }
}