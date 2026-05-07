# postcart.app — Blog

Blog statique Astro déployé sur `https://postcart.app/blog/` via GitHub Actions → FTP o2switch.

## Stack

- **Framework** : [Astro](https://astro.build/) (output statique)
- **Sitemap** : `@astrojs/sitemap` (génération automatique)
- **Déploiement** : GitHub Actions → FTP (`SamKirkland/FTP-Deploy-Action`)
- **Hébergement** : o2switch (serveur `lune2`)

## Structure

```
src/
  content/blog/      ← Articles Markdown (un fichier = un article)
  layouts/
    BaseLayout.astro ← HTML commun (nav, footer, SEO)
    ArticleLayout.astro ← Mise en page article (méta, auteur, nav prev/next)
    BlogLayout.astro ← Index et pages catégorie
  pages/
    blog/
      index.astro    → /blog/
      [slug].astro   → /blog/{slug}/
    category/
      [slug].astro   → /category/{slug}/
public/
  css/global.css     ← CSS unique (servi sans hash à /css/global.css)
  images/            ← Images des articles
```

## Ajouter un article

1. Créer `src/content/blog/{slug}.md` avec le frontmatter :

```md
---
title: "Titre de l'article"
description: "Description SEO (160 caractères max)"
date: 2026-05-06
category: "Nom de la catégorie"
categorySlug: "slug-de-la-categorie"
image: "/images/nom-image-hero.jpg"
readingTime: "8 min de lecture"
prev: { slug: "slug-article-precedent", title: "Titre précédent" }
next: { slug: "slug-article-suivant", title: "Titre suivant" }
---

Contenu Markdown ici...
```

2. Placer l'image hero dans `public/images/`

3. **Sitemap** : l'URL `/blog/{slug}/` est **automatiquement ajoutée** au sitemap par `@astrojs/sitemap`. Aucune action manuelle requise — chaque route Astro générée est incluse au build suivant.

4. Pousser sur `main` → GitHub Actions build + déploie.

## Sitemap

Le sitemap est généré automatiquement au build par `@astrojs/sitemap` (configuré dans `astro.config.mjs`).

Fichiers générés dans `dist/` et déployés à la racine du site :
- `sitemap-index.xml` → `https://postcart.app/sitemap-index.xml`
- `sitemap-0.xml` → `https://postcart.app/sitemap-0.xml`

**Toute nouvelle page Astro** (article blog, page catégorie, page statique) est incluse automatiquement dès qu'elle est poussée sur `main`.

Pour soumettre à Google Search Console après ajout de nouvelles pages :
- URL à soumettre : `https://postcart.app/sitemap-index.xml`

## Déploiement

Le workflow `.github/workflows/deploy.yml` se déclenche sur :
- Push sur `main`
- Déclenchement manuel (`workflow_dispatch`)
- Planification automatique : tous les 2 jours à 7h UTC

Dossiers déployés via FTP :
| Local (`dist/`) | Serveur |
|---|---|
| `blog/` | `postcart.app_www/blog/` |
| `category/` | `postcart.app_www/category/` |
| `css/` | `postcart.app_www/css/` |
| `sitemap*.xml` | `postcart.app_www/` |

**Note infrastructure** : la racine FTP o2switch est `/home/sc2suap3890/sc2suap3890.universe.wf/gita-postcard/` — les chemins `server-dir` sont relatifs à cette racine.

## Secrets GitHub requis

| Secret | Description |
|---|---|
| `FTP_HOST` | Hôte FTP o2switch |
| `FTP_USER` | Identifiant FTP |
| `FTP_PASSWORD` | Mot de passe FTP |

## Développement local

```bash
npm install
npm run dev      # Serveur local http://localhost:4321
npm run build    # Build dans dist/
npm run preview  # Prévisualisation du build
```

## CSS

Un seul fichier CSS : `public/css/global.css`, servi à `/css/global.css` sans hash.
Ne pas utiliser `src/styles/` — les fichiers y seraient hashés par Astro et inaccessibles après déploiement partiel.
