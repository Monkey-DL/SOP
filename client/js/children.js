class Children {
    constructor() {
        this.id;
        this.firstName = "Егор";
        this.lastName = "Матвеев";
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
        this.sopReviewDate;
        this.termControl;
        this.norm;

        this.notes;

        this.trustees = [];
    };

    getFullName() {
        return this.lastName + " " + this.firstName;
    };
}