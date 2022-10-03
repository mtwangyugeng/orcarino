<script>
import { currPage, getNumberOfPages, numOfPages, toLeft, toRight } from "$src/api/Community";
import ArrowWithAnimation from "$src/assets/Components/ArrowWithAnimation.svelte";
import CustomSelect from "$src/assets/Components/CustomSelect.svelte";
    import LoadingOverlay from "$src/assets/Components/LoadingOverlay.svelte";
import Preview from "./Preview.svelte";

$:options = Array($numOfPages).fill(null).map((_, i) => [(i + 1)+"", i+1])
$:console.log(options)
export let insertRight;
export let insertLeft;

function handleRight() {
    toRight();
    insertRight({component: Preview, props:{curPage: $currPage}})();
}

function handleLeft() {
    toLeft();
    insertLeft({component: Preview, props:{curPage: $currPage}})();
}

let prevPage = $currPage;
$: {
    if (prevPage > $currPage) {
        insertLeft({component: Preview, props:{}})();
    }

    if (prevPage < $currPage) {
        insertRight({component: Preview, props:{}})();
    }

    prevPage = $currPage;
};

</script>

<section>
    {#await getNumberOfPages()}
        <LoadingOverlay />
        
    {/await}
    <div class=LeftArrowContainer>
        {#if $currPage > 1}
            <ArrowWithAnimation on:click={handleLeft}/>
        {/if}
    </div>
    <div class=SelectContainer>
        <CustomSelect options={options} bind:selectedValue={$currPage} isUpsideDown={true}/>
    </div>
    <div class=RightArrowContainer >
        {#if $currPage < $numOfPages}
            <ArrowWithAnimation on:click={handleRight}/>
        {/if}
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 10px;
        position: relative;
    }

    .SelectContainer {
        height: 25px;
        width: 50px;
        background-color: rgb(245, 174, 22);
        border-radius: 10px;
    }

    section :global(svg) {
        height: 30px;
        width: 40px;
    }

    .LeftArrowContainer {
        transform: rotate(180deg);
        height: 30px;
        width: 40px;
    }

    .RightArrowContainer {
        height: 30px;
        width: 40px;
    }

</style>