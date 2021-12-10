import { Component, Input, OnInit } from '@angular/core';
import { SushiService } from 'src/app/sushi.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  sushi: any;
  info:Array<boolean>=[];
  constructor(public sushiService: SushiService) { }
  
  ngOnInit() {
    this.fetchSushi();

    }
    infoOff(index:number){this.info[index]=false}
    infoOn(index:number){this.info[index]=true;}

  getInfo(index:number){
    return this.info[index];
  }
  fetchSushi() {
    return this.sushiService.getSushis().subscribe((data: {}) => {
    this.sushi = data;
    
    })
  }
}
