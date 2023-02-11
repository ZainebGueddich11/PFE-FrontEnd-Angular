import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursModComponent } from './cours-mod.component';

describe('CoursModComponent', () => {
  let component: CoursModComponent;
  let fixture: ComponentFixture<CoursModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
