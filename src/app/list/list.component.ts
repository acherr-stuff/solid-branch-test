import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { NavItem, navItems, DataItem } from "../classes/classes";
import data from '../data/data.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navTabs: NavItem[];
  activeTab: NavItem;
  tabDataList: DataItem[];

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
  ) {
    this.navTabs = navItems;
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['tab'] === undefined) {
        this.router.navigate(['/navigator'], { queryParams: { tab: 0 }})
      } else {
        this.activeTab = this.navTabs.find(item => item.index === +params['tab']);
        this.tabDataList = JSON.parse(JSON.stringify(data.data)).filter(item => item.type === this.activeTab.value);
      }
    })
  }

  ngOnInit(): void {
  }

}
