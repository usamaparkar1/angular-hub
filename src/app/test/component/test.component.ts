import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TestService } from '../service/test.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  styleUrl: './test.component.scss',
  templateUrl: './test.component.html',
  imports: [CommonModule, ReactiveFormsModule]
})

export class TestComponent implements OnInit {

  testForm!: FormGroup;

  constructor(
    private _testService: TestService
  ) {}

  ngOnInit(): void {}

  /** @description Example for shareReplay usage. */
  saveDuplicateHttpCallsInMemory(productId: string) {
    const response = this._testService.saveDuplicateHttpCallsInMemory(productId);
  }
}