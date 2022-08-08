<script>
import { currPage, numOfPages, toLeft, toRight } from "$src/api/Community";
import ArrowWithAnimation from "$src/assets/Components/ArrowWithAnimation.svelte";
import CustomSelect from "$src/assets/Components/CustomSelect.svelte";

$:options = Array($numOfPages).fill(null).map((_, i) => [(i + 1)+"", i+1])


</script>

<section>
    <div class=LeftArrowContainer>
        {#if $currPage > 1}
            <ArrowWithAnimation on:click={toLeft}/>
        {/if}
    </div>
    <div class=SelectContainer>
        <CustomSelect options={options} bind:selectedValue={$currPage} isUpsideDown={true}/>
    </div>
    <div class=RightArrowContainer >
        {#if $currPage < $numOfPages}
            <ArrowWithAnimation on:click={toRight}/>
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