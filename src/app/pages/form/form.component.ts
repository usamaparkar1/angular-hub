import { FormSubmissionService } from '../../services/form-submission/form-submission.service';
import { FormValidatorService } from '../../utils/form-validator/form-validator.service';
import { FormBuilderService } from '../../utils/form-builder/form-builder.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  imports: [ReactiveFormsModule]
})

export class FormComponent implements OnInit {

  formGroup = this._formBuilder.createForm();

  constructor(
    private _formBuilder: FormBuilderService,
    private _formValidator: FormValidatorService,
    private _formSubmissionService: FormSubmissionService
  ) {}

  ngOnInit(): void {
    this._setupFormPage();
  }

  private _setupFormPage() {
    this._setupEventSubscriptions();
  }

  private _setupEventSubscriptions() {
    this._setupEventSubscriptionForSearchInput();
  }

  private _setupEventSubscriptionForSearchInput(): void {
    this.searchFormControl?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchInput: any) =>
        this._formSubmissionService.avoidDuplicateHttpCalls(searchInput)
      )
    ).subscribe({
      next: (result) => console.log('API Result:', result),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Completed')
    });
  }

  get searchFormControl(): FormControl {
    return this.formGroup.controls.search;
  }

  getSearchInputError = (control: FormControl) => {
    return this._formValidator.getSearchInputError(control);
  };
}