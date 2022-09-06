<script>
import Community from "$src/lib/UserFrame/Content/Community/Community.svelte";

import MySheets from "$src/lib/UserFrame/Content/MySheets.svelte";



    let scrollComponents = [{scrollComponent: Community, id: 1}, {scrollComponent: null, id: 0}];

    let isScrollingLeft = false;

    export function insertRight(toInsert) {
        return () => {
            isScrollingLeft = true;
            scrollComponents[1] = {scrollComponent: toInsert, id:2};
            setTimeout(() => {
                isScrollingLeft = false;
                scrollComponents = [scrollComponents[1], null]
                console.log(scrollComponents.length)
            }, 1000)
        }
    }

    function insertLeft() {

    }

</script>


<section>
    <div class=Scroll class:ScrollLeft={isScrollingLeft}>
        {#each scrollComponents as {scrollComponent, id} (id)}
            <div class=ScrollComponent>
                <svelte:component this={scrollComponent} />
            </div>
        {/each}
        
    </div>

    <button on:click={insertLeft}>
        left
    </button>
    <button on:click={insertRight(MySheets)}>
        right
    </button>
</section>


<style>
    section {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        background-color: red;
       
    }

    .Scroll {
        width: 200%;
        height: 90%;
        
        display: flex;
    }

    .ScrollComponent {
        width: 100%;
        height: 50%;
        flex-basis: 100%;
    }

    .ScrollLeft {
        transition: transform 1s;
        transform: translateX(-50%);
    }



</style>