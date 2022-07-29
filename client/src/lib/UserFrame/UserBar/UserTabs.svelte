<script>
import TitleWithLineOnTwoSides from "$src/assets/Components/TitleWithLineOnTwoSides.svelte";
import { setCurrSheetId } from "$src/api/UserTabs";
    export let userTabs=[{title: "Ode to Joy", id:69}, {title: "Obito theme", id:22}];
    
</script>

<section>
    <TitleWithLineOnTwoSides>
        User Tabs
    </TitleWithLineOnTwoSides>

    {#each userTabs as {title, id} (id)}
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