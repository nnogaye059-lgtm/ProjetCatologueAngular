import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produits } from '../../services/produits';
import { Produit } from '../../models/produit';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-produit.html',
  styleUrl: './detail-produit.css'
})
export class DetailProduit {
  produit: Produit | undefined;

  constructor(route: ActivatedRoute, produitsService: Produits) {
    const id = Number(route.snapshot.paramMap.get('id'));
    this.produit = produitsService.getProduitById(id);
  }
}