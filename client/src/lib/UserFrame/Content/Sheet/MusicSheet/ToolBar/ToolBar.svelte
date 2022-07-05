<script>
import Edit from "./Edit/Edit.svelte";


    export let isEditable = false;
</script>

<section>
    <Edit bind:isEditable={isEditable} />
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
