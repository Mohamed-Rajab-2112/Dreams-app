import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDreamModalComponent } from './add-dream-modal.component';

describe('AddDreamModalComponent', () => {
  let component: AddDreamModalComponent;
  let fixture: ComponentFixture<AddDreamModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDreamModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDreamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
