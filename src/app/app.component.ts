import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mdbSpinningPreloader: MDBSpinningPreloader,
              private titleService: Title) { }

  ngOnInit() {
    this.mdbSpinningPreloader.stop();

    this.titleService.setTitle(environment.appName);
  }
}
