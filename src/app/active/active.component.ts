import { Component } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
})
export class ActiveComponent {
  isPopoverActive = true;

  onPopoverChange(event: any) {
    this.isPopoverActive = event.detail;
  }
}
