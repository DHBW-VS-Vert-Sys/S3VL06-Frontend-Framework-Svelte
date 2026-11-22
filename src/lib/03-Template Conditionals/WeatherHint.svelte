<script>
    // TODOs:
    // 1) Zeige spezifischere Nachrichten für Temperaturbereiche an.
    // 2) Füge ein Icon oder Styling für jede Kategorie hinzu.
    // 3) Teste verschiedene Temperaturen, um sicherzustellen, dass die richtigen Nachrichten angezeigt werden.

    let temperature = $state(25);
</script>

<div>
    <label>Temperatur: <input type="number" bind:value={temperature} /></label>

    {#if temperature > 30}
        <!-- Nachricht für heiße Temperaturen -->
    {:else if temperature > 20}
        <!-- Nachricht für warme Temperaturen -->
    {:else}
        <!-- Nachricht für kalte Temperaturen -->   
    {/if}
</div>
