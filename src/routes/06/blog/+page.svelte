<script lang="ts">
    import { goto } from '$app/navigation';

    type Post = {
        slug: string;
        title: string;
    };

    let posts: Post[] = $state([
        { slug: 'hello-sveltekit', title: 'Hello SvelteKit' },
        { slug: 'routing-basics', title: 'Routing Basics' },
        { slug: 'dynamic-routes', title: 'Dynamic Routes' }
    ]);
</script>

<style>
    h1 { color: #2b6cb0; }
    .container { padding: 1rem; }
    .post-list {
        list-style: none;
        padding: 0;
    }
    .post-item {
        border: 1px solid #ddd;
        padding: 0;
        margin-bottom: 0.5rem;
        border-radius: 4px;
    }
    .post-item a {
        display: block;
        padding: 1rem;
        text-decoration: none;
        color: inherit;
    }
    .post-item:hover {
        background-color: #f0f0f0;
    }
</style>

<div class="container">
    <h1>Blog</h1>
    <p>Route: <code>/06/blog</code></p>
    <p>Klicke auf einen Beitrag, um zur dynamischen Route zu navigieren (verwendet normale &lt;a&gt; Tags für Client-Side Navigation):</p>
    
    <ul class="post-list">
        {#each posts as post (post.slug)}
            <li class="post-item">
                <a href="non-existent" onclick={(event) => { event.preventDefault(); goto(`/06/blog/${post.slug}`); }}>
                    <strong>{post.title}</strong> → <code>/06/blog/{post.slug}</code>
                </a>
            </li>
        {/each}
    </ul>
</div>
