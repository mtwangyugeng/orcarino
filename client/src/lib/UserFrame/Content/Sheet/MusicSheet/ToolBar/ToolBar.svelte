<script>
import Edit from "./Edit/Edit.svelte";
import Fork from "./Fork/Fork.svelte";
import Share from "./Share/Share.svelte";


    export let isEditable = false;
</script>

<section>
    <div>
        <Edit bind:isEditable={isEditable} />
    </div>

    <div class=BottomContainer>
        <Fork />
        <Share />
    </div>  
    
</section>

<style>
    section {
        background-color: rgb(255, 102, 0);
        height: 100%;
        padding: 10px;
        font-family: Arial, Helvetica, sans-serif;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .BottomContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .BottomContainer :global(svg) {
        width: 35px;
        height: 35px;
        transition: 200ms;
    }

    .BottomContainer :global(svg):hover {
        fill: #fff;
    }

</style>
