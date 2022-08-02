<script>
    import { saveNotes } from "$src/api/Sheet";
    import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
    import EditIcon from "$src/assets/Icons/EditIcon.svelte";
    import SaveIcon from "$src/assets/Icons/SaveIcon.svelte";
    export let isEditable = false;
</script>

<section class:Save={isEditable} class=EditButton>
    <RippleButton on:click={() => isEditable = !isEditable} style={isEditable ? `background: green` : ``}>
        {#if isEditable}
            <SaveIcon /> Save
        {:else}
            <EditIcon /> Edit
        {/if}
    </RippleButton>
</section>

