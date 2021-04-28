import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input()
  set controlsList(list: string[]) {
    this._controlsList = list;
  }
  get controlsList() {
    return this._controlsList;
  }
  _controlsList: string[];

  @Output() selectedControlsEmit = new EventEmitter<string[]>();

  selectedControls: string[];

  constructor() {}

  ngOnInit(): void {}

  setSelectedControls(event: string[]) {
    this.selectedControlsEmit.emit(event);
  }
}
