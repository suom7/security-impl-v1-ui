import { Component, OnDestroy, OnInit } from '@angular/core';
import { Login } from '../../model/login';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { TestService } from '../../services/test/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public model = new Login();

  constructor(
    public authService: AuthService,
    private router: Router,
    public testService: TestService) {
  }

  ngOnInit() {
    const user = this.authService.getUserFromLocalStorage();
    if (user) {
      this.router.navigate(['/dashboard']).then(r => {
      });
    }
  }

  ngOnDestroy() {
  }

  onSubmit(value: Login) {
    this.authService.login(value).subscribe(data => {
      this.authService.setUserToLocalStorage(data);
      // testing
      this.testService.findAll().subscribe(res => {
        console.log(res);
      });
      if (data.roles.includes('ROLE_ADMIN') || data.roles.includes('ROLE_EDITOR')) {
        this.router.navigate(['/dashboard']).then(r => {
        });
      } else if (data.roles.includes('ROLE_USER')) {
        this.router.navigate(['/tables']).then(r => {
        });
      }
    });
  }
}
