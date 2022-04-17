import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDonComponent } from './show-don.component';

describe('ShowDonComponent', () => {
  let component: ShowDonComponent;
  let fixture: ComponentFixture<ShowDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
