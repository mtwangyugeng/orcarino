<script>
    import { flip } from 'svelte/animate';

    export let options;

    let isSelecting = false;
    export let selectedValue = null;
    let hoverOption = null;

    export let search = "";
    $: searchRegex = new RegExp(`(^|\\s)${search}.*`, 'i');
    $: filteredOptions = options.filter(([key, value]) => searchRegex.test(key) && (!selectedValue || value !== selectedValue))

    const handleOptionClick = (key, value) => {
        return () => {
            selectedValue = value;
            isSelecting = false;
        }
    }

    const handleOptionHover = (key) => {
        return () => {
            hoverOption = key;
        }
    }

    const handleInputFocus = () => {
        isSelecting=true;
        search = "";
    }
</script>

<div class="SelectContainer">
    <div >
        <input type="text" bind:value={search} placeholder={selectedValue} on:focus={handleInputFocus}/>

        
        {#if isSelecting}
            <div class="Options" >
            {#each filteredOptions as [key, value], i (key)}
            <span animate:flip="{{duration: 200}}">
                <div class={"Option " + ((hoverOption === key) ? "Activated" : "")} on:click={handleOptionClick(key, value)} 
                    on:focus={handleOptionHover(key)}
                    on:mouseover={handleOptionHover(key)}
                    on:blur={()=>hoverOption=null}
                    on:mouseout={()=>hoverOption=null}>
                    {key}
                </div>
            </span>    
            {/each}
            </div>
        {/if}
    </div>

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