<script lang="ts">
    // TODOs:
    // 1) Teste das Verhalten der Komponente, indem du Produkte entfernst.
    // 2) Füge in dieser Komponente einen Filter-Input hinzu, der die Liste nach Name filtert.
    // 3) Erkläre in einem Kommentar, warum ein key im {#each}-Block wichtig ist. Nutze hierfür die Svelte Dokumentation.
    // 4) Optional: Füge einen Input und einen Button hinzu, um neue Produkte zur Liste hinzuzufügen.

    let items = $state([
        { id: 1, name: 'Apfel' },
        { id: 2, name: 'Banane' },
        { id: 3, name: 'Orange' }
    ]);

    function remove(id: number) {
        const i = items.findIndex(x => x.id === id);
        if (i !== -1) items.splice(i, 1);
    }
</script>

<div>
    <h3>Produkte</h3>
    <ul>
        {#each items as item (item.id)}
            <li>{item.name} <button onclick={() => remove(item.id)}>Entfernen</button></li>
        {:else}
            <p>Keine Einträge</p>
        {/each}
    </ul>
</div>
