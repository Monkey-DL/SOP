class Children {
    constructor(childrens) {
        this.id = 0;
        this.lastName = '';
        this.firstName = '';
        this.patronymic = '';
        this.birthday = '';

        this.school = '';
        this.classNumber = '';
        this.placeOfStudy = '';

        this.homeNumber = '';
        this.mobileNumber = '';

        this.villageCouncil = '';
        this.locality = '';
        this.address = '';

        this.sopRecognitionDates = [];
        this.sopReviewDate = [];
        this.termControl = [];
        this.norm = '';

        this.notes = '';

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

        this.sopRecognitionDates = children.getAllRecognitionDates();
        this.sopReviewDate = children.getAllReviewDates();
        this.termControl = children.getAllTermControl();
        this.norm = children.getNorm();

        this.notes = children.getNotes();

        this.trustees = children.getTrustees();
    }
    copyChildrenJSON(children) {
        this.id = children.id;
        this.lastName = children.lastName;
        this.firstName = children.firstName;
        this.patronymic = children.patronymic;
        this.birthday = children.birthday;

        this.school = children.school;
        this.classNumber = children.classNumber;
        this.placeOfStudy = children.placeOfStudy;

        this.homeNumber = children.homeNumber;
        this.mobileNumber = children.mobileNumber;

        this.villageCouncil = children.villageCouncil;
        this.locality = children.locality;
        this.address = children.address;

        for (let i = 0; i < children.sopRecognitionDates.length; i++) {
            this.sopRecognitionDates.push(new SopDate());
            this.sopRecognitionDates[i].copy(children.sopRecognitionDates[i]);
        }

        for (let i = 0; i < children.sopReviewDate.length; i++) {
            this.sopReviewDate.push(new SopDate());
            this.sopReviewDate[i].copy(children.sopReviewDate[i]);
        }

        for (let i = 0; i < children.termControl.length; i++) {
            this.termControl.push(new SopDate());
            this.termControl[i].copy(children.termControl[i]);
        }
        
        this.norm = children.norm;

        this.notes = children.notes;

        this.trustees = children.trustees;
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

    getLastRecognitionDate() {
        if (this.sopRecognitionDates.length > 0) {
            return this.sopRecognitionDates[this.sopRecognitionDates.length - 1].getDate() + " " + this.sopRecognitionDates[this.sopRecognitionDates.length - 1].getSchool();
        }
    }

    getAllRecognitionDates() {
        return this.sopRecognitionDates;
    }

    addRecognitionDate(date) {
        this.sopRecognitionDates.push(date);
    }

    getReviewDate() {
        if (this.sopReviewDate.length > 0) {
            return this.sopReviewDate[this.sopReviewDate.length - 1].getDate() + " " + this.sopReviewDate[this.sopReviewDate.length - 1].getSchool();
        }
    }

    getAllReviewDates() {
        return this.sopReviewDate;
    }

    addReviewDate(date) {
        this.sopReviewDate.push(date);
    }

    getTermControl() {
        if (this.termControl.length > 0) {
            return this.termControl[this.termControl.length - 1].getDate();
        }
    }

    getAllTermControl() {
        return this.termControl;
    }

    addTermControl(date) {
        this.termControl.push(date);
    }

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