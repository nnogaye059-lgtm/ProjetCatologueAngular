import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class Produits {

  private produits: Produit[] = [
    // ... (le reste du tableau ne change pas)
  ];

  constructor() { }

  getProduits(): Produit[] {
    return this.produits;
  }

  getProduitById(id: number): Produit | undefined {
    return this.produits.find(p => p.id === id);
  }

  getCategories(): string[] {
    return [...new Set(this.produits.map(p => p.categorie))];
  }
}