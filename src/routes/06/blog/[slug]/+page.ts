import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type Post = {
    title: string;
    content: string;
};

type Posts = {
    [key: string]: Post;
};

export const load: PageLoad = ({ params }) => {
    // Simulierte Blog-Daten
    const posts: Posts = {
        'hello-sveltekit': {
            title: 'Hello SvelteKit',
            content: '<p>Willkommen zu unserem ersten SvelteKit Blog-Post! SvelteKit ist ein Framework für das Erstellen moderner Web-Anwendungen.</p>'
        },
        'routing-basics': {
            title: 'Routing Basics',
            content: '<p>In SvelteKit basiert das Routing auf dem Dateisystem. Jede <code>+page.svelte</code> Datei wird zu einer Route.</p>'
        },
        'dynamic-routes': {
            title: 'Dynamic Routes',
            content: '<p>Dynamische Routen werden mit eckigen Klammern definiert: <code>[slug]</code>. Der Parameter ist dann über <code>params.slug</code> verfügbar.</p>'
        }
    };

    const post = posts[params.slug];

    if (!post) {
        error(404, 'Blog post not found');
    }

    return {
        slug: params.slug,
        title: post.title,
        content: post.content
    };
};
