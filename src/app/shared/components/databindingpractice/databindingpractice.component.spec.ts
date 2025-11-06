import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingpracticeComponent } from './databindingpractice.component';

describe('DatabindingpracticeComponent', () => {
  let component: DatabindingpracticeComponent;
  let fixture: ComponentFixture<DatabindingpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabindingpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
