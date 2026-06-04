@AGENTS.md

# Périmètre de travail

Seuls ces dossiers sont pertinents. Ne lis rien en dehors sauf demande explicite :

```
app/          — pages et layouts Next.js
components/   — tous les composants UI
lib/          — données et utilitaires
```

Ignorer systématiquement : `.next/`, `node_modules/`, `site/`, `public/`, fichiers de config racine.

# Règles de contexte

- **Lis uniquement les fichiers directement liés à la tâche demandée.** Pas de lecture préventive.
- Un composant modifié = lire ce composant + ses imports directs uniquement.
- Ne pas charger l'arbre complet du projet pour une tâche locale.
- Si un fichier dépasse 200 lignes, lire uniquement la section pertinente (utiliser `offset` + `limit`).

# Règles de code

- Pas de commentaires sauf logique non évidente.
- Pas de refactoring hors scope de la tâche.
- Pas de nouveaux fichiers sans demande explicite.
- Conserver le style existant (inline styles + Tailwind, pas de CSS modules).
