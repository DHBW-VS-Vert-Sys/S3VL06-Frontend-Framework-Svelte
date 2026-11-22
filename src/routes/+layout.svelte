<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	:global(body) {
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
		margin: 0;
		padding: 0;
		background: #f7f9fc;
		color: #0f172a;
	}
</style>

{@render children()}
