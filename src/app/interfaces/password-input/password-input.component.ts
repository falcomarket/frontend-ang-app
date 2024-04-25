// password-input.component.ts
import { Component, Input , forwardRef,} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent {
  @Input() control!: FormControl;
  @Input() label: string = '';

  hide = true;
  value: string = '';

  onChange = (value: string) => {};
  onTouch = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Implement this method if needed
  }

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}
