import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-databindingpractice',
  templateUrl: './databindingpractice.component.html',
  styleUrls: ['./databindingpractice.component.scss']
})
export class DatabindingpracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@ViewChild("abc") inputReff !:ElementRef
onkeyupCb(eve : Event){
  // console.log(eve.target)
console.log(`User has typed : `,(eve.target as HTMLInputElement).value)
}
onbtnClickCb(){
// console.log(para.value);
console.log(this.inputReff.nativeElement.value)
}
addbyReff(inputReff : HTMLInputElement){
console.log(inputReff.value);

}
  
}
