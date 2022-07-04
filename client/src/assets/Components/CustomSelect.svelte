<script>
    import { flip } from 'svelte/animate';

    export let options;

    export let isSelecting = false;
    export let selectedValue = null;
    let hoverValue = null;

    export let search = "";
    let filteredOptions = options;

    const renewFilteredOptions = () => {
        const searchRegex = new RegExp(`(^|\\s)${search}.*`, 'i');
        filteredOptions = options.filter(([key, value]) => searchRegex.test(key) && (!selectedValue || value !== selectedValue))
    }

    const handleOptionClick = (value) => {
        return () => {
            selectedValue = value;
            isSelecting = false;
        }
    }

    const handleOptionHover = (value) => {
        return () => {
            hoverValue = value;
            selectedValue = value;
        }
    }

    let prevValue = null;
    let prevSearch = null;
    const handleInputFocus = () => {
        isSelecting=true;
        prevValue = selectedValue;
        prevSearch = search;
        search = "";
    }

    const handleOptionOut = () => {
        if(isSelecting) {
            selectedValue = prevValue;
            hoverValue = null;
        };
    }

    const handleInput = () => {
        renewFilteredOptions()
    }

    const handleOutsideClick = (e) => {
        isSelecting=false
        search = prevSearch
    }

</script>

{#if isSelecting}
    <div class=SelectCover on:click|self={handleOutsideClick} />
{/if}

<div class="SelectContainer" >
    <div on:blur={handleOptionOut} on:mouseleave={handleOptionOut} class:OnTop={isSelecting}>
        <input type="text" bind:value={search} on:input={handleInput} placeholder={selectedValue} on:focus={handleInputFocus}/>

        {#if isSelecting}
        <div class="Options">
            {#each filteredOptions as [key, value] (key)}
            <span animate:flip="{{duration: 200}}">
                <div class={"Option " + ((hoverValue === value) ? "Activated" : "")} on:click={handleOptionClick(value)} 
                    on:focus={handleOptionHover(value)}
                    on:mousemove={handleOptionHover(value)}
                >
                    {key}
                </div>
            </span>    
            {/each}
        </div>
        {/if}
    </div>

</div>


<style>
    .SelectCover {
        background-color: red;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 3;
    }
    .SelectContainer {
        display: flex;
        position: relative;
        background-color: red;
        width: 40%;
        height: 50px;
    }

    .SelectContainer > div {
        color: #fff;
        width: 200px;
        border-radius: 5px;
       
    }
    .OnTop {
        z-index: 4;
    }

    .Options {
        position: absolute;
        background-color: rgb(201, 130, 0);
        flex-direction: column;

        display: flex;

        overflow: auto;
        width: 100%;
        text-align: center;

       animation: drop 0.5s;

        animation-timing-function: ease;
        animation-fill-mode: forwards;
        transition: max-height 0.5s;
        overflow: hidden;
    }

    @keyframes drop {
        from {max-height: 0;}
        to {max-height: 500px;}
    }

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
    input {
        width: 100%;
        height: 100%;
        text-align: center;
        border: none
    }
</style>