import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHomepageComponent } from './simple-homepage.component';

describe('SimpleHomepageComponent', () => {
  let component: SimpleHomepageComponent;
  let fixture: ComponentFixture<SimpleHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
