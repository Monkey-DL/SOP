class Trustee{
    constructor() {
        this.id;
        this.status="vfvf";
        this.firstName = "Егор";
        this.lastName = "Матвеев";
        this.patronymic;
        this.birthday;
        this.relations;

        this.homeNumber;
        this.mobileNumber;
        this.workNumber;
        this.email;

        this.district;
        this.villageCouncil;
        this.locality;
        this.address;
        this.index;

        this.work;
        this.position;
        this.currentEmployment;

        this.notes;
    };

    getStatus(){
        return this.status;
    }
}