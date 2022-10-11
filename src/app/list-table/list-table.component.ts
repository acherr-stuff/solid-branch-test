import {Component, Input, OnInit} from '@angular/core';
import {DataItem} from "../classes/classes";


@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  @Input() tabData: DataItem[];

  constructor() {
  }

  ngOnInit(): void {

  }

}
