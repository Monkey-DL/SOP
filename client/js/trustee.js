class Trustee {
    constructor(trustees) {
        this.id = 0;
        this.status = "Мама";
        this.firstName = '';
        this.lastName = '';
        this.patronymic = '';
        this.birthday = '';
        this.relations = '';

        this.homeNumber = '';
        this.mobileNumber = '';
        this.workNumber = '';
        this.email = '';

        this.district = '';
        this.villageCouncil = '';
        this.locality = '';
        this.address = '';
        this.index = '';

        this.work = '';
        this.position = '';
        this.currentEmployment = '';

        this.notes = '';

        trustees.forEach(trustee => {
            if (trustee.getId() >= this.id) {
                this.id = trustee.getId() + 1;
            }
        });
    };

    copyTrustee(trustee) {
        this.id = trustee.getId();
        this.status = trustee.getStatus();
        this.firstName = trustee.getFirstName();
        this.lastName = trustee.getLastName();
        this.patronymic = trustee.getPatronymic();
        this.birthday = trustee.getBirthday();
        this.relations = trustee.getRelations();

        this.homeNumber = trustee.getHomeNumber();
        this.mobileNumber = trustee.getMobileNumber();
        this.workNumber = trustee.getWork();
        this.email = trustee.getEmail();

        this.district = trustee.getDistrict();
        this.villageCouncil = trustee.getVillageCouncil();
        this.locality = trustee.getLocality();
        this.address = trustee.getAddress();
        this.index = trustee.getIndex();

        this.work = trustee.getWork();
        this.position = trustee.getPosition();
        this.currentEmployment = trustee.getCurrentEmployment();

        this.notes = trustee.getNotes();
    }

    copyTrusteeJSON(trustee) {
        this.id = trustee.id;
        this.status = trustee.status;
        this.firstName = trustee.firstName;
        this.lastName = trustee.lastName;
        this.patronymic = trustee.patronymic;
        this.birthday = trustee.birthday;
        this.relations = trustee.relations;

        this.homeNumber = trustee.homeNumber;
        this.mobileNumber = trustee.mobileNumber;
        this.workNumber = trustee.work;
        this.email = trustee.email;

        this.district = trustee.district;
        this.villageCouncil = trustee.villageCouncil;
        this.locality = trustee.locality;
        this.address = trustee.address;
        this.index = trustee.index;

        this.work = trustee.work;
        this.position = trustee.position;
        this.currentEmployment = this.currentEmployment;

        this.notes = trustee.notes;
    }

    getId() {
        return this.id;
    }

    getStatus() {
        return this.status;
    }

    setStatus(status) {
        this.status = status;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getPatronymic() {
        return this.patronymic;
    }

    setPatronymic(patronymic) {
        this.patronymic = patronymic;
    }

    getBirthday() {
        return this.birthday;
    }

    setBirthday(birthday) {
        this.birthday = birthday;
    }

    getRelations() {
        return this.relations;
    }

    setRelations(relations) {
        this.relations = relations;
    }

    getHomeNumber() {
        return this.homeNumber;
    }

    setHomeNumber(homeNumber) {
        this.homeNumber = homeNumber;
    }

    getMobileNumber() {
        return this.mobileNumber;
    }

    setMobileNumber(mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    getWorkNumber() {
        return this.workNumber;
    }

    setWorkNumber(workNumber) {
        this.workNumber = workNumber;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getDistrict() {
        return this.district;
    }

    setDistrict(district) {
        this.district = district;
    }

    getVillageCouncil() {
        return this.villageCouncil;
    }

    setVillageCouncil(villageCouncil) {
        this.villageCouncil = villageCouncil;
    }

    getLocality() {
        return this.locality;
    }

    setLocality(locality) {
        this.locality = locality;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getIndex() {
        return this.index;
    }

    setIndex(index) {
        this.index = index;
    }

    getWork() {
        return this.work;
    }

    setWork(work) {
        this.work = work;
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
    }

    getCurrentEmployment() {
        return this.currentEmployment;
    }

    setCurrentEmployment(currentEmployment) {
        this.currentEmployment = currentEmployment;
    }

    getNotes() {
        return this.notes;
    }

    setNotes(notes) {
        this.notes = notes;
    }


    getTrustee(trustees, trusteeID) {
        trustees.forEach(element => {
            if (element.getId() == trusteeID) {
                return element;
            }
        });
    }

}