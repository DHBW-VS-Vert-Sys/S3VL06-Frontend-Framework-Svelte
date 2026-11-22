<script>
    // TODOs:
    // 1) Implementiere die Funktion `sayHello`, sodass beim Klick z.B. ein alert erscheint.
    // 2) Füge der Komponente eine CSS-Klasse hinzu und style sie im lokalen <style>-Block. 
    //    Style den Button (dunkelblauer Hintergrund, weißer Text).

    let title = 'Svelte-Grundlagen';
    function sayHello() {
        // TODO: Implementiere die Funktion, um eine Begrüßung anzuzeigen (z. B. alert oder console.log)
    }
</script>

<style>
    h2 { color: #2b6cb0; }
    button { margin-top: 0.5rem; }
</style>

<section>
    <h2>{title}</h2>
    <p>Eine minimale Svelte-Komponente mit einem Button.</p>
    <button onclick={sayHello}>Sag Hallo</button>
</section>