import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosComponentComponent } from './dos-component.component';

describe('DosComponentComponent', () => {
  let component: DosComponentComponent;
  let fixture: ComponentFixture<DosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DosComponentComponent]
    });
    fixture = TestBed.createComponent(DosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
