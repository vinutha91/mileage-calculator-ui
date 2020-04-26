import { Component, Inject } from '@angular/core';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  errorSet = new Set<string>();
  showError = false;
}
