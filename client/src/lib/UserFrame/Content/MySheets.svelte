<script>
import NotePreview from "./NotePreview.svelte";
import {previews} from "$src/api/MySheet"
</script>

<section>
    <div class=PreviewContainer>
        {#each $previews as preview (preview.id) }
        <span>
            <NotePreview {...preview}/>
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
        
        padding: 20px;
    }

    .PreviewContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        background-color: blue;
    }

    .PreviewContainer > span{
        flex: 1;
        display: flex;
    }

</style>