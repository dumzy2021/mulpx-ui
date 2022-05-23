import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss'],
})
export class QuickLinksComponent implements OnInit {
  @ViewChild('close') close!: ElementRef;
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Average Temprature',
    },
    xAxis: {
      title: {
        text: 'Nigeria',
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Temprature',
      },
    },
    series: [
      {
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 24.4, 19.3, 16.0, 18.4, 17.9,
        ],
        type: 'spline',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
