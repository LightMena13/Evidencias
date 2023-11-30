import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresComponentComponent } from './tres-component.component';

describe('TresComponentComponent', () => {
  let component: TresComponentComponent;
  let fixture: ComponentFixture<TresComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TresComponentComponent]
    });
    fixture = TestBed.createComponent(TresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
