"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const book_appointment_component_1 = require("./book-appointment.component");
describe('BookAppointmentComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [book_appointment_component_1.BookAppointmentComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(book_appointment_component_1.BookAppointmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
