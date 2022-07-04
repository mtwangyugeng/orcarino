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
        notesWithIndex=[...notesWithIndex.slice(0, i), ...notesWithIndex.slice(i + 1)];
    }

    export let isEditable = true;

    let activatedIndex =0;
    $:console.log(activatedIndex)


    function addNote() {
        notesWithIndex = [...notesWithIndex.slice(0, activatedIndex + 1), {index:nextIndex++, note: "space"}, ...notesWithIndex.slice(activatedIndex + 1)]
        activatedIndex++;
    }

    //animation for note 
    import {flip} from "svelte/animate"
</script>

<section class:NotEditable={!isEditable}>
    
    {#if isEditable}
        <div class=EditContainer>
            <button on:click={addNote}>Add New</button>
        </div>
    {/if}

    <div class=SingleNotesContainer>
        <Cursor bind:activatedIndex={activatedIndex} index={-1}/>
        {#each notesWithIndex as {index, note},i (index)}
            <div class=SingleNoteContainer animate:flip="{{duration: 200}}">
                <SingleNote bind:selectedCover={note} deleteThis={()=>deleteNote(i)} />
                <Cursor bind:activatedIndex={activatedIndex} index={i}/>
            </div>
            
            
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

</style>