"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const appointment_service_1 = require("./appointment.service");
describe('AppointmentService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(appointment_service_1.AppointmentService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
