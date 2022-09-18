import { Component } from '@angular/core';
import { utilFormatNumber } from '@fundamentalconf/util-format-number';

@Component({
  selector: 'fundamentalconf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'awesome-ui';

  constructor() {
    console.log(utilFormatNumber(1000));
  }
}
