class Children {
    constructor(childrens) {
        this.id = 0;
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

        childrens.forEach(children => {
            if (children.getId() >= this.id) {
                this.id = children.getId() + 1;
            }
        });
    };

   copyChildren(children) {
        this.id = children.getId();
        this.lastName = children.getLastName();
        this.firstName = children.getFirstName();
        this.patronymic = children.getPatronymic();
        this.birthday = children.getBirthday();

        this.school = children.getSchool();
        this.classNumber = children.getClassNumber();
        this.placeOfStudy = children.getPlaceOfStudy();

        this.homeNumber = children.getHomeNumber();
        this.mobileNumber = children.getMobileNumber();

        this.villageCouncil = children.getVillageCouncil();
        this.locality = children.getLocality();
        this.address = children.getAddress();

        this.sopRecognitionDates = [];
        this.sopReviewDate = [];
        this.termControl = [];
        this.norm;

        this.notes = children.getNotes();

        this.trustees = children.getTrustees();
    }

    getId() {
        return this.id;
    }

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
        this.norm = norm;
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