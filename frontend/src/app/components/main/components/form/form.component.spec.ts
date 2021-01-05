import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  // confirm that compontent exists
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // confirm that empty form is invalid
  it('form should be invalid when empty', () => {
    expect(component.creditCardForm.valid).toBeFalsy();
  });

  // CREDIT CARD NAME TESTS
  it('credit card should be invalid when number less 15 chars', () => {
    const creditCardNumber = component.creditCardForm.controls['cardNumber'];
    creditCardNumber.setValue('4929162444982');
    fixture.detectChanges();
    const errors = creditCardNumber.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card should be invalid when numbers dont check in Luhn', () => {
    const creditCardNumber = component.creditCardForm.controls['cardNumber'];
    creditCardNumber.setValue('123412341234');
    fixture.detectChanges();
    const errors = creditCardNumber.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card should be valid when numbers check in Luhn', () => {
    const creditCardNumber = component.creditCardForm.controls['cardNumber'];
    creditCardNumber.setValue('4716694964155706');
    fixture.detectChanges();
    const errors = creditCardNumber.errors || {};
    expect(Object.keys(errors).length).toEqual(0);
  });

  // CREDIT CARD NAME TESTS
  it('credit card name should be invalid when holder name is longer than 26 characters', () => {
    const creditCardName = component.creditCardForm.controls['cardName'];
    creditCardName.setValue('João da Silva Pereira Santos Rocha');
    fixture.detectChanges();
    const errors = creditCardName.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card name should be invalid when holder name has no characters', () => {
    const creditCardName = component.creditCardForm.controls['cardName'];
    creditCardName.setValue('');
    fixture.detectChanges();
    const errors = creditCardName.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card name should be valid when holder name is between 2 and 26 characters long', () => {
    const creditCardName = component.creditCardForm.controls['cardName'];
    creditCardName.setValue('José da Silva');
    fixture.detectChanges();
    const errors = creditCardName.errors || {};
    expect(Object.keys(errors).length).toEqual(0);
  });

  // CREDIT CARD DATE TESTS
  it('credit card date should be invalid when is longer than 4 characters', () => {
    const creditCardDate = component.creditCardForm.controls['cardDate'];
    creditCardDate.setValue('12211');
    fixture.detectChanges();
    const errors = creditCardDate.errors || {};
    expect(Object.keys(errors).length).toBeDefined();
  });

  it('credit card date should be invalid when empty', () => {
    const creditCardDate = component.creditCardForm.controls['cardDate'];
    creditCardDate.setValue('');
    fixture.detectChanges();
    const errors = creditCardDate.errors || {};
    expect(Object.keys(errors).length).toBeDefined();
  });

  it('credit card date should be invalid when date is invalid', () => {
    const creditCardDate = component.creditCardForm.controls['cardDate'];
    creditCardDate.setValue('4444');
    fixture.detectChanges();
    const errors = creditCardDate.errors || {};
    expect(Object.keys(errors).length).toBeDefined();
  });

  it('credit card date should be invalid when date is before current date', () => {
    const creditCardDate = component.creditCardForm.controls['cardDate'];
    creditCardDate.setValue('1220');
    fixture.detectChanges();
    const errors = creditCardDate.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card date should be invalid when date month is greater than 12', () => {
    const creditCardDate = component.creditCardForm.controls['cardDate'];
    creditCardDate.setValue('1320');
    fixture.detectChanges();
    const errors = creditCardDate.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card date should be valid when date is after current date and smaller than 12', () => {
    const creditCardDate = component.creditCardForm.controls['cardDate'];
    creditCardDate.setValue('1221');
    fixture.detectChanges();
    const errors = creditCardDate.errors || {};
    expect(Object.keys(errors).length).toBe(0);
  });

  //CREDIT CARD CVV TEST
  it('credit card cvv should be invalid when it is longer than 3 characters', () => {
    const creditCardCvv = component.creditCardForm.controls['cardCvv'];
    creditCardCvv.setValue('4444');
    fixture.detectChanges();
    const errors = creditCardCvv.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card cvv should be invalid when it has no characters', () => {
    const creditCardCvv = component.creditCardForm.controls['cardCvv'];
    creditCardCvv.setValue('');
    fixture.detectChanges();
    const errors = creditCardCvv.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card cvv should be invalid when length is between 0 and 2', () => {
    const creditCardCvv = component.creditCardForm.controls['cardCvv'];
    creditCardCvv.setValue('21');
    fixture.detectChanges();
    const errors = creditCardCvv.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card cvv should be valid when length is 3', () => {
    const creditCardCvv = component.creditCardForm.controls['cardCvv'];
    creditCardCvv.setValue('315');
    fixture.detectChanges();
    const errors = creditCardCvv.errors || {};
    expect(Object.keys(errors).length).toEqual(0);
  });

  //CREDIT CARD INSTALLMENTS TEST
  it('credit card installments should be invalid when its not selected', () => {
    const creditCardInstallments =
      component.creditCardForm.controls['cardInstallments'];
    creditCardInstallments.setValue('');
    fixture.detectChanges();
    const errors = creditCardInstallments.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });

  it('credit card installments should be valid when its selected', () => {
    const creditCardInstallments =
      component.creditCardForm.controls['cardInstallments'];
    creditCardInstallments.setValue('12');
    fixture.detectChanges();
    const errors = creditCardInstallments.errors || {};
    expect(Object.keys(errors).length).toBeGreaterThan(0);
  });
});
