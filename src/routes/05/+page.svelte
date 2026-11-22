<script lang="ts">
  // Das `data` prop kommt von +page.ts load() und stellt die Variable `user` bereit.
  import { User } from '$lib/05-Props/User';

  import UserCard from '$lib/05-Props/UserCard.svelte';

  let { data } : { data: { user: User | null } } = $props();

</script>

<h1>Exercise 05 — Props</h1>

{#if data?.user}
  <p>Geladener Benutzer aus load():</p>
  <!-- 3) -->
  <UserCard user={data.user} />
{:else}
  <p>Keine Benutzerdaten wurden von der Load-Funktion bereitgestellt.</p>
{/if}

<!-- TODOs:
  1) Wandle die Überschrift (<h1>...</h1>) in eine Komponente um, die den Text als Prop erhält. 
    Speichere die Komponente unter `src/lib/05-Props/Heading.svelte` und binde sie hier ein.
  2) Importiere die UserCard-Komponente
  3) Erzeuge eine UserCard-Komponente und übergebe den aktuellen user als Prop.
  4) Passe die UserCard-Komponente so an, dass ein Avatar-Bild angezeigt wird, wenn die user-Instanz eines hat.
     Hinweis: Nutze ein `<img>`-Element mit der CSS-Klasse `avatar`. Nutze als `src`-Attribut den Wert von `user.avatar`.
-->
