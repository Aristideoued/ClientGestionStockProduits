import { Component, AfterViewChecked ,Input,ViewChild} from '@angular/core';
import { ChartComponent as Chart} from "angular2-chartjs";

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements AfterViewChecked {

  @ViewChild("ghraphElement",{static:true})
  private ghraphElement: Chart;

  @Input()
  type :string= 'bar';

  @Input()
  title:string='Titre';

  @Input()
  data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My First dataset 2",
      data: [65, 59, 80, 11, 56, 34, 40]
           }
       ]
   };

   @Input()
   options = {
   responsive: true,
   maintainAspectRatio: false
};
  constructor() { }

   ngAfterViewChecked() {

      this.ghraphElement.chart.update();


  }

}
