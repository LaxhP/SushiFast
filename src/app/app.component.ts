import { Component, OnInit } from '@angular/core';
import { SushiService } from './sushi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SushiFast';
  sushi: any;

  constructor(public sushiService: SushiService) { }

  ngOnInit() {
    this.fetchSushi();

    } 
  

  fetchSushi() {
    return this.sushiService.getSushis().subscribe((data: {}) => {
    this.sushi = data;
    })
    

  }
}

