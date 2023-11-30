import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitareasComponent } from './litareas.component';

describe('LitareasComponent', () => {
  let component: LitareasComponent;
  let fixture: ComponentFixture<LitareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LitareasComponent]
    });
    fixture = TestBed.createComponent(LitareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
