import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFirebaseComponent } from './simple-firebase.component';

describe('SimpleFirebaseComponent', () => {
  let component: SimpleFirebaseComponent;
  let fixture: ComponentFixture<SimpleFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
