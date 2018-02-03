import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactVTwoComponent } from './add-contact-v-two.component';

describe('AddContactVTwoComponent', () => {
  let component: AddContactVTwoComponent;
  let fixture: ComponentFixture<AddContactVTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactVTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactVTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
