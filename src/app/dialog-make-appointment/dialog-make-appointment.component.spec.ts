import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMakeAppointmentComponent } from './dialog-make-appointment.component';

describe('DialogMakeAppointmentComponent', () => {
  let component: DialogMakeAppointmentComponent;
  let fixture: ComponentFixture<DialogMakeAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMakeAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMakeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
