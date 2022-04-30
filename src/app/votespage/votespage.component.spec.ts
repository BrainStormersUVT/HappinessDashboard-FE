import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotespageComponent } from './votespage.component';

describe('VotespageComponent', () => {
  let component: VotespageComponent;
  let fixture: ComponentFixture<VotespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
