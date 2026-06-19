# Taropa — site vitrine

Marque vêtements · Next.js 16 · Vercel · **isolé de Nael**

## Démarrage (session)

```bash
cd ~/dev/taropa-site
npm run dev
```

→ [http://localhost:3000](http://localhost:3000)

Dans Cursor : **`mode Taropa — priorité : [objectif]`**

## Structure

| Quoi | Où |
|------|-----|
| Code | `~/dev/taropa-site` (ce repo) |
| Mémoire / brief | `~/dev/taropa-brain` |
| Contenus éditables | `src/lib/brand.ts` |
| Checklist session | `SESSION.md` |

## Édition rapide en live

1. **Textes** → `src/lib/brand.ts`
2. **Produits** → tableau `products` dans le même fichier
3. **Couleurs** → classes Tailwind dans les composants `src/components/`

## Deploy Vercel

```bash
# Premier deploy — nouveau projet, pas Nael
npx vercel
```

Noter l'URL preview dans `~/dev/taropa-brain/chantiers/site-vitrine.md`.

## Phase 2

CMS / e-commerce → voir `~/dev/taropa-brain/architecture/Stack.md` (après validation vitrine).
