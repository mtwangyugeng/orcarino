<script context="module">
    let sheet = [];

</script>

<script>
import SheetPreview from "./SheetPreview.svelte";

    let sheetsDisplay = [];

</script>


<section>
    {#each sheetsDisplay as sheetPreview }
        <SheetPreview {...sheetPreview}/>
    {/each}
</section>