class Children {
    constructor() {
        this.lastName;
        this.firstName;
        this.patronymic;
        this.birthday;

        this.school;
        this.classNumber;
        this.placeOfStudy;

        this.homeNumber;
        this.mobileNumber;

        this.villageCouncil;
        this.locality;
        this.address;

        this.sopRecognitionDates = [];
        this.sopReviewDate = [];
        this.termControl = [];
        this.norm;

        this.notes;

        this.trustees = [];
    };

    getLastName() {
        return this.lastName;
    };

    setLastName(lastName) {
        this.lastName = lastName;
    };

    getFirstName() {
        return this.firstName;
    };
    setFirstName(firstName) {
        this.firstName = firstName;
    };

    getPatronymic() {
        return this.patronymic;
    };
    setPatronymic(patronimic) {
        this.patronymic = patronimic;
    };

    getBirthday() {
        return this.birthday;
    };
    setBirthday(birthday) {
        this.birthday = birthday;
    };

    getSchool() {
        return this.school;
    };
    setSchool(school) {
        this.school = school;
    };

    getClassNumber() {
        return this.classNumber;
    };
    setClassNumber(classNumber) {
        this.classNumber = classNumber;
    };

    getPlaceOfStudy() {
        return this.placeOfStudy;
    };
    setPlaceOfStudy(placeOfStudy) {
        this.placeOfStudy = placeOfStudy;
    };

    getHomeNumber() {
        return this.homeNumber;
    };
    setHomeNumber(homeNumber) {
        this.homeNumber = homeNumber;
    };

    getMobileNumber() {
        return this.mobileNumber;
    };
    setMobileNumber(mobileNumber) {
        this.mobileNumber = mobileNumber;
    };

    getVillageCouncil() {
        return this.villageCouncil;
    };
    setVillageCouncil(villageCouncil) {
        this.villageCouncil = villageCouncil;
    };

    getLocality() {
        return this.locality;
    };
    setLocality(locality) {
        this.locality = locality;
    };

    getAddress() {
        return this.address;
    };
    setAddress(address) {
        this.address = address;
    };

    getNorm() {
        return this.norm;
    };
    setNorm(norm) {
        this.norm =norm;
    };

    getNotes() {
        return this.notes;
    };
    setNotes(notes) {
        this.notes = notes;
    };

    getFullName() {
        return this.lastName + " " + this.firstName;
    };

    addTrustee(trusteeIndex) {
        this.trustees.push(trusteeIndex);
    }

    getTrustees() {
        return this.trustees;
    }


}