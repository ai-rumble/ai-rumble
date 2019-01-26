import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public env = environment;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(environment.appName);
  }
}
