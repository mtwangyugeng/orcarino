<script>
import { noteToForm } from "./SingleNote.svelte";


    export let selectedCover;
    export let handleSelect;

</script>

<select bind:value={selectedCover} on:change={handleSelect(selectedCover)}>
    {#each Array.from(noteToForm.entries()) as [key, value] (key)}
        <option value={value}>{key}</option>
    {/each}
</select>