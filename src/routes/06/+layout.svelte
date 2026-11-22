<script lang="ts">
    let { children } = $props();
</script>

<style>
    nav {
        background-color: #2b6cb0;
        padding: 1rem;
        margin-bottom: 2rem;
    }
    
    nav a {
        color: white;
        text-decoration: none;
        margin-right: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 4px;
    }
    
    nav a:hover {
        background-color: #1e4e8c;
    }
</style>

<nav>
    <a href="/06">Home</a>
    <a href="/06/about">About</a>
    <a href="/06/products">Products</a>
    <a href="/06/blog">Blog</a>
</nav>

{@render children()}
