<script>
    import {currPage, getCommunityByPage, isLoadingPreviews, previews} from '$src/api/Community';
    import LoadingOverlay from '$src/assets/Components/LoadingOverlay.svelte';
    import NotePreview from '../NotePreview.svelte';
    export let curPage;
    
</script>

<section>
    {#await getCommunityByPage(curPage)}
      <LoadingOverlay />  
    {:then}
        {#each $previews as preview (preview.id) }
        <span>
            <NotePreview {...preview}/>
        </span>
        {/each}

        {#each Array(8) as _}
            <span>
                <div class=Decoy />
            </span>
        {/each}
    {/await}

    
        
</section>

<style>
    section {
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        position: relative;
        height: 100%;
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