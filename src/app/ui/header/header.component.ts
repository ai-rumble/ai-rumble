import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public env = environment;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  userIsLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
