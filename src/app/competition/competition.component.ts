import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Competition } from 'src/models/Competition';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
})
export class CompetitionComponent implements OnInit {
  @Input() competition: Competition;

  public prettyStartDate;
  public prettyEndDate;

  public env = environment;

  constructor() { }

  ngOnInit() {
    this.prettyStartDate = moment(this.competition.start_time).format('ddd, MMM. Do YYYY');
    this.prettyEndDate = moment(this.competition.end_time).format('ddd, MMM. Do YYYY');
  }

}
