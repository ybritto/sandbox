import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';
import {Dialog} from 'primeng/dialog';
import {Toast} from 'primeng/toast';
import {Calendar} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {InputTextarea} from 'primeng/inputtextarea';
import {ButtonDirective} from 'primeng/button';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-holiday-management',
  templateUrl: './holiday-management.component.html',
  styleUrls: ['./holiday-management.component.scss'],
  providers: [ConfirmationService, MessageService],
  imports: [
    TableModule,
    Dialog,
    Toast,
    Calendar,
    FormsModule,
    InputTextarea,
    ButtonDirective,
    ConfirmDialog,
    DatePipe
  ]
})
export class HolidayManagementComponent {
  holidays: any[] = [];
  holidayDialog: boolean = false;
  holidayDialogTitle: string = 'Add Holiday';
  holiday: any = {};
  selectedHoliday: any;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  showAddDialog() {
    this.holiday = {};
    this.holidayDialogTitle = 'Add Holiday';
    this.holidayDialog = true;
  }

  editHoliday(holiday: any) {
    this.holiday = { ...holiday };
    this.holidayDialogTitle = 'Edit Holiday';
    this.holidayDialog = true;
  }

  saveHoliday() {
    if (this.holiday.id) {
      // Update existing holiday
      const index = this.holidays.findIndex((h) => h.id === this.holiday.id);
      this.holidays[index] = this.holiday;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Holiday updated successfully' });
    } else {
      // Add new holiday
      this.holiday.id = new Date().getTime(); // Generate a unique ID
      this.holidays.push(this.holiday);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Holiday added successfully' });
    }
    this.holidayDialog = false;
  }

  confirmDelete(holiday: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the holiday "${holiday.name}"?`,
      header: 'Confirm Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.holidays = this.holidays.filter((h) => h.id !== holiday.id);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Holiday deleted successfully' });
      },
    });
  }

  hideDialog() {
    this.holidayDialog = false;
  }
}
