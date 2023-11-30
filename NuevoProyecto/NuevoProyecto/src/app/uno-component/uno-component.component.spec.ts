import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoComponentComponent } from './uno-component.component';

describe('UnoComponentComponent', () => {
  let component: UnoComponentComponent;
  let fixture: ComponentFixture<UnoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnoComponentComponent]
    });
    fixture = TestBed.createComponent(UnoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
