<script>
    export let tabs = [
        {icon:null, name:"Community"}, 
        {icon:null, name:"My Sheets"}, 
    ]

    export let activatedTabIndex = 0;
    export let barActive = false;
</script>

<section class:BarActive={barActive}>
    <button class=Top on:click={()=>barActive=!barActive}>click to expand</button>

    <div class=TabContainer>
    {#each tabs as {icon, name},i (name)}
        <div class=Tab class:TabActivated={activatedTabIndex === i} on:click={() => activatedTabIndex = i}>
            {name}
        </div>
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
    .Top {
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

        .Top {
            display: block;
        }
    }
</style>