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
      console.log('sends');
      sessionStorage.setItem('id', this.login);
      this.http.post('/api/newUser', {user: this.login}).subscribe((item) => {
        console.log('send');
        this.router.navigate(['/game']);
      });
    }
  }

}
