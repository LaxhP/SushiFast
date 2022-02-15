export class LigneCommande {
    constructor(
        public id: number,
        public quantite: number,
        public nom : string,
        public prix : number
    ) { }
}