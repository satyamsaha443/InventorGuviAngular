import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/security/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidenav: any;
toggleSidenav() {
  this.sidenav.toggle();
}

  constructor(private _router: Router, private authService: AuthenticationService) {
  }


  hasRoute(route: string) {
    return this._router.url.includes(route);
  }

  ngOnInit(): void {
  }

  logOut()
  {
    this.authService.logOut()
    this._router.navigate(['login'])
  }
}