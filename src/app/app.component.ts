import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sample-form';
  selectedControls: string[];

  controlsList = [
    'Saurce',
    'Category',
    'First Receipt Date',
    'FU Receipt Date',
    'Reference',
    'Version',
  ];

  setSelectedControls(event: string[]) {
    this.selectedControls = event;
  }
}
