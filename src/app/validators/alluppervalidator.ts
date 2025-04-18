import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function allUpperValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log("sto validando...");

      if (control.value === control.value.toUpperCase()) {
        return null
      }
      
      return  {'orrore': true, 'correctValue': control.value.toUpperCase()};
    };
  }