import { title } from 'process';
import { ToDo } from './to-do';

describe('ToDo', () => {
  
  beforeEach(() => {
  });
  let todoObj = new ToDo();
  let arrLength: number = todoObj.toDoList.length;
  it('should create an instance', () => {
    expect(new ToDo()).toBeTruthy();
  });

  it('should add an item to Array and check the length', () => {
    expect(todoObj.add("title", "desc", "start", "end")).toBeGreaterThan(arrLength);
  });

  // it('should delete an item from the array', () => {
  //   expect(todoObj.delete(0)).toEqual(arrLength - 1);
  // });
});
