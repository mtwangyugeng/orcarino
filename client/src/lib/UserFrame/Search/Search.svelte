<script>
    import {fly} from 'svelte/transition'
    import {searchMySheets, searchCommunity} from '$src/api/Search'
    export let tabIcon = null;
    export let tabName = '';
</script>

<section>
    <div class="container">
        {#key tabName}
            <span style="display: inline-block" in:fly={{ y: -20 }}>
                <svelte:component this={tabIcon} />
            </span>
        {/key}
        
        {#if tabName === 'My Sheets'}
            <input bind:value={$searchMySheets} placeholder={`Search in ${tabName}`}/>
        {:else if tabName === 'Community'}
            <input bind:value={$searchCommunity} placeholder={`Search in ${tabName}`}/>
        {/if}
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        background-color: rgb(245, 229, 207);
        display: flex;
        width: 500px;
        border-radius: 40px;
        padding: 20px;
    }

    .container :global(svg) {
		width: 30px;
		height: 30px;
        margin-right: 20px;
	}
    input {
        background-color: transparent;
        border: none;
        width: 90%;
    }
    input:focus {
        outline: none;
    }
</style>