import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  onClickTypography() {
    this.router.navigateByUrl('/typo-graphy');
  }

  onClickMatButtons() {
    this.router.navigateByUrl('/material-button');
  }

  onClickIcons() {
    this.router.navigateByUrl('/material-icons');
  }

  onClickBadges() {
    this.router.navigateByUrl('/material-badge');
  }

  onClickProgress(){
    this.router.navigateByUrl('/material-progress');
  }

  onClickNavBar(){
    this.router.navigateByUrl('/material-navbar');
  }
  onClickSideNav(){
    this.router.navigateByUrl('/material-sidenav');
  }
}
