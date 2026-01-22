"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const diet_consultation_component_1 = require("./diet-consultation.component");
describe('DietConsultationComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [diet_consultation_component_1.DietConsultationComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(diet_consultation_component_1.DietConsultationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
