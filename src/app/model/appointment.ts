export class Appointment {
    constructor(
        public nameAppointment: String,
        public dateTime: String,
        public addressAppointment: String,
        public lat: number,
        public lng: number
    ) { }
}

export class AppointmentJSON {
    static encodeAppointment(appointment: Appointment): any {
        return {
            nameAppointment: appointment.nameAppointment,
            dateTime: appointment.dateTime,
            addressAppointment: appointment.addressAppointment,
            lat: appointment.lat,
            lng: appointment.lng
        };
    }

    static decodeUser(json: any): Appointment {
        return {
            nameAppointment: json.nameAppointment,
            dateTime: json.dateTime,
            addressAppointment: json.addressAppointment,
            lat: json.lat,
            lng: json.lng
        };
    }
}