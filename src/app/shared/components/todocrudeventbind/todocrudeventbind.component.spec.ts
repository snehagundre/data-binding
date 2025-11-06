import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocrudeventbindComponent } from './todocrudeventbind.component';

describe('TodocrudeventbindComponent', () => {
  let component: TodocrudeventbindComponent;
  let fixture: ComponentFixture<TodocrudeventbindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocrudeventbindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodocrudeventbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
