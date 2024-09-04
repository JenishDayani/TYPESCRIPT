//******************************************************Implements******************************************************

/*interface AppointmentInterface {
  startDate: Date;
  endDate: Date;
  description: string;
  printAppointment(): void;
}

class Appointment implements AppointmentInterface {
  startDate: Date;
  endDate: Date;
  description: string;

  constructor(
    startTimeInput: Date,
    endTimeInput: Date,
    descriptionInput: string
  ) {
    this.startDate = startTimeInput;
    this.endDate = endTimeInput;
    this.description = descriptionInput;
  }

  printAppointment() {
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.description);
  }
}
*/

//******************************************************Abstract******************************************************

interface AppointmentInterface {
  startDate: Date;
  endDate: Date;
  description: string;
  printAppointment(): void;
}

abstract class AppointmentABC {
  startDate: Date;
  endDate: Date;
  description: string;

  constructor(
    startTimeInput: Date,
    endTimeInput: Date,
    descriptionInput: string
  ) {
    this.startDate = startTimeInput;
    this.endDate = endTimeInput;
    this.description = descriptionInput;
  }

  public abstract printAppointment(): void;
}

class Appointment extends AppointmentABC {
  constructor(
    startTimeInput: Date,
    endTimeInput: Date,
    descriptionInput: string
  ) {
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
