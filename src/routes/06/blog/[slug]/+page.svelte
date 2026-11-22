<script lang="ts">
    import type { PageData } from './$types';
    
    let { data }: { data: PageData } = $props();
</script>

<style>
    h1 { color: #2b6cb0; }
    .container { padding: 1rem; }
    .back-link {
        display: inline-block;
        margin-bottom: 1rem;
        color: #2b6cb0;
        text-decoration: none;
    }
    .back-link:hover {
        text-decoration: underline;
    }
    .meta {
        color: #666;
        font-size: 0.9rem;
    }
</style>

<div class="container">
    <a class="back-link" href="/06/blog">← Zurück zur Blog-Übersicht</a>
    
    <h1>{data.title}</h1>
    <p class="meta">Slug: <code>{data.slug}</code></p>
    
    <div>{@html data.content}</div>
    
    <hr />
    <p><em>Hinweis: Diese Daten kommen aus der load-Funktion in +page.ts</em></p>
</div>
