import { element } from 'protractor';
export class ToDo {
  title:string;
  desc:string;
  start:string;
  end:string;

  public toDoList = [
    {
      title: 'my to do 1',
      desc: 'Create an to do app 1',
      start: '29-sep-2020',
      end: '30-sep-2020',
    },
    {
      title: 'my to do 2',
      desc: 'Create an to do app 2',
      start: '30-sep-2020',
      end: '1-oct-2020',
    },
    {
      title: 'my to do 3',
      desc: 'Create an to do app 3',
      start: '1-oct-2020',
      end: '2-oct-2020',
    },
  ];

  // Add To do to list "toDoList"
  public add(title:string, desc:string, start:string, end:string ) {
    this.toDoList.push({
        title: title,
        desc: desc,
        start: start,
        end: end
      });
    this.emptyInputFields();  
    this.display();
    return  this.toDoList.length;
  }

  // Update new data to  "To do to list".
  public update(id) {
    this.toDoList.filter((ele, index)=>{
      if(id===index){
      this.title = ele.title;
      this.desc = ele.desc;
      this.start=ele.start;
      this.end=ele.end;
      this.toDoList.splice(id,1);
      }
      this.display();
    })
  }

  // Delete object from to do list 
  public delete(id:number) {
    this.toDoList.splice(id, 1);
    this.display();
  }


  // Display array
  public display() {
    return this.toDoList;
  }

  
  // Reset all input value to empty 
  emptyInputFields(){
    this.title = '';
      this.desc = '';
      this.start= '';
      this.end= '';
  }
}
