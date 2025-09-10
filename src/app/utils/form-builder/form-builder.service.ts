import { SearchForm } from '../../interfaces/form/form-group';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormBuilderService {

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  createForm(): FormGroup<SearchForm> {
    return this._formBuilder.group({
      search: this._formBuilder.control<string | null>(null, Validators.required)
    }); 
  }
}