<script>
    // Import markdown conversion library
    import { marked } from 'marked'

    const markdown = `
# Routing und Navigation

Diese Übung demonstriert die wichtigsten Routing-Konzepte aus der Vorlesung mit SvelteKit und Svelte 5.

**Referenzen:**

- [SvelteKit – Routing](https://svelte.dev/docs/kit/routing)
- [SvelteKit – Rest-Parameter](https://svelte.dev/docs/kit/advanced-routing#rest-parameters)
- [SvelteKit – \`goto\`](https://svelte.dev/docs/kit/$app-navigation#goto)

## Svelte-5-Syntax mit TypeScript

Die folgenden Svelte-5-Syntaxelemente werden in den Aufgaben verwendet:

- \`<script lang="ts">\`: TypeScript aktivieren
- \`let products: Product[] = $state()\`: typisierte State-Variable
- \`let { data }: { data: PageData } = $props()\`: typisierte Props
- \`type Post = { ... }\`: Typdefinition
- \`{@render ...}\`: Snippets oder Children rendern

## Ziele

- dateisystembasiertes Routing verstehen;
- Navigation zwischen Routen implementieren;
- dynamische Route-Parameter (\`[slug]\`) verwenden;
- Layout-Komponenten mit Navigation erstellen;
- \`load\`-Funktionen zum Laden von Daten nutzen.

## Vorbereitung

1. Starte den Entwicklungsserver mit \`npm run dev\` oder alternativ über \`F5\` in VS Code.
2. Öffne [http://localhost:5173/06](http://localhost:5173/06) im Browser.

## Dateistruktur

\`\`\`text
src/routes/06/
├── +layout.svelte              # Root-Layout mit Navigation
├── +page.svelte                # Startseite (/06)
├── blog/
│   ├── +page.svelte            # Blog-Übersicht (/06/blog)
│   └── [slug]/
│       ├── +page.svelte        # Blog-Detail-Seite
│       └── +page.ts            # load-Funktion für Blog-Posts (TypeScript)
├── about/
│   └── +page.svelte            # About-Seite (/06/about)
└── products/
    └── +page.svelte            # Produktseite (/06/products)
\`\`\`

## Wichtige Konzepte

### 1. Dateisystem-basiertes Routing

- Jeder Ordner unter \`src/routes/06/\` wird zu einer Route.
- Eine \`+page.svelte\`-Datei definiert den Inhalt einer Route.
- Ein Platzhalter wie \`[slug]\` erzeugt einen dynamischen Parameter.

**Aufgaben:**

1. Starte den Entwicklungsserver und öffne den Pfad \`/06\`.
2. Untersuche die Dateistruktur und ordne die Dateien ihren Routen zu:
   - \`+page.svelte\` → \`/06\`
   - \`about/+page.svelte\` → \`/06/about\`
   - \`products/+page.svelte\` → \`/06/products\`

### 2. Layouts

- \`+layout.svelte\` definiert ein gemeinsames Layout.
- \`let { children } = $props()\` definiert die Props in Svelte 5.
- \`{@render children()}\` rendert verschachtelte Routen.

**Aufgaben:**

1. Öffne \`src/routes/06/+layout.svelte\`.
2. Untersuche die Syntax \`let { children } = $props()\`.
3. Betrachte \`{@render children()}\` für verschachtelte Routen.
4. Untersuche die Navigation mit regulären \`<a>\`-Elementen.
5. Teste die Navigation zwischen den Seiten und beobachte, dass das Layout erhalten bleibt.

### 3. Navigation

- Reguläre \`<a href="...">\`-Elemente ermöglichen die Client-Side-Navigation.
- SvelteKit fängt interne Links automatisch ab.
- Bei der Navigation wird keine vollständige Seite neu geladen.

**Aufgaben:**

1. Öffne \`src/routes/06/blog/+page.svelte\`.
2. Untersuche:
   - \`import { goto } from '$app/navigation'\`;
   - die \`goto()\`-Funktion für programmatische Navigation.
3. Ersetze \`goto()\` testweise durch einen direkten Link.

### 4. Dynamische Routen

- \`[slug]/+page.svelte\` definiert eine Seite mit dynamischem Parameter.
- Eine \`load\`-Funktion in \`+page.ts\` lädt die benötigten Daten.
- \`params.slug\` greift auf den URL-Parameter zu.
- TypeScript-Typen erhöhen die Typsicherheit.

**Aufgaben:**

1. Navigiere zu \`/06/blog\` und öffne einen Blog-Post.
2. Untersuche \`src/routes/06/blog/[slug]/+page.svelte\` und \`src/routes/06/blog/[slug]/+page.ts\`.
3. Prüfe dabei:
   - dass \`[slug]\` den dynamischen Teil der URL darstellt;
   - dass die \`load\`-Funktion anhand von \`params.slug\` die passenden Daten lädt;
   - dass die Daten über das \`data\`-Prop an \`+page.svelte\` übergeben werden;
   - dass TypeScript-Typen für \`Post\` und \`Posts\` definiert sind.
4. Ändere die URL manuell zu einem nicht vorhandenen Slug und prüfe den 404-Fehler.

### 5. Übung erweitern (optional)

1. Erstelle unter \`src/routes/06/contact\` eine Route mit einem Kontaktformular.
2. Füge eine dynamische Produktroute unter \`src/routes/06/products/[id]\` hinzu.
3. Implementiere eine Fehlerseite in \`+error.svelte\`.

`;

</script>

<style>
    h1 { color: #2b6cb0; }
    .container { padding: 1rem; }
</style>

<div class="container">
    <h1>Exercise 06 — Routing</h1>
    <p>Dies ist die Startseite. Nutze die Navigation oben, um zwischen den Seiten zu wechseln.</p>
    <p>Hinweis: die folgenden Aufgaben wurden als Markdown definiert:</p>

    <div>{@html marked(markdown)}</div>
</div>
