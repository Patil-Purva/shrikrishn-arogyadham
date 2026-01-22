import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbalMedicineComponent } from './herbal-medicine.component';

describe('HerbalMedicineComponent', () => {
  let component: HerbalMedicineComponent;
  let fixture: ComponentFixture<HerbalMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerbalMedicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerbalMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
