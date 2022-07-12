<script context="module">
    const states = [
        {name: "Edit", icon: EditIcon},
        {name: "Save", icon: SaveIcon},
    ]
</script>

<script>
    import RippleButton from "$src/assets/Components/RippleButton.svelte";
    import EditIcon from "$src/assets/Icons/EditIcon.svelte";
    import SaveIcon from "$src/assets/Icons/SaveIcon.svelte";
    export let isEditable = false;
</script>

<section class:Save={isEditable} class=EditButton>
    <RippleButton on:click={() => isEditable = !isEditable}>
        {#if isEditable}
            <SaveIcon /> Save
        {:else}
            <EditIcon /> Edit
        {/if}
    </RippleButton>
</section>

<style>
   section {
        transition: all 200ms;
        border: 1px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
        font-weight: bold;
   }

   section > :global(.RippleButton) {
        padding: 10px;
        display: flex;
        gap: 5px;
   }
   section :global(svg) {
        width: 15px;
        height: 15px;
   }

   .Save {
    background-color: green;
   }
</style>
