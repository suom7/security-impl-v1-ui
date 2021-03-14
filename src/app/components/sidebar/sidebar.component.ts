import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: ''},
  {path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: ''},
  {path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: ''},
  {path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: ''},
  {path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: ''},
  {path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: ''}
];

export const ROUTES_ADMIN: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: ''},
  {path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: ''},
  {path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: ''},
  {path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: ''},
];

export const ROUTES_EDITOR: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: ''},
  {path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: ''},
];

export const ROUTES_USER: RouteInfo[] = [
  {path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    const user = this.authService.getUserFromLocalStorage();
    if (user) {
      if (user.roles.includes('ROLE_ADMIN')) {
        this.menuItems = ROUTES_ADMIN.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
        });
      } else if (user.roles.includes('ROLE_EDITOR')) {
        this.menuItems = ROUTES_EDITOR.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
        });
      } else if (user.roles.includes('ROLE_USER')) {
        this.menuItems = ROUTES_USER.filter(menuItem => menuItem);
        this.router.events.subscribe((event) => {
          this.isCollapsed = true;
        });
      }
    }
  }

  logout() {
    this.authService.remove();
    this.router.navigate(['/login']).then(r => {
    });
  }
}
