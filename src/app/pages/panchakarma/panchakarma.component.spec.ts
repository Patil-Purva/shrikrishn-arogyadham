import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchakarmaComponent } from './panchakarma.component';

describe('PanchakarmaComponent', () => {
  let component: PanchakarmaComponent;
  let fixture: ComponentFixture<PanchakarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanchakarmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanchakarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
