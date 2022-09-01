<script>
    import TabWithIcon from "$src/assets/Components/TabWithIcon.svelte";
    import { TABS } from "../UserFrame.svelte";
    export let activatedTabIndex = 0;
</script>

<section>
    {#each TABS as {icon, name},i (name)}
        <TabWithIcon icon={icon} name={name} i={i} activatedTabIndex={activatedTabIndex} on:click={()=>activatedTabIndex =i} />
    {/each}
</section>

<style>

    @media (min-width: 600px){
        section {
            margin-top: 10px;
        }
    }
    
</style>