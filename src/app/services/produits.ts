import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class Produits {

  private produits: Produit[] = [
    {
      id: 1,
      nom: 'Casque audio sans fil',
      description: 'Casque bluetooth avec réduction de bruit active, autonomie 30h.',
      prix: 24990,
      categorie: 'Électronique',
      image: 'https://loremflickr.com/300/200/headphones',
      disponible: true
    },
    {
      id: 2,
      nom: 'Montre connectée',
      description: 'Suivi d\'activité, notifications, autonomie 5 jours.',
      prix: 39990,
      categorie: 'Électronique',
      image: 'https://loremflickr.com/300/200/smartwatch',
      disponible: true
    },
    {
      id: 3,
      nom: 'Sac à dos urbain',
      description: 'Compartiment ordinateur, résistant à l\'eau, 20L.',
      prix: 15990,
      categorie: 'Mode',
      image: 'https://loremflickr.com/300/200/backpack',
      disponible: true
    },
    {
      id: 4,
      nom: 'Baskets running',
      description: 'Semelle amortissante, respirant, plusieurs coloris.',
      prix: 22990,
      categorie: 'Mode',
      image: 'https://loremflickr.com/300/200/sneakers',
      disponible: false
    },
    {
      id: 5,
      nom: 'Lampe de bureau LED',
      description: 'Luminosité réglable, port USB intégré.',
      prix: 8990,
      categorie: 'Maison',
      image: 'https://loremflickr.com/300/200/desklamp',
      disponible: true
    },
    {
      id: 6,
      nom: 'Carnet de notes',
      description: 'Couverture rigide, 200 pages, format A5.',
      prix: 2990,
      categorie: 'Papeterie',
      image: 'https://loremflickr.com/300/200/notebook',
      disponible: true
    }
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