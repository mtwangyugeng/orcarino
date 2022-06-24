<script>
import ExpandAndRetractButton from "$src/assets/Components/ExpandAndRetractButton.svelte";
import TabWithIcon from "$src/assets/Components/TabWithIcon.svelte";
import UserInfo from "./UserInfo.svelte";

    export let tabs;

    export let activatedTabIndex;
    export let barActive = false;
</script>

<section class:BarActive={barActive}>
    <span class=ExpandAndRetractButton>
        <ExpandAndRetractButton bind:isExpanded={barActive}/>
    </span>
    <div class=TabContainer>
    <span class=Profile>
        <UserInfo />
    </span>

    
    {#each tabs as {icon, name},i (name)}
        <TabWithIcon icon={icon} name={name} i={i} activatedTabIndex={activatedTabIndex} on:click={()=>activatedTabIndex = i} />
    {/each}
    </div>
</section>


<style>
    section {
        width: 100%;
        height: 100%;
        background-color: yellow;
        display: flex;
    }
    .TabContainer {
        display: flex;
        width: 100%;
    }
    .Profile {
        display: none;
    }
    @media (min-width: 600px) {
        section {
            flex-direction: column;
            background-color: transparent;
        }
        .TabContainer {
            flex-direction: column;
            pointer-events: none;
            opacity: 0;
            transition: all 200ms;
            overflow: hidden;
        }
        .BarActive .TabContainer {
            opacity: 1;
            pointer-events: all;
        }

        .ExpandAndRetractButton :global(svg){
            width: 50px;
            height: 50px;
        }
        .ExpandAndRetractButton{
            position: absolute;
        }

        .Profile {
            display: block;
        }   
    }
</style>