import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CreditCardData {
  cardNumber: string;
  cardName: string;
  cardDate: string;
  cardCvv: string;
  cardInstallments: string;
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  pay(creditCardData: CreditCardData) {
    return this.http.post<CreditCardData>(
      'http://localhost:3000/pagar',
      creditCardData,
      {}
    );
  }
}
