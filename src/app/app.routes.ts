import { Routes } from '@angular/router';
import { Accueil } from './components/accueil/accueil';
import { DetailProduit } from './components/detail-produit/detail-produit';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'produits/:id', component: DetailProduit },
];