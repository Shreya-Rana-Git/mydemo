import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAppComponent } from './direct-app.component';

describe('DirectAppComponent', () => {
  let component: DirectAppComponent;
  let fixture: ComponentFixture<DirectAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectAppComponent]
    });
    fixture = TestBed.createComponent(DirectAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
