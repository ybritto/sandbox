import { Component, Input } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() collapsed = false;

  navItems = [
    { icon: 'pi pi-home', label: 'Dashboard', route: '/dashboard' },
    { icon: 'pi pi-users', label: 'Teams', route: '/teams' },
    { icon: 'pi pi-calendar', label: 'Planning', route: '/planning' },
    { icon: 'pi pi-chart-line', label: 'Reports', route: '/reports' },
    { icon: 'pi pi-cog', label: 'Settings', route: '/settings' }
  ];
}
