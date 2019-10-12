import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankUserComponent } from './blank-user.component';

describe('BlankUserComponent', () => {
  let component: BlankUserComponent;
  let fixture: ComponentFixture<BlankUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
