"use strict";
class AppointmentABC {
    constructor(startTimeInput, endTimeInput, descriptionInput) {
        this.startDate = startTimeInput;
        this.endDate = endTimeInput;
        this.description = descriptionInput;
    }
}
class Appointment extends AppointmentABC {
    constructor(startTimeInput, endTimeInput, descriptionInput) {
        super(startTimeInput, endTimeInput, descriptionInput);
    }
    printAppointment() {
        console.log(this.startDate);
        console.log(this.endDate);
        console.log(this.description);
    }
}
const d4 = new Date();
const d5 = new Date();
const description = `Hello Your Appoint is been successfully taken `;
const a2 = new Appointment(d4, d5, description);
a2.printAppointment();
