import { Component, OnInit } from '@angular/core';
import { CovidTrackerService } from '../service/covid-tracker.service';


@Component({
  selector: 'app-table-dash-board',
  templateUrl: './table-dash-board.component.html',
  styleUrls: ['./table-dash-board.component.css']
})
export class TableDashBoardComponent implements OnInit {

  coronaTrackerDetails:any;


  constructor( public covidTrackerAPI:CovidTrackerService) { }
 
  ngOnInit(): void {
   this.getData();

  }
getData(){
      this.covidTrackerAPI.getEvents().subscribe((data:any)=>{
        this.coronaTrackerDetails=data;
    });  
  }

}
