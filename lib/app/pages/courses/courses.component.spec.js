"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const courses_component_1 = require("./courses.component");
describe('CoursesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [courses_component_1.CoursesComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(courses_component_1.CoursesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
