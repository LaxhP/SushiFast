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
  info: Array<boolean> = [];
  panier: Array<LigneCommande> = [];
  constructor(public sushiService: SushiService) { }


  ngOnInit() {
    this.fetchSushi();

  }

  infoOff(index: number) {
    this.info[index] = false;
  }

  infoOn(index: number) {
    this.info[index] = true;
  }

  getInfo(index: number) {
    return this.info[index];
  }

  fetchSushi() {
    return this.sushiService.getSushis().subscribe((data: {}) => {
      this.sushi = data;

    })
  }
 
  ajoutPanier(box: any) {


    // Exemple d'affectation


    this.panier = JSON.parse(localStorage.getItem('SushiPanier') || '[]');
    let ajout = false;
    this.panier.forEach(element => {
      if (element.id == box.id) {
        element.quantite++;
        ajout = true;
      }
    });

    if (!ajout) {
      let uneLigne = new LigneCommande(box.id, 1,box.nom,box.prix);
      this.panier.push(uneLigne);
    }

    let tabItems = JSON.stringify(this.panier);
    localStorage.setItem('SushiPanier', tabItems);

  }


  valideCommande(){
    let commandes = JSON.parse(localStorage.getItem('SushiCommande') || '[]');
    this.panier = JSON.parse(localStorage.getItem('SushiPanier') || '[]');
    commandes.push(this.panier);
    let tabItems = JSON.stringify(commandes);
    localStorage.setItem('SushiCommande', tabItems);
    localStorage.removeItem('SushiPanier');
  }
  
}

