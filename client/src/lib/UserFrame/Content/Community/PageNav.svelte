<script>
import { currPage, numOfPages } from "$src/api/Community";
import CustomSelect from "$src/assets/Components/CustomSelect.svelte";

$:options = Array($numOfPages).fill(null).map((_, i) => [(i + 1)+"", i+1])


</script>

<section>
    <div class=SelectContainer>
        <CustomSelect options={options} bind:selectedValue={$currPage} isUpsideDown={true}/>
    </div>
    
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .SelectContainer {
        height: 25px;
        width: 50px;
        background-color: red;
    }
</style>