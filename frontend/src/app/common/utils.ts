import { ValidatorFn, AbstractControl } from '@angular/forms';

export default class Utils {
  static namePattern = /(?<! )[-a-zA-Z' ]{2,26}/;
  static datePattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

  static dateValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const controlValue = control.value;
      const dateRegex = new RegExp(Utils.datePattern);

      const todayDate = new Date();
      const currentMonthMM = todayDate.getMonth() + 1;
      const currentYearYY = parseInt(
        todayDate.getFullYear().toString().substr(-2)
      );

      const inputMonthMM = parseInt(controlValue.substring(0, 2));
      const inputYearYY = parseInt(controlValue.substring(2, 4));

      const isValidDate =
        inputYearYY >= currentYearYY && inputMonthMM >= currentMonthMM;
      const isValidRegex = dateRegex.test(control.value);
      return isValidDate && isValidRegex
        ? null
        : { dateCheck: isValidDate && isValidRegex };
    };
  }

  static luhnValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const isValid = Utils.luhnCheck(control.value);
      return isValid ? null : { luhnCheck: isValid };
    };
  }
  static luhnCheck = (cardNumber: string): boolean => {
    if (!cardNumber) {
      return false;
    }

    // Remove all whitespaces from card number.
    cardNumber = cardNumber.replace(/\s/g, '');

    // 1. Remove last digit;
    const lastDigit = Number(cardNumber[cardNumber.length - 1]);

    // 2. Reverse card number
    const reverseCardNumber = cardNumber
      .slice(0, cardNumber.length - 1)
      .split('')
      .reverse()
      .map((x) => Number(x));

    let sum = 0;

    // 3. + 4. Multiply by 2 every digit on odd position.
    // Subtract 9 if digit > 9
    for (let i = 0; i <= reverseCardNumber.length - 1; i += 2) {
      reverseCardNumber[i] = reverseCardNumber[i] * 2;
      if (reverseCardNumber[i] > 9) {
        reverseCardNumber[i] = reverseCardNumber[i] - 9;
      }
    }

    // 5. Make the sum of obtained values from step 4.
    sum = reverseCardNumber.reduce((acc, currValue) => acc + currValue, 0);

    // 6. Calculate modulo 10 of the sum from step 5 and the last digit.
    // If it's 0, you have a valid card number :)
    console.log('here');
    return (sum + lastDigit) % 10 === 0;
  };
}
