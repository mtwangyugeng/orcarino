<script>
    import {currPage, getCommunityByPage, previews} from '$src/api/Community';
    import LoadingOverlay from '$src/assets/Components/LoadingOverlay.svelte';
    import NotePreview from '../NotePreview.svelte';
</script>

<section>
    {#await getCommunityByPage($currPage)}
      <LoadingOverlay />  
    {/await}

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