import { Component, Input, OnInit } from '@angular/core';
import { SushiService } from 'src/app/sushi.service';
import { LigneCommande } from 'src/app/classes/ligne-commande';
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

  ajoutPanier(id:number) {
    
    
      // Exemple d'affectation
      let panier: LigneCommande[];
      panier = JSON.parse(localStorage.getItem('SushiPanier') || '[]');
      
      let ajout = false;
      panier.forEach(element=>{if (element.id==id){
        element.quantite ++;
        ajout=true;
      }});

      if(!ajout){
      let uneLigne = new LigneCommande(id, 1);
      panier.push(uneLigne);
      }

      let tabItems = JSON.stringify(panier);
      localStorage.setItem('SushiPanier', tabItems);
  
    }
  }

