import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.popData=data
      }
    )
  }


  popData:any = {}
  ngOnInit(): void {
  }

}
