import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpolationdemo1Component } from './interpolationdemo1.component';

describe('Interpolationdemo1Component', () => {
  let component: Interpolationdemo1Component;
  let fixture: ComponentFixture<Interpolationdemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interpolationdemo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interpolationdemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
