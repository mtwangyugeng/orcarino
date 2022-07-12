<script>
import Close from "$src/assets/Icons/Close.svelte";

</script>

<button on:click>
    <Close />
</button>


<style>
    button :global(svg) {
        height: 30px;
        width: 30px;
    }
</style>