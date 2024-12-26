## Initialisation du projet et premiers commits :

```bash
# Créer un nouveau répertoire pour le projet et se placer dedans
mkdir mon-projet-artiste
cd mon-projet-artiste

# Initialiser un dépôt Git local
git init

# Créer un fichier index.html et ajouter le code suivant
```

```html
# Créer un fichier index.html et ajouter le code suivant
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nom de l'artiste</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header>
            <h1>Nom de l'artiste</h1>
        </header>
        <main>
            <section id="biographie">
                <h2>Biographie</h2>
                <p>Contenu de la biographie ici</p>
            </section>
            <section id="galerie">
                <h2>Galerie</h2>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 Nom de l'arpiste</p>
        </footer>
        <script src="js/script.js"></script>
    </body>
</html>
```

```bash
# Ajouter le fichier au suivi de Git.
git add index.html

# Créer un commit pour enregistrer les changements
git commit -m "Initialisation du projet avec index.html"

# Créer un fichier style.css vide dans un répertoire css
mkdir css
touch css/style.css
git add css/style.css

# Créer un commit pour enregistrer le fichier
git commit -m "Ajout de la feuille de style CSS"

# Créer un fichier script.js vide dans un répertoire js
mkdir js
touch js/script.js
git add js/script.js

# Créer un commit pour enregistrer le fichier
git commit -m "Ajout du script javascript"
```

> Chaque modification significative du code est l'occasion d'un commit avec un message clair

---

## Création d'une branche pour le design (branching) :

```bash
# Créer une branche "design" et basculer dessus
git branch design
git checkout design

# ou plus rapidement et en un seule commande
git checkout -b design

# Dans cette branche, modifier le style.css pour ajouter des styles basiques (polices, couleurs).
```

```css
/* style.css - après modification */

body {
    font-family: 'Arial', 'Verdana', sans-serif;
    margin: 0;
    background-color: #f4f4f4;
    color: #333;
}

h1, h2 {
    color: #333;
}
```


```bash
# Ajouter le fichier style.css modifié au staging area
git add css/style.css

# Créer un commit pour enregistrer les styles de base
git commit -m "Ajout de styles de base au fichier style.css"

# Dans cette branche, modifier le style.css pour ajouter des styles basiques (polices, couleurs).
```

---

## Retour à la branche principale et ajout de contenu (navigation entre branches) :

```bash
# Revenir à la branche principale ("main" par défaut)
git checkout main

# Créer un fichier biographie.txt et ajouter le texte de la biographie
touch biographie.txt
```

```txt
Émile Zola est un écrivain passionné par le naturalisme depuis de nombreuses années.
Il puise son inspiration dans la société, les classes populaires, et les évolutions de son époque, s'exprimant à travers des romans réalistes, des essais percutants, et des articles journalistiques engagés.
Son travail se caractérise par une observation minutieuse, une plume incisive, et une volonté de capturer la vérité sociale et humaine dans toute sa complexité.
Émile Zola a marqué la littérature en publiant des œuvres incontournables comme Germinal, L'Assommoir, et Au Bonheur des Dames. Il a également participé à des débats littéraires et politiques majeurs de son temps, notamment à travers son célèbre engagement dans l'Affaire Dreyfus.
Pour en savoir plus sur son parcours et ses créations, n'hésitez pas à explorer son œuvre et à découvrir ses contributions à la littérature et à la société.
```

```
# Ajouter le fichier biographie.txt modifié au staging area
git add biographie.txt

# Créer un commit pour enregistrer la biographie
git commit -m "Ajout du fichier biographie.txt"
```

```js
// script.js - code pour charger la biographie
fetch('../biographie.txt')
    .then(response => response.text())
    .then(text => {
        document.getElementById('biographie').querySelector('p').textContent = text;
    });
```

```bash
# Ajouter script.js modifié au staging area
git add js/script.js

# Créer un commit pour enregistrer la modification
git commit -m "Modification de script.js pour charger la biographie"
```

---

## Fusion de la branche "design" (merging) :

```bash
# S'assurer d'être sur la branche principale
git checkout main

# Fusionner la branche "design" dans la branche courante ("main")
git merge design
```

---

## Ajout de la galerie d'images (sur la branche principale) :

- Créer un dossier "images" à la racine du projet.
- Ajouter des images dans le dossier "images".

```html
<!-- index.html - modification dans la section "galerie" -->
<section id="galerie">
    <h2>Galerie</h2>
    <div class="image">
        <img src="images/image1.png" alt="Description de l'image 1">
    </div>
    <div class="image">
        <img src="images/image2.png" alt="Description de l'image 2">
    </div>
</section>

```

```bash
# Ajouter les fichiers modifiés au staging area
git add index.html images/*

# Créer un commit pour enregistrer la galerie d'images
git commit -m "Ajout de la galerie d'images"
```

---

## Ajout du style de la galerie (sur la branche design) :

```bash
# Se placer sur la branche design
git checkout design

# Récupérer tous les changements effectué sur la branche main
git rebase main

# Ajouter les styles suivant au fichier CSS
```

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto;
}

/* HEADER */

header {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* BIOGRAPHIE */

#biographie {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* GALERIE */

#galerie {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

.image {
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* FOOTER */

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
}
```

```bash
# Ajouter le fichier style.css modifié au staging area
git add css/style.css

# Créer un commit pour enregistrer les styles
git commit -m "Ajout de styles img, biblio et galerie au fichier style.css"
```


## Fusion de la branche "design" (merging) :

```bash
# S'assurer d'être sur la branche principale
git checkout main

# Fusionner la branche "design" dans la branche courante ("main")
git merge design
```

---

## Utilisation de git log, git stash et modification de l'historique (sur la branche principale) :

```bash
# Afficher l'historique des commits
git log
git log --oneline

# Ouvrir index.html et faire une modification mineure (ex: corriger une faute de frappe)
# Enregistrer le fichier

# Ajouter la modification au staging area et commiter
git add index.html
git commit -m "Correction d'une faute de frappe dans index.html"
```

```bash
# Faire une modification dans style.css, mais sans commiter pour l'instant

# Sauvegarder temporairement les changements non commités dans le stash
git stash

# Afficher la liste des stashes
git stash list

# Récupérer les changements du stash et les appliquer
git stash pop
```

```bash
# Modifier le message du dernier commit (la correction de la faute de frappe)
git commit --amend -m "Correction d'une coquille dans index.html"
```

---

## Création d'un fichier .gitignore :

```bash
# Créer un fichier .gitignore à la racine du projet
touch .gitignore

# Ajouter les fichiers/dossiers à ignorer dans .gitignore
node_modules/

# Ajouter le fichier .gitignore au staging area
git add .gitignore

# Créer un commit pour enregistrer .gitignore
git commit -m "Ajout de .gitignore pour exclure node_modules/"
```

---

## Push du projet sur GitHub et création d'un Pull Request (collaboration) :

- Se rendre sur https://github.com/ et créer un nouveau dépôt GitHub (sans cocher les options "Add a README file", "Add .gitignore", ou "Choose a license").
- Copier l'URL du dépôt distant (elle devrait ressembler à https://github.com/votre-nom-d-utilisateur/nom-du-depot.git).

```bash
# Connecter le dépôt local au dépôt distant sur GitHub
git remote add origin git@github.com:votre-nom-d-utilisateur/nom-du-depot.git

# Pousser la branche "main" vers le dépôt distant
git push -u origin main
```

```bash
# Créer une nouvelle branche pour la fonctionnalité "responsive"
git checkout -b feature/responsive
```

- Modifier le fichier style.css pour ajouter des media queries et rendre le site responsive

```css
/* RESPONSIVE DESIGN */

@media screen and (max-width: 768px) {
    /* Ajustements pour les tablettes */
    #galerie {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

@media screen and (max-width: 480px) {
    /* Ajustements pour les mobiles */
    #galerie {
        grid-template-columns: 1fr;
    }
}
```

```bash
# Ajouter les modifications au staging area et commiter
git add css/style.css
git commit -m "Ajout de styles responsive dans style.css"

# Pousser la branche "feature/responsive" vers le dépôt distant
git push -u origin feature/responsive
```


Sur GitHub, dans votre dépôt, créer un Pull Request :

- Cliquer sur l'onglet "Pull requests".
- Cliquer sur "New pull request".
- Sélectionner "feature/responsive" comme branche à merger dans "main".
- Ajouter un titre et une description pour le Pull Request.
- Cliquer sur "Create pull request".

Accepter le Pull Request sur GitHub pour fusionner les changements dans la branche principale.

## Déploiement sur GitHub Pages :

- Sur GitHub, dans le dépôt du projet, aller dans les paramètres du dépôt ("Settings").
- Cliquer sur "Pages" dans la barre latérale.
- Dans la section "Source", choisir "Deploy from a branch".
- Sélectionner la branche "main" et le dossier racine ("/").
- Cliquer sur "Save".

## Supprimer une branche

```bash
# branche locale
git branch -d <branch>

# branche distante
git push origin --delete <feature-branch>

Vérifier la suppression
git fetch --prune
git branch -r
```
