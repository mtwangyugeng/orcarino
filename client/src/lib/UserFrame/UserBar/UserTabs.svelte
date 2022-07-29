<script>
import TitleWithLineOnTwoSides from "$src/assets/Components/TitleWithLineOnTwoSides.svelte";
import { setCurrSheetId, userTabs } from "$src/api/UserTabs";
    
</script>

<section>
    <TitleWithLineOnTwoSides>
        User Tabs
    </TitleWithLineOnTwoSides>

    {#each $userTabs as {title, id} (id)}
        <button on:click={() => setCurrSheetId(id)}>
            {title}
        </button>
    {/each}

</section>

<style>
    section {
        display: flex;
        flex-direction: column;
    }
</style>