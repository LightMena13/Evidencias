import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaComponentComponent } from './segunda-component.component';

describe('SegundaComponentComponent', () => {
  let component: SegundaComponentComponent;
  let fixture: ComponentFixture<SegundaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegundaComponentComponent]
    });
    fixture = TestBed.createComponent(SegundaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
