<script>
    import Cursor from "./Cursor.svelte";
import SingleNote from "./SingleNote/SingleNote.svelte";
    export let notes = ["000000000000", "space", "000000000100"];
    function deleteNote(i) {
        notes=[...notes.slice(0, i), ...notes.slice(i + 1)];
    }

    export let isEditable = true;

    let activatedIndex =0;
    $:console.log(activatedIndex)
</script>

<section class:NotEditable={!isEditable}>
    
    {#if isEditable}
        <div class=EditContainer>
            <button on:click={() => notes = [...notes.slice(0, activatedIndex + 1), "space", ...notes.slice(activatedIndex + 1)]}>Add New</button>
        </div>
    {/if}

    <div class=SingleNotesContainer>
        <Cursor bind:activatedIndex={activatedIndex} index={-1}/>
        {#each notes as note,i (i)}
            <div class=SingleNoteContainer>
                <SingleNote bind:selectedCover={note} deleteThis={()=>deleteNote(i)} />
                
            </div>
            <Cursor bind:activatedIndex={activatedIndex} index={i}/>
        {/each}
    </div>


</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }

    .SingleNotesContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 10px;
    }

    .NotEditable {
        pointer-events: none;
    }

    .EditContainer {
        display: flex;
        flex-direction: column;
        background-color: red;
        /* width: 100px; */
    }

    .EditContainer > * {
        flex: 1;
    }

</style>