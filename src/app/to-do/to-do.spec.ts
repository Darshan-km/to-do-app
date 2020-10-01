import { ToDo } from './to-do';

describe('ToDo', () => {
  let todoObj = new ToDo();
  it('should create an instance', () => {
    expect(new ToDo()).toBeTruthy();
  });

  
  it('should add an item to Array', () => {
    expect(todoObj.add()).toBeTruthy();
  });
});
