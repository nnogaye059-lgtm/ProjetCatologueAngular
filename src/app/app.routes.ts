import { Routes } from '@angular/router';
import { Accueil } from './components/accueil/accueil';
import { DetailProduit } from './components/detail-produit/detail-produit';
import { APropos } from './components/a-propos/a-propos';
import { Contact } from './components/contact/contact';


export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'produits/:id', component: DetailProduit },
  { path: 'a-propos', component: APropos },
  { path: 'contact', component: Contact },
];