<script lang="ts">
    type Product = {
        id: number;
        name: string;
        price: number;
    };

    let products: Product[] = $state([
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Smartphone', price: 699 },
        { id: 3, name: 'Tablet', price: 399 }
    ]);
</script>

<style>
    h1 { color: #2b6cb0; }
    .container { padding: 1rem; }
    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }
    .product-card {
        border: 1px solid #ddd;
        padding: 1rem;
        border-radius: 8px;
    }
    .product-card:hover {
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
</style>

<div class="container">
    <h1>Products</h1>
    <p>Route: <code>/06/products</code></p>
    
    <div class="product-grid">
        {#each products as product (product.id)}
            <div class="product-card">
                <h3>{product.name}</h3>
                <p><strong>{product.price} €</strong></p>
            </div>
        {/each}
    </div>
</div>
