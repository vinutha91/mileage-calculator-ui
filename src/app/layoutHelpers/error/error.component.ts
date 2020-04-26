import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-custom-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent{
  constructor(){}
 /* errorList: Array<string> = [];*/
  errorSet = new Set<string>();

  @HostListener('document:myErrorEvent', ['$event', '$event.detail.errorMsg'])
  updateErrorNodes(event, errorMsg: string) {
    /*this.errorList.push(errorMsg);*/
    this.errorSet.add(errorMsg);
  }
}
