<script>
import { user } from "$src/api/_User";
import ExpandAndRetractButton from "$src/assets/Components/ExpandAndRetractButton.svelte";
import TabWithIcon from "$src/assets/Components/TabWithIcon.svelte";
import AskLogin from "./AskLogin.svelte";
import Tabs from "./Tabs.svelte";
import UserInfo from "./UserInfo/UserInfo.svelte";
import UserTabs from "./UserTabs.svelte";

    export let barActive = false;
    export let activatedTabIndex = 0;
</script>

<section class:BarActive={barActive}>
    <span class=ExpandAndRetractButton>
        <ExpandAndRetractButton bind:isExpanded={barActive}/>
    </span>
    <div class=TabContainer>
        {#if $user !== null}
            <span class=Profile>
                <UserInfo />
            </span>
            <UserTabs/>
        {:else}
            <AskLogin />
        {/if}

        <Tabs bind:activatedTabIndex={activatedTabIndex}/>

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
            z-index: 2;
        }

        .Profile {
            display: block;
        }   
    }
</style>