import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  readonly controls = {
    saurceControl: new FormControl('', Validators.required),
    categoryControl: new FormControl('', Validators.required),
    firstReceiptDateControl: new FormControl('', Validators.required),
    fUReceiptDateControl: new FormControl('', Validators.required),
  };
  dataForm: FormGroup;

  versionList: object[] = [];
  referenceList: object[] = [];

  @Input()
  set selectedControls(list: string[]) {
    this._selectedControls = list;
  }
  get selectedControls() {
    return this._selectedControls;
  }
  _selectedControls: string[];

  constructor() {
    this.dataForm = new FormGroup(this.controls);
    this.versionList.push({
      version: '1',
      receiptDate: '11/4/2021',
      centralReceiptDate: '5/6/2021',
      disposition: 'true',
      comments: 'no comments',
    });
    this.referenceList.push({
      no: '1',
      type: 'A',
      id: '12785',
    });
  }

  ngOnInit(): void {}

  addRow(key: string) {
    if (key === 'version') {
      this.versionList.push({
        version: '',
        receiptDate: '',
        centralReceiptDate: '',
        disposition: '',
        comments: '',
      });
    } else {
      this.referenceList.push({
        no: '',
        type: '',
        id: '',
      });
    }
  }
}
