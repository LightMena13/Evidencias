import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraComponentComponent } from './primera-component.component';

describe('PrimeraComponentComponent', () => {
  let component: PrimeraComponentComponent;
  let fixture: ComponentFixture<PrimeraComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeraComponentComponent]
    });
    fixture = TestBed.createComponent(PrimeraComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
