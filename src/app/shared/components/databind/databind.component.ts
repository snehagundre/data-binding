import { Component } from "@angular/core";


@Component({
    selector : "app-databind",
    templateUrl : "./databind.component.html",
    styleUrls : ["./databind.component.scss"]
})

export class DatabindComponent{
onKeyUpCb(eve : Event){
console.log((eve.target as HTMLInputElement).value)
}
onBtnClick(input : HTMLInputElement){
console.log(input.value)
}

}