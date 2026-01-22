import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyurvedicMassageComponent } from './ayurvedic-massage.component';

describe('AyurvedicMassageComponent', () => {
  let component: AyurvedicMassageComponent;
  let fixture: ComponentFixture<AyurvedicMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyurvedicMassageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyurvedicMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
