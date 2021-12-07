import { AbstractControl } from '@angular/forms';

export class MyValidators {
  static isValidPrice(control: AbstractControl) {
    const value = control.value;
    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }
}
