import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../../models/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentsArr: Array<Istd> = [{
    fname: " sneha",
    lname: "gundre",
    email: "sneha@gmail.com",
    contact: 677989989,
    stdId: "6566767"
  },
  {
    fname: " shubham",
    lname: "gundre",
    email: "shubham@gmail.com",
    contact: 677989989,
    stdId: "6566767"
  }]

  isInEditMode: boolean = false;
  @ViewChild('fname') fnameRef !: ElementRef;
  @ViewChild('lname') lnameRef !: ElementRef;
  @ViewChild('email') emailRef !: ElementRef;
  @ViewChild('contact') contactRef !: ElementRef;
  constructor(
    private _matSnackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  onStdAdd() {
    let newStd: Istd = {
      fname: this.fnameRef.nativeElement.value,
      lname: this.lnameRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      contact: +this.contactRef.nativeElement.value,
      stdId: this.Uuid()
    }
    if (newStd.contact !=+'', newStd.fname != '', newStd.lname != '', newStd.email != '') {
      this.studentsArr.unshift(newStd)
      this.fnameRef.nativeElement.value = '',
      this.lnameRef.nativeElement.value = '',
      this.emailRef.nativeElement.value = '',
      this.contactRef.nativeElement.value = ''
      this._matSnackbar.open(`The new student ${newStd.fname} is added successfully`, 'close',
        {
          duration: 3000,
          horizontalPosition: 'left',
          verticalPosition: "top"
        }
      )
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
  onstdRemove(stdObj: Istd) {
    //take obj which is clicked
    let findIndex = this.studentsArr.findIndex(std => std.stdId === stdObj.stdId)
    //remove it from array
    this.studentsArr.splice(findIndex, 1)
    this._matSnackbar.open(`The student ${stdObj.fname} is removed successfully`, 'close',
      {
        duration: 3000,
        horizontalPosition: 'left',
        verticalPosition: "top"
      })
  }
  onStdEdit(stdObj: Istd) {
    this.isInEditMode = true;
    //find the edit Object
    let Edit_id = stdObj.stdId;
    //store the edit id in local storage as the same obj_id is required to update the obj
    let update_id = localStorage.setItem("Edit_id", Edit_id);
    this.fnameRef.nativeElement.value = stdObj.fname;
    this.lnameRef.nativeElement.value = stdObj.lname;
    this.emailRef.nativeElement.value = stdObj.email;
    this.contactRef.nativeElement.value = stdObj.contact;
  }
  onStdUpdate() {
    //get the update-id
    let updated_id = localStorage.getItem("Edit_id");
    localStorage.removeItem("Edit_id");
    //update the patched obj
    if (updated_id) {
      let updatedObj: Istd = {
        fname: this.fnameRef.nativeElement.value,
        lname: this.lnameRef.nativeElement.value,
        email: this.emailRef.nativeElement.value,
        contact: this.contactRef.nativeElement.value,
        stdId: updated_id
      }
      //update in array
      let get_index = this.studentsArr.findIndex(std => std.stdId === updated_id);
      this.studentsArr[get_index] = updatedObj;
      this.fnameRef.nativeElement.value = ''
      this.lnameRef.nativeElement.value = ''
      this.emailRef.nativeElement.value = ''
      this.contactRef.nativeElement.value = ''

      this.isInEditMode = false;
      this._matSnackbar.open(`The student ${updatedObj.fname} is updated successfully`, 'close',
        {
          duration: 3000,
          horizontalPosition: 'left',
          verticalPosition: "top"
        })
    }
  }
}
