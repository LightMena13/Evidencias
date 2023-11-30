import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuatroComponentComponent } from './cuatro-component.component';

describe('CuatroComponentComponent', () => {
  let component: CuatroComponentComponent;
  let fixture: ComponentFixture<CuatroComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuatroComponentComponent]
    });
    fixture = TestBed.createComponent(CuatroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
