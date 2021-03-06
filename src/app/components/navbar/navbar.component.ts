import { Component, ElementRef, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public username: string;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private authService: AuthService) {
    this.location = location;
  }

  ngOnInit() {
    const user = this.authService.getUserFromLocalStorage();
    if (user) {
      this.username = user.username;
    }
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  logout() {
    this.authService.remove();
    this.router.navigate(['/login']).then(r => {
    });
  }
}
