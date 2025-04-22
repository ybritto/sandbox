import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarModule, PanelMenuModule, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  sidebarCollapsed = false;

  sidebarItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Holidays', icon: 'pi pi-calendar', routerLink: '/holidays' },
    { label: 'Planner', icon: 'pi pi-calendar', routerLink: '/planner' },
    { label: 'Teams', icon: 'pi pi-users', routerLink: '/teams' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/settings' }
  ];

  toggleSidebarCollapse() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
