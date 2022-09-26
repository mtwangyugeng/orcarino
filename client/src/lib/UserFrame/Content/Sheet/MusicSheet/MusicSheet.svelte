<script context="module">
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
    import {isLoadingNotes, notes} from "$src/api/Sheet";
    let {notesWithIndex, nextIndex} = iniNotes($notes)
    notes.subscribe(v=>{
        const t = iniNotes(v)
        notesWithIndex = t.notesWithIndex
        nextIndex = t.nextIndex
    }
    )

    function deleteNote(i) {
        notesWithIndex=[...notesWithIndex.slice(0, i), ...notesWithIndex.slice(i + 1)];
    }
    function addNote(i) {
        notesWithIndex = [...notesWithIndex.slice(0, i + 1), {index:nextIndex++, note: "space"}, ...notesWithIndex.slice(i + 1)]
    }


    export let isEditable = false;

    let activatedIndex =0;
    $:console.log(activatedIndex)


    //animation for note 
    import {flip} from "svelte/animate"
import AddSingleNote from "./AddSingleNote.svelte";
    import LoadingOverlay from "$src/assets/Components/LoadingOverlay.svelte";
</script>

<section>
    {#if $isLoadingNotes}
        <LoadingOverlay />
    
    {:else}
        <div class=SingleNotesContainer>
            <AddSingleNote isEditable={isEditable} on:click={() => addNote(-1)}/>
            <div class=SingleNotes>
                
            
                {#each notesWithIndex as {index, note},i (index)}
                    <span animate:flip="{{duration: 200}}">
                        <div class=SingleNoteContainer >
                            <SingleNote isEditable={isEditable} bind:selectedCover={note} deleteThis={()=>deleteNote(i)} />
                            <AddSingleNote isEditable={isEditable} on:click={() => addNote(i)}/>
                        
                        </div>
                    </span>
                {/each}

                {#each Array(8) as _}
                    <span>
                        <div class="SingleNoteDecoy">
                        </div>
                    </span>
                {/each} 
            </div>
        </div>
    {/if}

</section>

<style>
    section {
        display: flex;
        background-color: rgb(250, 137, 44);
        height: 100%;
        /* overflow: hidden; */
        position: relative;
    }

    .SingleNotesContainer {
        overflow: auto;
        
    }

    .SingleNotes {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 5px;
    }

    .SingleNoteContainer {
        display: flex;
        height: fit-content;
        align-items: center;
    }

    .SingleNoteDecoy {
        width: 200px;
    }

    .SingleNotes > span{
        flex: 1;
        display: flex;
        justify-content: center;
    }
</style>