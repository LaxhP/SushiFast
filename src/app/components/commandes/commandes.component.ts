import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes: Array<any> = [];
  prixtotal: number = 0.0;

  constructor() { }

  ngOnInit(): void {
    this.commandes = JSON.parse(localStorage.getItem('SushiCommande') || '[]');
    this.prixtotal = this.total();
  }

  total() {
    let total = 0.0;
    let produit;
    let panier;
    console.log(this.commandes)
    for (let i = 0; i < this.commandes.length; i++) {
      panier = this.commandes[i];
      for (let i = 0; i < panier.length; i++) {
        produit = panier[i];
        total = total + (produit.prix * produit.quantite);
        console.log(produit.prix);
      }
    }
    return total;
  }

}
