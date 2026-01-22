"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const herbal_medicine_component_1 = require("./herbal-medicine.component");
describe('HerbalMedicineComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [herbal_medicine_component_1.HerbalMedicineComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(herbal_medicine_component_1.HerbalMedicineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
