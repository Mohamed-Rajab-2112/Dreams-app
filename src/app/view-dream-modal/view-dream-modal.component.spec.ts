import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDreamModalComponent } from './view-dream-modal.component';

describe('ViewDreamModalComponent', () => {
  let component: ViewDreamModalComponent;
  let fixture: ComponentFixture<ViewDreamModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDreamModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDreamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
