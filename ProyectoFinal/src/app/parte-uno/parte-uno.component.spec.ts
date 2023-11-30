import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteUnoComponent } from './parte-uno.component';

describe('ParteUnoComponent', () => {
  let component: ParteUnoComponent;
  let fixture: ComponentFixture<ParteUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParteUnoComponent]
    });
    fixture = TestBed.createComponent(ParteUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
