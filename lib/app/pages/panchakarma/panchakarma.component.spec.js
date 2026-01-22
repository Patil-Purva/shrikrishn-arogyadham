"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const panchakarma_component_1 = require("./panchakarma.component");
describe('PanchakarmaComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [panchakarma_component_1.PanchakarmaComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(panchakarma_component_1.PanchakarmaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
