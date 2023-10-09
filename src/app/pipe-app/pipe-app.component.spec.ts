import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAppComponent } from './pipe-app.component';

describe('PipeAppComponent', () => {
  let component: PipeAppComponent;
  let fixture: ComponentFixture<PipeAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeAppComponent]
    });
    fixture = TestBed.createComponent(PipeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
