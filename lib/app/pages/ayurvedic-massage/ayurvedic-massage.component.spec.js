"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const ayurvedic_massage_component_1 = require("./ayurvedic-massage.component");
describe('AyurvedicMassageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [ayurvedic_massage_component_1.AyurvedicMassageComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(ayurvedic_massage_component_1.AyurvedicMassageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
