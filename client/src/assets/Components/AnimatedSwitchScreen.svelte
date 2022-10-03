<script context="module">
    const EMPTYCONTENT = {component: null, props:{}, id: 0};
</script>

<script>
    export let scrollDuration = 400;
    export let currentContent = {component: null, props: {}};

    let scrollComponents = [{...currentContent, id: 1}, EMPTYCONTENT];

    let n = 2;

    let isScrollingLeft = false;
    export function insertRight(toInsert) {
        return () => {
            if (isScrollingLeft || isScrollingRight) return;

            isScrollingLeft = true;
            scrollComponents[1] = {...toInsert, id:n++};
            
            setTimeout(() => {
                isScrollingLeft = false;
                scrollComponents = [scrollComponents[1], EMPTYCONTENT]
            }, scrollDuration)
        }
    }

    let isScrollingRight = false;
    export function insertLeft(toInsert) {
        return () => {
            if (isScrollingLeft || isScrollingRight) return;

            isScrollingRight = true;
            scrollComponents[1] = {...toInsert, id:n++};
            
            setTimeout(() => {
                isScrollingRight = false;
                scrollComponents = [scrollComponents[1], EMPTYCONTENT]
            }, scrollDuration)
        }
    }

</script>


<section>
    <div class=Scroll class:ScrollLeft={isScrollingLeft} class:ScrollRight={isScrollingRight} style={`animation-duration: ${scrollDuration}ms`}>
        {#each scrollComponents as {component, id} (id)}
            <div class=ScrollComponent>
                <svelte:component this={component} />
            </div>
        {/each}
        
    </div>

    <!-- <button on:click={insertLeft(Community)}>
        left
    </button>
    <button on:click={insertRight(MySheets)}>
        right
    </button> -->
</section>


<style>
    section {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        position: relative;       
    }

    .Scroll {
        width: 200%;
        height: 100%;
        display: flex;
    }

    .ScrollComponent {
        width: 100%;
        height: 100%;
        flex-basis: 100%;
    }

    .ScrollLeft {
        animation: scrollLeft;
    }

    @keyframes scrollLeft {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-50%);
        }
    }

    .ScrollRight {
        flex-direction: row-reverse;
        animation: scrollright;
    }

    @keyframes scrollright {
        from {
            transform: translateX(-50%);
        }
        to {
            transform: translateX(0%);
        }
    }



</style>