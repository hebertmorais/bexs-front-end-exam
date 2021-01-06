import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import Util from '../../../../common/utils';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  creditCardForm: any;
  cvvIsFocused = false;
  loading = false;

  constructor(
    private paymentService: PaymentService,
    private _snackBar: MatSnackBar
  ) {}

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
      cardInstallments: new FormControl('12', [Validators.required]),
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
  }

  pay() {
    this.loading = true;
    this.paymentService
      .pay(this.creditCardForm.getRawValue())
      .subscribe((res) => {
        setTimeout(() => {
          this.loading = false;
          this._snackBar.open('Pagamento feito com sucesso', 'OK', {
            duration: 4000,
          });
        }, 1500);
      });
  }
}
