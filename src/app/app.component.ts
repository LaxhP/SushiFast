import { Component, OnInit } from '@angular/core';
import { SushiService } from './sushi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SushiFast';

 
  constructor(public sushiService: SushiService) { }

  ngOnInit() {


    }


  
}

