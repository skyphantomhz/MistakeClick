import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMessageMineComponent } from './detail-message-mine.component';

describe('DetailMessageMineComponent', () => {
  let component: DetailMessageMineComponent;
  let fixture: ComponentFixture<DetailMessageMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMessageMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMessageMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
