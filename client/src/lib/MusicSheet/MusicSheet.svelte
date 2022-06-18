<script>
import SingleNote from "../SingleNote/SingleNote.svelte";

    let notes = [];
    $: console.log(notes)
</script>

<section>
    {#each notes as note,i (i)}
        <SingleNote bind:selectedCover={note}/>
    {/each}

    <button on:click={() => notes = [...notes, "000000000000"]}>add note</button>
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
    }

</style>