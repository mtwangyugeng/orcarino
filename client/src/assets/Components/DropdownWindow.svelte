<script>
    import { createEventDispatcher } from 'svelte';
    import CloseIcon from '../Icons/CloseIcon.svelte';
        const dispatch = createEventDispatcher();
        function handleClose() {
            dispatch('close');
        }
    export let title = 'Add Title'

</script>

<section>
    <div class=WindowContainer>
        <div class=Window>
            <div class=TopBar>
                <div class=Title>
                    {title}
                </div>
                <div class=Close on:click={handleClose}>
                    <CloseIcon />
                </div>
            </div>
            <div class=Content>
                <slot />
            </div>
    </div>

</section>

<style>
    section {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 999;

        animation: turndark 400ms;
        animation-fill-mode: forwards;
    }

    @keyframes turndark {
        from {background-color: rgba(0, 0, 0, 0);}
        to {background-color: rgba(0, 0, 0, 0.5);}
    }

    .WindowContainer {
        position: absolute;
        width: 100%;
        height: 100%;
        

        animation: falldown 400ms;
        animation-fill-mode: forwards;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes falldown {
        from {top: -100%}
        to {top: 0%}
    }

    .Window {
        background-color: white;
        width: 300px;
        height: 200px;

        display: flex;
        flex-direction: column
    }

    .TopBar {
        height: 30px;
        background-color: orange;
        display: flex;
        align-items: center;
    }
    .Title {
        margin-left: 5px;
        flex: 1
    }
    .Close :global(svg) {
        height: 20px;
        width: 20px;
        margin-right: 5px;
        cursor: pointer;
    }
</style>