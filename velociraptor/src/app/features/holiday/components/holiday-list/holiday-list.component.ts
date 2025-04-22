import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Holiday} from "../../models/holiday.model";
import {Card} from "primeng/card";
import {DatePipe, NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {ButtonDirective} from "primeng/button";

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
    ButtonDirective
  ],
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent {
  @Input() holidays: Holiday[] = [];
  @Output() edit = new EventEmitter<Holiday>();
  @Output() delete = new EventEmitter<Holiday>();

  onEdit(holiday: Holiday) {
    this.edit.emit(holiday);
  }

  onDelete(holiday: Holiday) {
    this.delete.emit(holiday);
  }

}
