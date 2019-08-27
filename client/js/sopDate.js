class SopDate {
    constructor(date, school) {
        this.date = date;
        this.school = school;
    };

    copy(date) {
        this.date = date.date;
        this.school = date.school;
    }

    getDate() {
        return this.date;
    }

    getSchool() {
        return this.school;
    }
}