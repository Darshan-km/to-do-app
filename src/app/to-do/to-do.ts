import { element } from 'protractor';
export class ToDo {
  public id: number;
  public title: string;
  public desc: string;
  public startDate: string;
  public endDate: string;
  public toDoList = [
    {
      id: 1,
      title: 'my to do 1',
      desc: 'Create an to do app 1',
      start: '29-sep-2020',
      end: '30-sep-2020',
    },
    {
      id: 2,
      title: 'my to do 2',
      desc: 'Create an to do app 2',
      start: '30-sep-2020',
      end: '1-oct-2020',
    },
    {
      id: 3,
      title: 'my to do 3',
      desc: 'Create an to do app 3',
      start: '1-oct-2020',
      end: '2-oct-2020',
    },
  ];
  public add() {
    this.toDoList.push({
        id: 4,
        title: 'my to do 4',
        desc: 'Create an to do app 4',
        start: '1-oct-2020',
        end: '2-oct-2020',
      });
    this.display();
  }

  public update(id, element) {
    this.toDoList.filter((ele) => {
      if (ele.id === id) {
        this.toDoList.splice(this.toDoList.indexOf(id), 1, element);
      }
    });
    this.display();
  }

  public delete(id) {
    this.toDoList.splice(this.toDoList.indexOf(id), 1);
    this.display();
  }

  public display() {
    return this.toDoList;
  }

  public reset(){
      this.toDoList = [
        {
          id: 1,
          title: 'my to do 1',
          desc: 'Create an to do app 1',
          start: '29-sep-2020',
          end: '30-sep-2020',
        },
        {
          id: 2,
          title: 'my to do 2',
          desc: 'Create an to do app 2',
          start: '30-sep-2020',
          end: '1-oct-2020',
        },
        {
          id: 3,
          title: 'my to do 3',
          desc: 'Create an to do app 3',
          start: '1-oct-2020',
          end: '2-oct-2020',
        },
      ]
  }
}
