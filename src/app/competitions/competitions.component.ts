import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/models/Competition';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss'],
})
export class CompetitionsComponent implements OnInit {

  public competitions: Competition[];

  constructor(private strapiService: StrapiService) { }

  ngOnInit() {
    this.strapiService.getAllCompetitions().subscribe((res) => {
      this.competitions = res;
      console.log(JSON.stringify(this.competitions));
    });
  }

}
