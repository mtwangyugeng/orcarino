<script>
import NotePreview from "./NotePreview.svelte";

let previews = Array(13);

</script>

<section>
    <div class=PreviewContainer>
        {#each previews as _,i (i) }
        <span>
            <NotePreview />
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