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
    import SingleNote from "./SingleNote/SingleNote.svelte";
    export let notes = ["000000000000", "space", "000000000100"];
    let {notesWithIndex, nextIndex} = iniNotes(notes)
    $:console.log(notesWithIndex)

    function deleteNote(i) {
        notesWithIndex=[...notesWithIndex.slice(0, i), ...notesWithIndex.slice(i + 1)];
    }

    export let isEditable = false;

    let activatedIndex =0;
    $:console.log(activatedIndex)


    function addNote(i) {
        return () =>
        notesWithIndex = [...notesWithIndex.slice(0, i + 1), {index:nextIndex++, note: "space"}, ...notesWithIndex.slice(i + 1)]
    }

    //animation for note 
    import {flip} from "svelte/animate"
import AddSingleNote from "./AddSingleNote.svelte";
import ToolBar from "./ToolBar/ToolBar.svelte";
</script>

<section>
    <div class=ToolBarContainer>
        <ToolBar bind:isEditable={isEditable} />
    </div>
    <div class=SingleNotesContainer>
        <AddSingleNote isEditable={isEditable} on:click={addNote(-1)}/>
        <div class=SingleNotes>
            
           
            {#each notesWithIndex as {index, note},i (index)}
                <div class=SingleNoteContainer animate:flip="{{duration: 200}}">
                    <SingleNote isEditable={isEditable} bind:selectedCover={note} deleteThis={()=>deleteNote(i)} />
                    <AddSingleNote isEditable={isEditable} on:click={addNote(i)}/>
                
                </div>
                
            {/each}
        </div>
    </div>


</section>

<style>
    section {
        display: flex;
        background-color: rgb(250, 137, 44);
        height: 100%;
        /* overflow: hidden; */
    }
    .ToolBarContainer{
        width: 100px;
        /* background-color: red; */
    }

    .SingleNotesContainer {
        overflow: auto;
        
    }

    .SingleNotes {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 5px;
        align-items: flex-start;
        width: fit-content;
    }

    .SingleNoteContainer {
        display: flex;
        height: fit-content;
        align-items: center;
    }

</style>