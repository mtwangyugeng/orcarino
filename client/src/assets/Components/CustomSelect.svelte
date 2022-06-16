<script>
    import { flip } from 'svelte/animate';

    export let options = [""];

    let isSelecting = false;
    let selectedOption = null;
    let hoverOption = null;

    let search = "";
    $: searchRegex = new RegExp(`(^|\\s)${search}.*`, 'i');
    $: filteredOptions = options.filter(v => searchRegex.test(v) && (!selectedOption || v != selectedOption))

    const handleOptionClick = (option) => {
        return () => {
            selectedOption = option;
            isSelecting = false;
        }
    }

    const handleOptionHover = (option) => {
        return () => {
            hoverOption = option;
        }
    }

    const handleSearchInput = () => {
        isSelecting=true
    }
</script>

<div class="SelectContainer">
    <div >
        <div class="SelectedIngredient" on:click={()=>isSelecting=!isSelecting}>
            {isSelecting ? 
                selectedOption
            : "Select Ingredient"}
        </div>
        {#if isSelecting}
            <div class="Options" >
            {#each filteredOptions as option, i (i)}
            <span animate:flip="{{duration: 200}}">
                <div class={"Option " + ((hoverOption) ? "Activated" : "")} on:click={handleOptionClick(option)} 
                    on:focus={handleOptionHover(option)}
                    on:mouseover={handleOptionHover(option)}
                    on:blur={()=>hoverOption=null}
                    on:mouseout={()=>hoverOption=null}>
                    {option}
                </div>
            </span>    
            {/each}
            </div>
        {/if}
    </div>

    <input type="text" bind:value={search} placeholder="Search for Ingredient" on:input={handleSearchInput} on:focus={()=>isSelecting=true}/>

</div>


<style>
    .SelectedIngredient {
        user-select: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        
    }

    .SelectContainer {
        display: flex;
    }

    .SelectContainer > div {
        color: #fff;
        background-color: rgb(179, 86, 0);
        width: 200px;
        margin: 2px 10px;
        border-radius: 5px;
    }

    .SelectContainer > div:hover {
        transition: all 0.2s;
    }

    .Options {
        position: absolute;
        background-color: rgb(201, 130, 0);
        flex-direction: column;

        display: flex;
        max-height: 100px;
        overflow: auto;
        width: 180px;
        left: 20px;
        text-align: center;
    }

    /* .SearchIngredients input:focus + .Options {
        display: flex;
    } */
    .Options:hover {
        display: flex;
    }

    .Option {
        cursor: pointer;
        /* width: 100%; */
        user-select: none;
    }

    .Activated {
        background-color: rgb(179, 86, 0);
        color: #fff;
    }
</style>