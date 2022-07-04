<script context="module">

    // gives the notes a proper index in order for svelte to track the proper state to update
    function iniNotes(notes) {
        let nextIndex = 0;
        const notesWithIndex = notes.map(note => {
            return {index: nextIndex++, note}
        })
        return {notesWithIndex, nextIndex};
    }
</script>

<script>
    import Cursor from "./Cursor.svelte";
import SingleNote from "./SingleNote/SingleNote.svelte";
    export let notes = ["000000000000", "space", "000000000100"];
    let {notesWithIndex, nextIndex} = iniNotes(notes)
    $:console.log(notesWithIndex)

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
            <button on:click={() => notesWithIndex = [...notesWithIndex.slice(0, activatedIndex + 1), {index:nextIndex++, note: "space"}, ...notesWithIndex.slice(activatedIndex + 1)]}>Add New</button>
        </div>
    {/if}

    <div class=SingleNotesContainer>
        <Cursor bind:activatedIndex={activatedIndex} index={-1}/>
        {#each notesWithIndex as {index, note},i (index)}
            <span class=Expand>
                <div class=SingleNoteContainer>
                    <SingleNote bind:selectedCover={note} deleteThis={()=>deleteNote(i)} />
                    
                </div>
            </span>
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
        padding: 10px;
    }

    .SingleNoteContainer {
        margin-bottom: 10px;
        display: flex;
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

    .Expand {
        animation-name: expand;
        animation-duration: 400ms;
        opacity: 0;
        width: 0;
        animation-fill-mode: forwards;
    }
    @keyframes expand{
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: fit-content;
            opacity: 1;
        }
    }
</style>