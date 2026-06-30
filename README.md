# Petit coup de pouce 05 — Site vitrine

Site vitrine one-page pour **Benoît Sappe**, artisan multi-services dans les Hautes-Alpes (05).

---

## Stack

- **Vite + React** (JSX)
- **@phosphor-icons/react** — icônes
- **CSS vanilla** par composant
- Hébergement : **Vercel** (déploiement automatique sur push `main`)

---

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:5173](http://localhost:5173).

---

## Variables d'environnement

Crée un fichier `.env.local` à la racine (déjà dans `.gitignore`, ne sera jamais commité) :

```
VITE_WEB3FORMS_KEY=ta_cle_web3forms_ici
```

### Obtenir la clé Web3Forms

1. Va sur [web3forms.com](https://web3forms.com)
2. Entre l'adresse `petitcoupdepouce05@gmail.com`
3. Copie la clé reçue par email
4. Colle-la dans `.env.local`

Sans cette clé, le formulaire de contact s'affiche normalement mais les soumissions échouent silencieusement.

---

## Formulaire de contact

Le formulaire (section *Contact*) envoie les données via l'API **Web3Forms** — aucun backend requis.

- Sur **mobile** : les liens téléphone et email déclenchent directement l'app téléphone / l'app mail
- Sur **desktop** : un popover s'affiche avec le numéro ou l'adresse email, et un bouton "Copier"

Les soumissions du formulaire arrivent directement dans la boîte Gmail `petitcoupdepouce05@gmail.com`.

---

## Déploiement (Vercel)

Le déploiement est automatique : chaque push sur la branche `main` déclenche un build sur Vercel.

### Première configuration

1. Importe le repo GitHub `NicolasDontigny/coup-de-pouce-05` dans [vercel.com](https://vercel.com)
2. Vercel détecte Vite automatiquement — aucune configuration de build nécessaire
3. Ajoute la variable d'environnement dans Vercel :
   - *Project → Settings → Environment Variables*
   - Nom : `VITE_WEB3FORMS_KEY`
   - Valeur : ta clé Web3Forms
4. Redéploie (ou pousse un commit) pour que la variable soit prise en compte

### Build manuel

```bash
npm run build    # génère le dossier dist/
npm run preview  # prévisualise le build de production en local
```

---

## Structure

```
src/
  components/
    Navbar.jsx / .css
    Accueil.jsx / .css       ← section hero/bannière
    Services.jsx / .css
    Realisations.jsx / .css
    APropos.jsx / .css
    Zone.jsx / .css
    Contact.jsx / .css
    Footer.jsx / .css
    PhoneButton.jsx / .css   ← bouton téléphone (popover desktop / tel: mobile)
    CopyableValue.jsx / .css ← copier au clic (téléphone & email dans Contact)
  assets/
    logo.png
  App.jsx / .css
  index.css                  ← variables CSS globales
public/
  images/                    ← photos (hero.jpg, benoit.jpg, real-*.jpg, service-*.jpg)
  favicon.svg
```

---

## Coordonnées

| | |
|---|---|
| **Nom** | Benoît Sappe |
| **Téléphone** | 06 87 23 47 02 |
| **Email** | <petitcoupdepouce05@gmail.com> |
| **Adresse** | 3850 Rte de Saint-Nicolas, 05260 Saint-Jean-Saint-Nicolas |
| **Horaires** | Lun – Sam 7h00 – 19h00 |
