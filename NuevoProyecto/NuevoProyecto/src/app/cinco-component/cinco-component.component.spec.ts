import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CincoComponentComponent } from './cinco-component.component';

describe('CincoComponentComponent', () => {
  let component: CincoComponentComponent;
  let fixture: ComponentFixture<CincoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CincoComponentComponent]
    });
    fixture = TestBed.createComponent(CincoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
