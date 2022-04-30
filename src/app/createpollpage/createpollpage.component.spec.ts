import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepollpageComponent } from './createpollpage.component';

describe('CreatepollpageComponent', () => {
  let component: CreatepollpageComponent;
  let fixture: ComponentFixture<CreatepollpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepollpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepollpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
