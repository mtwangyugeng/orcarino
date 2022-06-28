<script>
import SingleNote from "./SingleNote/SingleNote.svelte";

    let notes = [];
    $: console.log(notes)

    function deleteNote(id) {
        notes=[...notes.slice(0, id), ...notes.slice(id+1)];
    }

    export let title = "Ode to Joy";
</script>

<section>
    <h1>{title}</h1>
    <div class=NotesContainer>
        {#each notes as note,i (i)}
            <div>
            {#if note}
                <SingleNote bind:selectedCover={note}/>
            {:else}
                <div class=Space>Space</div>
            {/if}
            <button on:click={()=>deleteNote(i)}>delete</button>
            </div>
        {/each}

        <div class=ButtonsContainer>
        <button on:click={() => notes = [...notes, "000000000000"]}>add note</button>
        <button on:click={() => notes = [...notes, null]}>add space</button>
        </div>
    </div>
</section>

<style>
    .NotesContainer {
        display: flex;
        flex-wrap: wrap;
    }

    .Space {
        width: 400px;
        height: 400px;
        background-color: yellow;
    }

    .ButtonsContainer {
        display: flex;
        flex-direction: column;
        background-color: red;
    }

    .ButtonsContainer > * {
        flex: 1;
    }

</style>