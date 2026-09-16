import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Produits } from '../../services/produits';
import { Produit } from '../../models/produit';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil {
  produits: Produit[] = [];

  constructor(produitsService: Produits) {
    this.produits = produitsService.getProduits();
  }
}