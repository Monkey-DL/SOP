let childrens = [];
let trustees = [];

for (let i = 0; i < 10; i++) {
    trustees.push(new Trustee());
};


for (let i = 0; i < 10; i++) {
    childrens.push(new Children());
    for (let j = 0; j < 2; j++) {
        childrens[i].addTruste(i);
    };
};



let childrenList = document.getElementById("childrenList");

function newButton(className) {
    let Button = document.createElement("div");
    Button.classList = "button " + className;
    return Button;
}

function showChildrenInfo(index) {
    let childrenLastName = document.getElementById("childrenLastName");
    childrenLastName.innerHTML = childrens[index].getLastName();
    let childrenFirstName = document.getElementById("childrenFirstName");
    childrenFirstName.innerHTML = childrens[index].getFirstName();
    let childrenPatronymic = document.getElementById("childrenPatronymic");
    childrenPatronymic.innerHTML = childrens[index].getPatronymic();
    let childrenBirthday = document.getElementById("childrenBirthday");
    childrenBirthday.innerHTML = childrens[index].getBirthday();

    let childrenSchool = document.getElementById("childrenSchool");
    childrenSchool.innerHTML = childrens[index].getSchool();
    let childrenClassNumber = document.getElementById("childrenClassNumber");
    childrenClassNumber.innerHTML = childrens[index].getClassNumber();
    let childrenPlaceOfStudy = document.getElementById("childrenPlaceOfStudy");
    childrenPlaceOfStudy.innerHTML = childrens[index].getPlaceOfStudy();

    let childrenHomeNumber = document.getElementById("childrenHomeNumber");
    childrenHomeNumber.innerHTML = childrens[index].getHomeNumber();
    let childrenMobileNumber = document.getElementById("childrenMobileNumber");
    childrenMobileNumber.innerHTML = childrens[index].getMobileNumber();

    let childrenVillageCouncil = document.getElementById("childrenVillageCouncil");
    childrenVillageCouncil.innerHTML = childrens[index].getVillageCouncil();
    let childrenLocality = document.getElementById("childrenLocality");
    childrenLocality.innerHTML = childrens[index].getLocality();
    let childrenAddress = document.getElementById("childrenAddress");
    childrenAddress.innerHTML = childrens[index].getAddress();



    let childrenNotes = document.getElementById("childrenNotes");
    childrenNotes.innerHTML = childrens[index].getNotes();

    let childresTrustees = childrens[index].getTrustees();

    let childrenTrusteeList = document.getElementById("childrenTrusteeList");
    if (childrenTrusteeList.children.length > 0) {
        for (let i = childrenTrusteeList.children.length; i >= 0; i--) {
            childrenTrusteeList.removeChild(childrenTrusteeList.children[i]);
        }
    }

    for (let i = 0; i < childresTrustees.length; i++) {
        let childrenTrusteItem = document.createElement("div");
        childrenTrusteItem.classList = "trustee_list_item";
        childrenTrusteItem.setAttribute("data-index", i);

        let childrenItemText = document.createElement("span");
        childrenItemText.innerHTML = trustees[i].getStatus();
        childrenTrusteItem.appendChild(childrenItemText);

        childrenTrusteItem.appendChild(newButton("change"));
        childrenTrusteItem.appendChild(newButton("delete"));

        // childrenItem.addEventListener("click", function () {
        //     showChildrenInfo(childrenItem.getAttribute("data-index"))
        // });

        childrenTrusteeList.appendChild(childrenTrusteItem);

    }
}

for (let i = 0; i < childrens.length; i++) {
    let childrenItem = document.createElement("div");
    childrenItem.classList = "children_list_item";
    childrenItem.setAttribute("data-index", i);

    let childrenItemText = document.createElement("span");
    childrenItemText.innerHTML = childrens[i].getFullName();
    childrenItem.appendChild(childrenItemText);

    childrenItem.appendChild(newButton("change"));
    childrenItem.appendChild(newButton("to_list"));
    childrenItem.appendChild(newButton("delete"));

    childrenItem.addEventListener("click", function () {
        showChildrenInfo(childrenItem.getAttribute("data-index"))
    });

    childrenList.appendChild(childrenItem);
};