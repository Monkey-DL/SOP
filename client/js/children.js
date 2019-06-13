class Children {
    constructor() {
        this.lastName = "Матвеев";
        this.firstName = "Егор";
        this.patronymic = "Викентьевич";
        this.birthday = Math.round(Math.random(), 2);

        this.school = "Ktcy";
        this.classNumber = "Ktcy1";
        this.placeOfStudy = "Ktcy2";

        this.homeNumber = "41";
        this.mobileNumber = "Ktcy2";

        this.villageCouncil = "41";
        this.locality = "41";
        this.address = "41";

        this.sopRecognitionDates = [];
        this.sopReviewDate;
        this.termControl;
        this.norm;

        this.notes="dasdasdasd";

        this.trustees = [];
    };

    getLastName() {
        return this.lastName;
    };
    getFirstName() {
        return this.firstName;
    };
    getPatronymic() {
        return this.patronymic;
    };
    getBirthday() {
        return this.birthday;

    };
    getSchool() {
        return this.school;
    };
    getClassNumber() {
        return this.classNumber;
    };
    getPlaceOfStudy() {
        return this.placeOfStudy;
    };

    getHomeNumber() {
        return this.homeNumber;
    };
    getMobileNumber() {
        return this.mobileNumber;
    };

    getVillageCouncil() {
        return this.villageCouncil;
    };
    getLocality() {
        return this.locality;
    };
    getAddress() {
        return this.address;
    };
    
    getNotes() {
        return this.notes;
    };

    getFullName() {
        return this.lastName + " " + this.firstName;
    };

    addTruste(trusteeIndex){
        this.trustees.push(trusteeIndex);
    }

    getTrustees(){
        return this.trustees;
    }
}