<script>
    import { fly } from 'svelte/transition';

    export let currTab;
    export let currSheetId; // userTab
</script>

<section>
    {#key currTab}
    <span style="display: inline-block" in:fly={{ x: -20 }}>
        <svelte:component this={currTab} />
    </span>
    {/key}
</section>

<style>
    section {
        height: 100%;
        width: 100%;
        background-color: yellow;
    }
    span {
        height: 100%;
        width: 100%;
    }
</style>