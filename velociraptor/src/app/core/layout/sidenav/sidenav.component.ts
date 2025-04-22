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
    { icon: 'pi pi-heart-fill', label: 'Holidays', route: '/holidays' }
  ];
}
