import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManstaffComponent } from './manstaff.component';

describe('ManstaffComponent', () => {
  let component: ManstaffComponent;
  let fixture: ComponentFixture<ManstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManstaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
