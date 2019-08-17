import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public login;
  constructor(private http: HttpClient, private router: Router) { }

  submitUser() {
    if (this.login) {
      sessionStorage.setItem('id', this.login);
      this.http.post('/api/newUser', {user: this.login}).subscribe((item) => {
        this.router.navigate(['/card-selector']);
      });
    }
  }

}
