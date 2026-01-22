"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const books_component_1 = require("./books.component");
describe('BooksComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [books_component_1.BooksComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(books_component_1.BooksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
