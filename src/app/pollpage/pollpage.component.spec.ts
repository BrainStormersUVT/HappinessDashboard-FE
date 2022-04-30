import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollpageComponent } from './pollpage.component';

describe('PollpageComponent', () => {
  let component: PollpageComponent;
  let fixture: ComponentFixture<PollpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
