<script>
import NotePreview from "./NotePreview.svelte";
import {previews} from "$src/api/MySheet"
import AddSheet from "./AddSheet.svelte";
</script>

<section>
    <div class=PreviewContainer>
        {#each $previews as preview (preview.id) }
        <span>
            <NotePreview {...preview}/>
        </span>
        {/each}
        <span>
            <AddSheet />
        </span>

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
        background-color: pink;
        overflow: auto;
    
    }

    .PreviewContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        background-color: rgb(236, 136, 22);

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