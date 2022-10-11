import { Component, OnInit } from '@angular/core';
import data from '../data/data.json';
import { NavItem, navItems} from "../classes/classes";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  navCards: NavItem[];
  transactionsCount: number = 0;

  constructor() {
    this.navCards = navItems;
    this.transactionsCount = Number(data.total);
  }

  ngOnInit(): void {
  }

  getCountOfTransactionsByType(type: string) {
    return JSON.parse(JSON.stringify(data.data)).filter(item => item.type === type).length
  }
}
