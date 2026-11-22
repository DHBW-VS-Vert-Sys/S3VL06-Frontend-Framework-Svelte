<script>
    // TODOs:
    // 1) Füge einen Reset-Button hinzu, der a und b auf 0 setzt.
    // 2) Ergänze eine abgeleitete Variable, die angibt, ob die Summe gerade oder ungerade ist. Zeige dies im UI an.
    // 3) Verwende eine zweite reaktive Anweisung, die a und b synchronisiert, wenn eine Checkbox aktiviert ist.

    let a = $state(0);
    let b = $state(0);
    let sum = $derived(a + b);
    let doubleSum = $derived(sum * 2);
    let sync = $state(false);
</script>

<div>
    <label><input type="checkbox" bind:checked={sync} /> Zähler synchronisieren</label> <!-- 3) -->
    <label>A: <input type="number" bind:value={a} /></label>
    <label>B: <input type="number" bind:value={b} /></label>

    <p>Summe: {sum}</p>
    <p>Doppeltes Ergebnis: {doubleSum}</p>
    <p>Die Summe ist ... gerade ... ungerade</p> <!-- 2) -->
</div>
