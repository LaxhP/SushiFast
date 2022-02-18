import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  commandes: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.commandes = JSON.parse(localStorage.getItem('SushiCommande') || '[]');
  }

}
