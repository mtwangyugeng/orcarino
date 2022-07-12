<script>
import Edit from "./Edit/Edit.svelte";
import Fork from "./Fork/Fork.svelte";
import Share from "./Share/Share.svelte";


    export let isEditable = false;
</script>

<section>
    <Edit bind:isEditable={isEditable} />
    <Fork />
    <Share />
</section>

<style>
    section {
        background-color: blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding: 10px;
    }
</style>
