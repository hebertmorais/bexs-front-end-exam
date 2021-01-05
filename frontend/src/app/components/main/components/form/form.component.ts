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
  cvvIsFocused = false;

  constructor() {}

  ngOnInit(): void {
    this.creditCardForm = new FormGroup({
      cardNumber: new FormControl('', [Util.luhnValidator()]),
      cardName: new FormControl('', [
        Validators.pattern(Util.namePattern),
        Validators.minLength(2),
        Validators.maxLength(26),
        Validators.required,
      ]),
      cardDate: new FormControl('', [
        Util.dateValidator(),
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      cardCvv: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(3),
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
  get hasCreditCardInfo() {
    return (
      this.cardNumber.value ||
      this.cardName.value ||
      this.cardDate.value ||
      this.cardDate.value ||
      this.cardCvv.value
    );
  }

  toggleCvvFocus(focus: string) {
    this.cvvIsFocused = focus == 'on';
    console.log('focus', this.cvvIsFocused)
  }
}
