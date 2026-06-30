# Petit coup de pouce 05 — Site vitrine

Site vitrine one-page pour **Benoît Sappe**, artisan multi-services dans les Hautes-Alpes (05), France.

## Stack

- **Vite + React** (JSX, pas TypeScript)
- **@phosphor-icons/react** pour toutes les icônes — utiliser `weight="fill"` par défaut
- **react-router-dom** installé (pas encore utilisé, navigation par ancres)
- CSS vanilla par composant (un fichier `.css` par `.jsx`)
- Pas de Tailwind, pas de CSS modules, pas de styled-components

## Déploiement

- Hébergement : **Vercel**, déploiement automatique sur push `main`
- Repo GitHub : `NicolasDontigny/coup-de-pouce-05`

## Structure

```
src/
  components/
    Navbar.jsx / .css
    Accueil.jsx / .css   ← section hero/bannière principale
    Services.jsx / .css
    Realisations.jsx / .css
    APropos.jsx / .css
    Zone.jsx / .css
    Contact.jsx / .css
    Footer.jsx / .css
  assets/
    logo.png             ← logo Petit coup de pouce 05
  App.jsx / .css
  index.css              ← variables CSS globales + resets
public/
  images/                ← toutes les photos (hero.jpg, benoit.jpg, real-*.jpg, service-*.jpg)
  favicon.svg
```

## Palette de couleurs

| Variable          | Valeur      | Usage                          |
|-------------------|-------------|--------------------------------|
| `--green-dark`    | `#1E3D1E`   | Fond navbar, hero, zone, footer|
| `--gold`          | `#B8935A`   | Accents, boutons primaires     |
| `--gold-light`    | `#C9A97A`   | Hover boutons                  |
| `--cream`         | `#F5F0E6`   | Fond sections claires          |
| `--cream-dark`    | `#EDE8DC`   | Hover cartes, bordures         |

## Typographie

- **Outfit** (Google Fonts) — titres `h1/h2/h3`, boutons, liens nav
- **Inter** (Google Fonts) — corps de texte

## Contenu & coordonnées

- **Nom** : Benoît Sappe
- **Entreprise** : Petit coup de pouce 05 – Multi-services
- **Téléphone** : 06 87 23 47 02
- **Email** : petitcoupdepouce05@gmail.com
- **Adresse** : 3850 Rte de Saint-Nicolas, 05260 Saint-Jean-Saint-Nicolas
- **Horaires** : Lun–Sam 7h00–19h00
- **Zone** : Hautes-Alpes (05) — Saint-Jean-Saint-Nicolas, Orcières, Gap, Chorges...

## Sections (dans l'ordre)

1. **Accueil** — bannière verte, titre, CTA téléphone, stats, image circulaire
2. **Services** — 7 cartes : Petits travaux, Tonte & débroussaillage, Coupe & bois, Peinture, Aménagement intérieur, Dépannage, Conseils
3. **Réalisations** — galerie photos (grille)
4. **À propos** — photo Benoît + texte bio
5. **Zone d'intervention** — liste communes + Google Maps embed
6. **Contact** — infos de contact + formulaire de devis (mailto)
7. **Footer**

## Images à intégrer

Toutes dans `public/images/` :
- `hero.jpg` — image principale (section Accueil, cercle)
- `benoit.jpg` — portrait Benoît (section À propos, cercle)
- `real-1.jpg` à `real-6.jpg` — galerie réalisations
- `service-petits-travaux.jpg`, `service-tonte.jpg`, `service-bois.jpg`, `service-peinture.jpg`, `service-amenagement.jpg`, `service-depannage.jpg`, `service-conseils.jpg`
