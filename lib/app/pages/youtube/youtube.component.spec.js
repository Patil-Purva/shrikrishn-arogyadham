"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const youtube_component_1 = require("./youtube.component");
describe('YoutubeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [youtube_component_1.YoutubeComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(youtube_component_1.YoutubeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
