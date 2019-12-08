import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  customer : any[];
  title = 'ExportExcel';

  OnInit() {
    for (let i = 1; i < 25; i++) {
      this.customer.push({ firstName: 'Ramesh' + i, roll: i })
    }
    this.customer.forEach(d => console.log(d[0]))
  }
}
