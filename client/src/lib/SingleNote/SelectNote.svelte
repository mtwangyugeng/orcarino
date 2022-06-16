<script>
import CustomSelect from "../../assets/Components/CustomSelect.svelte";
import { noteToForm, formToNote } from "./SingleNote.svelte";


    export let selectedCover;

    $: note = formToNote.get(selectedCover)
</script>

<div>
    <!-- <select bind:value={selectedCover} on:change={handleSelect(selectedCover)}>
        {#each Array.from(noteToForm.entries()) as [key, value] (key)}
            <option value={value}>{key}</option>
        {/each}
    </select> -->

    <CustomSelect options={Array.from(noteToForm.entries())} bind:selectedValue={selectedCover} bind:search={note}/>
</div>