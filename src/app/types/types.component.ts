import { Component } from '@angular/core';
import type { Props, Events } from '@baloise/design-system-components';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
})
export class TypesComponent {
  inputValue? = '';

  notificationColor: Props.BalNotificationColor = 'info';

  onInputChange(event: Events.BalInputChange) {
    this.inputValue = event.detail;
    if (this.inputValue) {
      this.notificationColor = 'success';
    } else {
      this.notificationColor = 'danger';
    }
  }
}
