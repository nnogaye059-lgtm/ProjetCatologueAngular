# Catalogue de Produits — Angular

Site vitrine statique présentant un catalogue de produits, réalisé dans le cadre du cours **Technologie Web 3** (Licence 1 Informatique).

## 🎯 Thème

Catalogue de produits en ligne (électronique, mode, maison, papeterie), avec présentation détaillée de chaque article.

## 👥 Binôme

| Nom | Rôle |
|---|---|
| **Nogaye Ndiaye** | Modèle de données, service produits, page d'accueil, page de détail produit, routage, harmonisation du style |
| **Khadim Fall** | Navbar, footer, page À propos, page Contact (formulaire), intégration finale |

## 🛠️ Technologies utilisées

- Angular (dernière version stable, composants standalone)
- TypeScript
- CSS (variables CSS globales pour un style cohérent)
- Données statiques (pas de base de données, pas d'API)

## 📄 Pages du site

- **Accueil** (`/`) — Liste des produits sous forme de cartes
- **Détail produit** (`/produits/:id`) — Fiche complète d'un produit
- **À propos** (`/a-propos`) — Présentation du site et du binôme
- **Contact** (`/contact`) — Formulaire de contact (binding bidirectionnel avec `ngModel`)

## 🚀 Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/nnogaye059-lgtm/ProjetCatologueAngular.git

# Se placer dans le dossier
cd ProjetCatologueAngular

# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve
```

Le site est ensuite accessible sur `http://localhost:4200/`.

## 🌐 Déploiement (bonus)

<!-- Si vous déployez sur Firebase, ajoutez le lien ici -->
Lien du site déployé : *(à venir)*

## 📚 Notions Angular démontrées

- Composants (standalone)
- Data binding (interpolation, property binding, event binding, two-way binding avec `ngModel`)
- Directives structurelles (`*ngFor`, `*ngIf`)
- Communication entre composants
- Services et injection de dépendances
- Routage avec paramètres (`ActivatedRoute`)