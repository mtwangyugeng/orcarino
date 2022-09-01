<script>
import TitleWithLineOnTwoSides from "$src/assets/Components/TitleWithLineOnTwoSides.svelte";
import { setCurrSheetId, userTabs, closeTab, currSheetId } from "$src/api/UserTabs";
import CloseIcon from "$src/assets/Icons/CloseIcon.svelte";
    
</script>

<section>
    <TitleWithLineOnTwoSides>
        User Tabs
    </TitleWithLineOnTwoSides>

    <div class=UserTabsContainer>
        {#each $userTabs as {title, id} (id)}
            <button class=Tab class:Active={$currSheetId === id} on:click|self={() => setCurrSheetId(id)}>
                {title}
                <button class=Close on:click={() => closeTab(id)}>
                    <CloseIcon />
                </button>
            </button>
        {/each}
    </div>

</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .UserTabsContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 250px;
        overflow: auto;
    }

    .Tab {
        background-color: rgba(255,255,255,0.5);
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 20px;

        border-radius: 10px;
        transition: all 200ms;
    }

    .Tab:hover {
        background-color: rgba(255,255,255,1);
    }

    .Close :global(svg){
        width: 20px;
        height: 20px;
        opacity: 0.7;
    }

    .Close:hover :global(svg){
        opacity: 1;
        transition: all 200ms;
    }

    .Active {
        background-color: rgba(255,255,255,1);
        padding: 15px 20px;
;    }
</style>