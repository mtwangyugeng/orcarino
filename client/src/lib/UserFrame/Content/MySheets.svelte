<script>
import NotePreview from "./NotePreview.svelte";
import {previews} from "$src/api/MySheet"
import AddSheet from "./AddSheet.svelte";

import {flip} from "svelte/animate"
</script>

<section>
    <div class=PreviewContainer>
        {#each [...$previews, {id:-1}] as preview (preview.id) }
            <span animate:flip="{{duration: 200}}">
                {#if preview.id !== -1}
                    <NotePreview {...preview}/>
                {:else}
                    <AddSheet />
                {/if}
            </span>
        {/each}

        {#each Array(8) as _}
            <span>
                <div class=Decoy />
            </span>
        {/each}
        
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        background-color: rgb(236, 136, 22);
        overflow: auto;
    
    }

    .PreviewContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        

        padding: 10px;
    }

    .PreviewContainer > span{
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .Decoy {
        width: 220px;
    }

</style>