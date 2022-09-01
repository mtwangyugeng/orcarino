<script>
    export let activatedTabIndex;

    export let icon;
    export let name;
    export let i;
    $: isActive = i === activatedTabIndex;
</script>

<button class:active = {isActive} on:click>
    <svelte:component this={icon} />
    {name}
</button>

<style>
    button {
        background-color: rgb(252, 90, 26);
        height: 50px;
        width: 100%;
        /* border-radius: 50%; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 15px;

        overflow: hidden;
        word-wrap: break-word;

        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        color: rgb(77, 50, 0);
    }
    button :global(svg) {
        width: 30px;
        height: 30px;
    }

    button:not(.active):hover :global(svg) {
        animation-name: shake;
        animation-duration: 100ms;
        animation-iteration-count: 2;
        animation-timing-function: linear; 
    }

    @keyframes shake {
        from {
            transform:rotate(-10deg);
        }
        to {
            transform:rotate(10deg);
        }
    }

    .active {
        color: white;
        background-color: rgb(253, 163, 104);
        transition: all 0.2s;
    }

    .active :global(svg) {
        transition: all 0.2s;
        width: 40px;
        height: 40px;
    }


</style>