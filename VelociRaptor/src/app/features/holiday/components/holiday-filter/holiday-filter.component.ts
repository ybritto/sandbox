import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-holiday-filter',
  templateUrl: './holiday-filter.component.html',
  imports: [
    FormsModule,
    DropdownModule
  ],
  styleUrls: ['./holiday-filter.component.scss']
})
export class HolidayFilterComponent {
  @Output() filterChange = new EventEmitter<{
    search: string;
    location: string;
    team: string;
  }>();

  search = '';
  location = '';
  team = '';

  emitFilter() {
    this.filterChange.emit({
      search: this.search,
      location: this.location,
      team: this.team
    });
  }
}
