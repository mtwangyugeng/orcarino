<script>
    import { fly } from 'svelte/transition';
import Sheet from './Sheet/Sheet.svelte';

    export let currTab;
    export let currSheetId; // userTab
</script>

<section>
    {#if currSheetId}
        {#key currSheetId}
            <span style="display: inline-block" in:fly={{ x: -20 }}>
                <Sheet currSheetId={currSheetId} />
            </span>
        {/key}
    {:else}
        {#key currTab}
        <span style="display: inline-block" in:fly={{ x: -20 }}>
            <svelte:component this={currTab} />
        </span>
        {/key}
    {/if}
</section>

<style>
    section {
        height: 100%;
        width: 100%;
        background-color: yellow;
        overflow: hidden;
    }
    span {
        height: 100%;
        width: 100%;
    }
</style>