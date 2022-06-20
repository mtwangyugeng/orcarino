<script>
    export let tabs = [
        {icon:null, name:"Community"}, 
        {icon:null, name:"My Sheets"}, 
    ]

    export let activatedTabIndex = 0;
</script>

<section>
    {#each tabs as {icon, name},i (name)}
        <div class=Tab class:TabActivated={activatedTabIndex === i} on:click={() => activatedTabIndex = i}>
            {name}
        </div>
    {/each}
</section>


<style>
    section {
        width: 100%;
        height: 100%;
        background-color: yellow;
        display: flex;
    }
    .Tab {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
        transition: all 200ms;
    }
    .TabActivated {
        background-color: red;
    }
</style>