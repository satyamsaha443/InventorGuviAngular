import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import { AuthenticationService } from 'src/app/main/security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations:[],
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends URLLoader  implements OnInit {

  username = 'admin'
  password = 'admin'
  invalidLogin = false
  errorMessage=''

  constructor(private router: Router,
    private loginservice: AuthenticationService) {
      super()
     }
  
  ngOnInit() {
    
  }

  doLogin(form: NgForm) {
    if (!form.valid) {
      this.invalidLogin = true;
      this.errorMessage = "Form is not valid";
      return;
    }

    const { username, password, role } = form.value;

    this.loginservice.authenticate(username, password).subscribe(
      data => {
        this.redirectBasedOnRole(role);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true
        this.errorMessage=error.message
        super.show('Inventoryy', this.errorMessage, 'error')
      }
    )
    

  }

  private redirectBasedOnRole(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/dashboard']);
        break;
      case 'manager':
        this.router.navigate(['/supplier']);
        break;
      case 'staff':
        this.router.navigate(['/client']);
        break;
      default:
        // Optionally handle unknown roles
        this.router.navigate(['/default-route']);
        break;
    }
  }

}