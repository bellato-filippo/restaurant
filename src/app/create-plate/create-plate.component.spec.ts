import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlateComponent } from './create-plate.component';

describe('CreatePlateComponent', () => {
  let component: CreatePlateComponent;
  let fixture: ComponentFixture<CreatePlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
