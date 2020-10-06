import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToDoComponent } from './to-do.component';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show Heading title as To Do application', () => {
    expect(fixture.debugElement.query(By.css("h2")).nativeElement.textContent).toContain("To Do application")
   });

   it('Should contain button text as "Add"', () => {
    expect (fixture.debugElement.nativeElement.querySelector('form button').textContent).toContain("Add");
   });

//    it('check if on-button (click) event changes the value in the HTML', async() => {
//     const td = fixture.debugElement.query(By.css('tbody td')).nativeElement;
//     expect(component.toDoObj).toBeUndefined();
//     component.toDoObj.add("title", "desc", "start", "end");
//     fixture.detectChanges();
//     expect(td.).toEqual(component.clickMe);

//  });
});
