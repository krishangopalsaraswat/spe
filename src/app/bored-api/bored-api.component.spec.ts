import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredApiComponent } from './bored-api.component';

describe('BoredApiComponent', () => {
  let component: BoredApiComponent;
  let fixture: ComponentFixture<BoredApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoredApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
