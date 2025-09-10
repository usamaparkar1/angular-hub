import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
})

export class InputComponent {

  // Required Inputs
  inputId = input.required<string>();
  labelName = input.required<string>();
  inputTitle = input.required<string>(); // You need to ensure placeholder and title always resolve to a non-empty string. Axe doesn’t just check for the attribute — it also checks that the rendered value is non-empty.
  inputType = input.required<string>();
  inputFormControl = input.required<FormControl>();

  // Non-Required Inputs
  autoCompleteOn: "on" | "off" = "on";

  getErrorFn = input<(control: FormControl) => string | null>();

  getInputError(): string | null {
    const fn = this.getErrorFn();
    const ctrl = this.inputFormControl();

    return fn && ctrl ? fn(ctrl) : null;
  }
}