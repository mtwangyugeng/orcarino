<script>
    import { isLoggingIn, user } from "$src/api/_User";
import TabWithIcon from "$src/assets/Components/TabWithIcon.svelte";
    import { TABS } from "../UserFrame.svelte";
    export let activatedTabIndex = 0;
</script>

<section>
    {#each TABS as {icon, name, isLoginContent},i (name)}
        <div class="TabContainer">
            <TabWithIcon icon={icon} name={name} i={i} activatedTabIndex={activatedTabIndex} on:click={()=>activatedTabIndex =i} />
            {#if isLoginContent && $user === null}
                <div class=LoginMessage>
                    You need to&nbsp;<button class=LoginButton on:click={()=>isLoggingIn.set(true)}> login </button> &nbsp;to user this feature.
                </div>
            {/if}
        </div>
    {/each}
</section>

<style>
    .TabContainer {
        position: relative;
        display: flex;
    }
    .LoginMessage {
        position: absolute;
        height: 100%;
        width: 100%;
        color: white;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .LoginButton {
        text-decoration: underline;
        font-weight: bold;
    }

    @media (min-width: 600px){
        section {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
    
</style>