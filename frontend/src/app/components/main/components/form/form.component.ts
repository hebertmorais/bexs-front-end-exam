import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import Util from '../../../../common/utils';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  creditCardForm: any;

  constructor() {}

  ngOnInit(): void {
    this.creditCardForm = new FormGroup({
      cardNumber: new FormControl('', [Util.luhnValidator()]),
      cardName: new FormControl('', [
        Validators.pattern(Util.namePattern),
        Validators.required,
      ]),
      cardDate: new FormControl('', [
        Util.dateValidator(),
        Validators.required,
      ]),
      cardCvv: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      cardInstallments: new FormControl('', [Validators.required]),
    });
  }

  get cardNumber() {
    return this.creditCardForm.get('cardNumber');
  }
  get cardName() {
    return this.creditCardForm.get('cardName');
  }
  get cardDate() {
    return this.creditCardForm.get('cardDate');
  }
  get cardCvv() {
    return this.creditCardForm.get('cardCvv');
  }
  get cardInstallments() {
    return this.creditCardForm.get('cardInstallments');
  }
}
