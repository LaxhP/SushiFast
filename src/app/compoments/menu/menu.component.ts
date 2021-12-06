import { Component, Input, OnInit } from '@angular/core';
import { SushiService } from 'src/app/sushi.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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
