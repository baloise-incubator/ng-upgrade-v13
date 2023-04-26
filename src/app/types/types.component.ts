import { Component } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
})
export class TypesComponent {
  inputValue? = '';

  notificationColor: BalProps.BalNotificationColor = 'info';

  onInputChange(event: BalEvents.BalInputChange) {
    this.inputValue = event.detail;
    if (this.inputValue) {
      this.notificationColor = 'success';
    } else {
      this.notificationColor = 'danger';
    }
  }
}
