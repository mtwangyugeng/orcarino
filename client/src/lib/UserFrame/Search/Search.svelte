<script>
    import {fly} from 'svelte/transition'
    export let search = '';
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
        
        <input bind:value={search} placeholder={`Search in ${tabName}`}/>
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