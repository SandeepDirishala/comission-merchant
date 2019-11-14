import {Component, OnInit} from '@angular/core';
import {Person} from "../person";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  public person: Person = {lots: 1};
  public bags: any[];
  public lotsOfBags: any[] = [];
  public bagWieghts: any[] = [];
  public bagsList: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  generateLots() {
    this.bags = Array(this.person.lots).fill(0).map((x, i) => i);
  }

  createBagsArr() {
    console.log(this.lotsOfBags);

    this.bagsList.forEach((k, j) => {
      console.log(this.bagsList);
      this.lotsOfBags[j] = Array(k).fill(0).map((x, i) => i);
      this.bagWieghts[j] = Array(k).fill(0).map((x, i) => []);
      console.log(k, j, this.bagWieghts);

    });

  }

  cal() {
    console.log(this.bagWieghts.reduce((a, b) => a + b));
  }

}
