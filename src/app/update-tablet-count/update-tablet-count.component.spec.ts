import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTabletCountComponent } from './update-tablet-count.component';

describe('UpdateTabletCountComponent', () => {
  let component: UpdateTabletCountComponent;
  let fixture: ComponentFixture<UpdateTabletCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTabletCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTabletCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
