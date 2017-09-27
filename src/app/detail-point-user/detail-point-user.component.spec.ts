import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPointUserComponent } from './detail-point-user.component';

describe('DetailPointUserComponent', () => {
  let component: DetailPointUserComponent;
  let fixture: ComponentFixture<DetailPointUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPointUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPointUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
