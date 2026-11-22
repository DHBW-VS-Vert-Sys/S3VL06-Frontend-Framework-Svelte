<script lang="ts">
    import { User } from './User';

    let { user }: { user: User } = $props();
</script>

<style>
    .card { border: 1px solid #ddd; padding: .5rem; border-radius: 6px; display: inline-block; }
    .avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; margin-right: .5rem; vertical-align: middle; }
    .meta { display: inline-block; vertical-align: middle; }
</style>

<div class="card">
    <!-- 4) Avatar-Bild anzeigen, wenn user.avatar existiert -->
     
    <div class="meta">
        <strong>{user.name ?? 'Anonym'}</strong>
        <div><em>{user.role}</em></div>
    </div>
</div>
    