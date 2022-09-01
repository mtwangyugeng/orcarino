<script context="module">
    import CommunityIcon from "$src/assets/Icons/CommunityIcon.svelte";
    import MySheetsIcon from "$src/assets/Icons/MySheetsIcon.svelte";
    import Community from "../Content/Community/Community.svelte";
    import MySheets from "../Content/MySheets.svelte";

    import {writable} from "svelte/store"

    export const TABS = [
        {icon:CommunityIcon, name:"Community", content: Community, isLoginContent: false}, 
        {icon:MySheetsIcon, name:"My Sheets", content: MySheets, isLoginContent: true}, 
    ]
    export const activatedTabIndex = writable(0);
</script>

<script>
    import TabWithIcon from "$src/assets/Components/TabWithIcon.svelte";

</script>

<section>
    {#each TABS as {icon, name},i (name)}
        <TabWithIcon icon={icon} name={name} i={i} activatedTabIndex={$activatedTabIndex} on:click={()=>activatedTabIndex.set(i)} />
    {/each}
</section>

<style>

    @media (min-width: 600px){
        section {
            margin-top: 20px;
        }
    }
    
</style>