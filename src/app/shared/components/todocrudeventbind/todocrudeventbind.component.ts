import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todocrudeventbind',
  templateUrl: './todocrudeventbind.component.html',
  styleUrls: ['./todocrudeventbind.component.scss']
})
export class TodocrudeventbindComponent implements OnInit {
  @ViewChild('todoitem') todoReff !: ElementRef;
  isInEditMode: boolean = false
  // formMode:"Add" |"Edit" = "Add"
  constructor(
    private _matsnackBar : MatSnackBar
  ) {
  }

  ngOnInit(): void {

  }
  todoarr: Array<Itodo> = [
    {
      toitem: "java",
      todoId: "123"
    },
    {
      toitem: "javascript",
      todoId: "658"
    }
  ];

  onToDoAdd(todoitemControl: HTMLInputElement) {
    if(this.todoarr.length>0){
      let todoObj = {
      toitem: todoitemControl.value,
      todoId: this.Uuid()
    }
    this.todoarr.unshift(todoObj);
    //now new li will be created on ui
    todoitemControl.value =''
    this._matsnackBar.open("new todoitem added successfully","close",{
      duration:3000,
      horizontalPosition:'left',
      verticalPosition:'top'
    })
    }
  }

  onToDoRemove(todoId: string) {
    let remove_id = todoId;
    let get_index = this.todoarr.findIndex(todo => todoId === remove_id)
    console.log(get_index);
    this.todoarr.splice(get_index, 1)
     this._matsnackBar.open(`todoitem with id: ${todoId} removed successfully`,"close",{
      duration:3000,
      horizontalPosition:'left',
      verticalPosition:'top'
    })
  }
  onTodoEdit(todoObj: Itodo) {
    //editmode on == true
    this.isInEditMode = true;
    console.log(todoObj);
    //find the edit object
    let Edit_id = todoObj.todoId;
    let UPdate_id = localStorage.setItem("Edit_id", Edit_id)

    //patch data in form
    this.todoReff.nativeElement.value = todoObj.toitem;
    
  }
  onTodoUpdate(todoitemControl: HTMLInputElement) {
    //update-id
    let UPdate_id = localStorage.getItem("Edit_id");
    localStorage.removeItem("Edit_id");

    //update obj
    if (UPdate_id) {
      let updated_obj: Itodo = {
        toitem: todoitemControl.value,
        todoId: UPdate_id
      }
      console.log(updated_obj);
      todoitemControl.value=''
      //update in array
      let get_index = this.todoarr.findIndex(todo => todo.todoId === UPdate_id);
      this.todoarr[get_index] = updated_obj;
      this.isInEditMode = false;
      this._matsnackBar.open(`new ${updated_obj.toitem} updated successfully`,"close",{
      duration:3000,
      horizontalPosition:'left',
      verticalPosition:'top'
    })
    }
  }

  Uuid = () => {
    return (
      String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
      const random = (Math.random() * 16) | 0;
      const value = character === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };




}
