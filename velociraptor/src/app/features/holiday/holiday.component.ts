import {Component, OnInit} from '@angular/core';
import {Holiday} from './models/holiday.model';
import {HolidayFilterComponent} from "./components/holiday-filter/holiday-filter.component";
import {HolidayListComponent} from "./components/holiday-list/holiday-list.component";
import {ButtonDirective} from "primeng/button";
import {HolidayFormComponent} from "./components/holiday-form/holiday-form.component";

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  imports: [
    HolidayFilterComponent,
    HolidayListComponent,
    ButtonDirective,
    HolidayFormComponent
  ],
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {
  holidays: Holiday[] = [];
  filteredHolidays: Holiday[] = [];
  formOpen = false;
  selectedHoliday?: Holiday;
  currentFilters = {
    search: '',
    location: '',
    team: ''
  };

  ngOnInit(): void {
    this.holidays = [
      {
        id: '1',
        name: 'Reunification Day',
        date: '2025-10-03',
        location: 'Germany',
        type: 'public',
        teamTags: ['EU Team']
      },
      {
        id: '2',
        name: 'Company Day Off',
        date: '2025-11-15',
        location: 'Global',
        type: 'company',
        teamTags: ['All Teams']
      },
      {
        id: '3',
        name: 'Carnaval',
        date: '2025-03-04',
        location: 'Brazil',
        type: 'public',
        teamTags: ['LATAM Team']
      }
    ];
    this.filteredHolidays = this.holidays;
  }

  openCreateHoliday() {
    this.selectedHoliday = undefined;
    this.formOpen = true;
  }

  onSaveHoliday(saved: Holiday) {
    const index = this.holidays.findIndex(h => h.id === saved.id);
    if (index > -1) {
      this.holidays[index] = saved;
    } else {
      this.holidays.push(saved);
    }
    this.applyFilter(this.currentFilters);
    this.formOpen = false;
  }

  applyFilter(filter: { search: string; location: string; team: string }) {
    this.filteredHolidays = this.holidays.filter(h => {
      return (
          (!filter.search || h.name.toLowerCase().includes(filter.search.toLowerCase())) &&
          (!filter.location || h.location === filter.location) &&
          (!filter.team || h.teamTags?.includes(filter.team))
      );
    });
  }

}
