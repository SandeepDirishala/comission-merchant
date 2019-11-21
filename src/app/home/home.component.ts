import {Component, OnInit} from '@angular/core';
import {Person} from '../person';

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
  public listOfLotPricing: any[] = [];
  public percentage: any = 5;
  public hamali: any = 10;
  displayedColumns: string[] = ['bags', 'weight', 'price', 'total'];

  constructor() {
  }

  ngOnInit() {
  }

  generateLots() {
    this.bags = Array(this.person.lots).fill(0).map((x, i) => i);
    this.bagsList = Array(this.person.lots).fill(0).map((x, i) => [{size: null, price: null}]);

  }

  createBagsArr() {
    console.log(this.lotsOfBags);

    this.bagsList.forEach((k, j) => {
      this.lotsOfBags[j] = Array(k.size).fill(0).map((x, i) => i);
      this.bagWieghts[j] = Array(k.size).fill(0).map((x, i) => []);
    });

  }

  cal() {
    this.bagWieghts.forEach((weights, i) => {
      const weightsSum = (weights.reduce((a, b) => a + b)) / 100;
      const listofLotPrcingItem = {
        bags: this.bagsList[i].size,
        weight: weightsSum,
        price: this.bagsList[i].price,
        total: weightsSum * this.bagsList[i].price
      };
      this.listOfLotPricing.push(listofLotPrcingItem);
      console.log(listofLotPrcingItem);
    });
    console.log(this.listOfLotPricing.map(a => a.total).reduce((a, b) => a + b));
  }

  addWeight(j, i, valueToBeAdded) {
    this.bagWieghts[j][i] = Number(this.bagWieghts[j][i]) + valueToBeAdded;
  }

}
