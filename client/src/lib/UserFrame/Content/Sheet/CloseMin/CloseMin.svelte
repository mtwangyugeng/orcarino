<script>
import Close from "./Close.svelte";
import Min from "./Min.svelte";


</script>

<section>
    <Min />
    <Close />
</section>


<style>
    section {
        display: flex;
        gap: 5px;
    }

    section :global(svg) {
        width: 30px;
        height: 30px;
        opacity: 0.7;
        transition: all 200ms;
        cursor: pointer;
    }

    section :global(svg):hover {
        opacity: 1;
    }
</style>