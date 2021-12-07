import { Component, OnInit } from '@angular/core';
import { SushiService } from 'src/app/sushi.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public panier: any[];
  oneBox: any;
  constructor(public sushiService: SushiService) {
    this.panier = [];
  }

  ngOnInit(): void {
    this.fetchSushis(3);
    this.panier.push(this.oneBox.values());
    let tabItems = JSON.stringify(this.panier);
    console.log(tabItems + "bon");
    localStorage.setItem('Panier', tabItems);

  }

  fetchSushis(id: number) {
    return this.sushiService.getSushi(id).subscribe((data: {}) => {
      this.oneBox = data;
    })
  }


}
