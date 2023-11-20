import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { URLLoader } from 'src/app/main/configs/URLLoader';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  extends URLLoader implements OnInit {
  

  constructor() { 
    super()
  }

 override loadScripts() {
    let container=document.getElementsByTagName('app-root')[0];
    let promise = Promise.resolve();
    for (let url of this.myScripts) {
        promise = promise.then(_ => new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.innerHTML = '';
            script.src = url;
            script.async = false;
            script.defer = false;
            script.onload = () => { resolve(); }
            script.onerror = (e) => { reject(e); }
            container.appendChild(script);
        }));
    }
}
  

ngOnInit(): void {
  this.createChart('incomeChart', [20000, 14000, 12000, 15000, 18000, 19000, 22000], 'rgba(0, 128, 0, 1)');
  this.createChart('expenseChart', [43000, 53000, 34000, 38000, 66000, 77000, 53000], 'rgba(255, 0, 0, 1)');
}
createChart(chartId: string, data: number[], bgColor: string): void {
  const canvas = document.getElementById(chartId) as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          label: '',
          data: data,
          backgroundColor: bgColor,
          borderColor: bgColor,
        }]
      }
    });
  } else {
    console.error('Could not get context for chart with id:', chartId);
  }
}
//  renderChart(data: number[], labels: string[],ctx: HTMLCollectionOf<any> | ChartItem,color: string) {
 
 
//   var myChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//           labels: labels,
//           datasets: [{
//               label: '',
//               data: data,
//               backgroundColor: color ,
//               borderColor: color,
//           }]
//       },
//   });

























private myScripts = [
  "../assets/vendors/jquery/dist/jquery.min.js",
  "../assets/vendors/popper.js/dist/umd/popper.min.js",
  "../assets/vendors/bootstrap/dist/js/bootstrap.min.js",
  "../assets/js/main.js",
  "../assets/vendors/jszip/dist/jszip.min.js",
  "../assets/vendors/pdfmake/build/pdfmake.min.js",
  "../assets/vendors/pdfmake/build/vfs_fonts.js",
  
  
];

}