import { Injectable } from '@angular/core';
import {ErrorComponent} from './error.component';

@Injectable()
export class ErrorService {
  /*public isErrorShown = false;*/
  constructor(private errorComp: ErrorComponent) {
  }
  showGlobalError(data): any{
     /* if (this.isErrorShown){
        return false;
      }
      this.isErrorShown = true;*/
      if (data){
        this.errorComp.showError = true;
        this.errorComp.errorSet.add(data);
        this.errorTimer();
      }else{

      }

  }
  errorTimer(){
    setTimeout(() => {
      this.errorComp.showError = false;
      }, 5000);
  }
}
