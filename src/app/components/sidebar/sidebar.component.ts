import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [TieredMenuModule, SidebarModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  isCollapsed = true; // Estado del sidebar

  items = [
    { label: ' Home', icon: 'pi pi-home', routerLink: '/home' },
    { label: ' Profile', icon: 'pi pi-user', routerLink: '/profile' },
    { label: ' Messages', icon: 'pi pi-envelope', routerLink: '/messages' },
    { label: ' Settings', icon: 'pi pi-cog', routerLink: '/settings' }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
