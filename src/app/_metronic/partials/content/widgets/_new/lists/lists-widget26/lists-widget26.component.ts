import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-widget26',
  templateUrl: './lists-widget26.component.html',
  styleUrls: ['./lists-widget26.component.scss'],
})
export class ListsWidget26Component implements OnInit {
  rows: Array<{ description: string }>;

  constructor() {}

  ngOnInit(): void {
    this.rows = [
      { description: 'Reports' },
      { description: 'Disparities' },
      { description: 'Stock Transfers' },
    ];
  }
}
