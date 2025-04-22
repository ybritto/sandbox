import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Holiday } from '../../models/holiday.model';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {Chips} from 'primeng/chips';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-holiday-form',
  templateUrl: './holiday-form.component.html',
  imports: [
    Dialog,
    ReactiveFormsModule,
    InputText,
    DropdownModule,
    Chips,
    ButtonDirective
  ],
  styleUrls: ['./holiday-form.component.scss']
})
export class HolidayFormComponent implements OnChanges {
  @Input() holiday?: Holiday;
  @Input() visible = false;
  @Output() save = new EventEmitter<Holiday>();
  @Output() cancel = new EventEmitter<void>();

  holidayForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.holidayForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      type: ['public', Validators.required],
      teamTags: [[]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['holiday'] && this.holiday) {
      this.holidayForm.patchValue(this.holiday);
    }
  }

  submit(): void {
    if (this.holidayForm.valid) {
      const formValue = this.holidayForm.value;
      this.save.emit({
        ...this.holiday,
        ...formValue,
        id: this.holiday?.id || crypto.randomUUID()
      });
    }
  }

  close(): void {
    this.cancel.emit();
  }
}
