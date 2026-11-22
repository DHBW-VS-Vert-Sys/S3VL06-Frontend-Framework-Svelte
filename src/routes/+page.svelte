<script lang="ts">
	// simple landing page — no reactive state needed
</script>

<style>
	main {
		max-width: 720px;
		margin: 6vh auto;
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 6px 30px rgba(12, 16, 30, 0.08);
	}

	h1 {
		margin: 0 0 0.5rem 0;
		font-size: 1.75rem;
	}

	p.lead {
		margin: 0 0 1.25rem 0;
		color: #475569;
	}

	ul.routes {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.5rem;
	}

	a.route {
		display: block;
		padding: 0.75rem 1rem;
		border-radius: 8px;
		text-decoration: none;
		color: #0f172a;
		background: linear-gradient(180deg, #ffffff, #fbfdff);
		border: 1px solid #e6eef8;
	}

	a.route:hover {
		transform: translateY(-1px);
		box-shadow: 0 6px 20px rgba(12,16,30,0.06);
	}

	.meta {
		margin-top: 1rem;
		font-size: 0.9rem;
		color: #94a3b8;
	}
</style>

<main>
	<h1>Svelte Demo — Routes</h1>
	<p class="lead">Quick links to the example routes in this project. Click a card to open that route.</p>

	<ul class="routes">
		<li><a class="route" href="/01">01 — Components</a></li>
		<li><a class="route" href="/02">02 — Reactivity</a></li>
		<li><a class="route" href="/03">03 — Template Conditionals</a></li>
		<li><a class="route" href="/04">04 — Template Loops</a></li>
		<li><a class="route" href="/05">05 — Props</a></li>
		<li><a class="route" href="/06">06 — Routing</a></li>
	</ul>

	<div class="meta">If a route doesn't render, check the corresponding folder under <code>src/routes/</code>.</div>
</main>

