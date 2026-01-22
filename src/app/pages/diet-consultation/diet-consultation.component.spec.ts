import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietConsultationComponent } from './diet-consultation.component';

describe('DietConsultationComponent', () => {
  let component: DietConsultationComponent;
  let fixture: ComponentFixture<DietConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
