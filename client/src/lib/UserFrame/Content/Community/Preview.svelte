<script>
    import {previews} from '$src/api/Community';
    import NotePreview from '../NotePreview.svelte';
</script>

<section>
    {#each $previews as preview (preview.id) }
    <span>
        <NotePreview {...preview} isPrivate={false}/>
    </span>
    {/each}

    {#each Array(8) as _}
        <span>
            <div class=Decoy />
        </span>
    {/each}
        
</section>

<style>
    section {
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        

        padding: 10px;
    }

    span{
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .Decoy {
        width: 220px;
    }
</style>