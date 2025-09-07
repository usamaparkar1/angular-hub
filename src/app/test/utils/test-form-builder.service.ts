import { FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestFormBuilderService {

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  createTestForm(): FormGroup {
    return this._formBuilder.group({
      search: [null]
    }); 
  }
}