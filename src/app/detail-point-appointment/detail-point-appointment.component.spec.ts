import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPointAppointmentComponent } from './detail-point-appointment.component';

describe('DetailPointAppointmentComponent', () => {
  let component: DetailPointAppointmentComponent;
  let fixture: ComponentFixture<DetailPointAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPointAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPointAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
