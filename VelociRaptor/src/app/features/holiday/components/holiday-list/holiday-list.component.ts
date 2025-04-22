import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Holiday} from "../../models/holiday.model";
import {Card} from "primeng/card";
import {DatePipe, NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {ButtonDirective} from "primeng/button";
import {Checkbox} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  imports: [
    Card,
    NgForOf,
    DatePipe,
    NgClass,
    NgIf,
    TitleCasePipe,
    ButtonDirective,
    Checkbox,
    FormsModule
  ],
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent {
  @Input() holidays: Holiday[] = [];
  @Input() selectionMode = false;
  @Input() selectedIds = new Set<string>();

  @Output() toggle = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Holiday>();
  @Output() delete = new EventEmitter<Holiday>();

  onEdit(holiday: Holiday) {
    this.edit.emit(holiday);
  }

  onDelete(holiday: Holiday) {
    this.delete.emit(holiday);
  }

}
