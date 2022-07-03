<script>
    import SingleNote from "./SingleNote/SingleNote.svelte";
    export let notes = ["000000000000", null, "000000000100"];
    function deleteNote(i) {
        notes=[...notes.slice(0, i), ...notes.slice(i + 1)];
    }

    export let isEditable = true;

</script>

<section class:NotEditable={!isEditable}>
    {#each notes as note,i (i)}
        <div class=SingleNoteContainer>
            <SingleNote bind:selectedCover={note} />

            <button on:click={()=>deleteNote(i)}>delete</button>
        </div>
    {/each}

    {#if isEditable}
        <div class=EditContainer>
            <button on:click={() => notes = [...notes, "000000000000"]}>add note</button>
            <button on:click={() => notes = [...notes, null]}>add space</button>
        </div>
    {/if}
</section>

<style>
    section {
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
    }

    .EditContainer > * {
        flex: 1;
    }

</style>