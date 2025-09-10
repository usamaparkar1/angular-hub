import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormValidatorService {

  getSearchInputError(searchFormControl: FormControl): string | null {
    if (searchFormControl?.touched || searchFormControl?.dirty) {
      if (searchFormControl.hasError('required')) {
        return 'Search Input is required';
      }
    }

    return null;
  }
}