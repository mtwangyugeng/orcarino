<script>
import CustomSelect from "$src/assets/Components/CustomSelect.svelte";
import { noteToForm, formToNote } from "./SingleNote.svelte";


    export let selectedCover;
    
    export let isSelecting;
    $: note = formToNote.get(selectedCover)
</script>

<section>
    <CustomSelect options={Array.from(noteToForm.entries())} bind:selectedValue={selectedCover} bind:search={note} bind:isSelecting={isSelecting}/>
</section>

