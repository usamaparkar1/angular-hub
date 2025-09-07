import { TestFormBuilderService } from '../utils/test-form-builder.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TestService } from '../service/test.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-test',
    styleUrl: './test.component.scss',
    templateUrl: './test.component.html',
    imports: [CommonModule, ReactiveFormsModule]
})

export class TestComponent implements OnInit, AfterViewInit {

  testForm: FormGroup = this._testFormBuilderService.createTestForm();

  constructor(
    private _testService: TestService,
    private _testFormBuilderService: TestFormBuilderService
  ) {
  }

  ngOnInit(): void {
    this._setupTestPage();
  }

  ngAfterViewInit(): void {
    this._setupTestPageAfterViewInit();
  }

  private _setupTestPage() {
    this._setupEventSubscriptionForSearchInput();
  }

  private _setupEventSubscriptionForSearchInput(): void {
    this.testForm.get('search')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchInput: any) =>
        this._testService.avoidDuplicateHttpCalls(searchInput)
      )
    ).subscribe({
      next: (result) => console.log('API Result:', result),
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Completed')
    });
  }

  private _setupTestPageAfterViewInit() {
  }

  /** @description Example for shareReplay usage. */
  saveDuplicateHttpCallsInMemory(productId: string) {
    const response = this._testService.saveDuplicateHttpCallsInMemory(productId);
  }
}

// Migrate the form updates to a form component later on