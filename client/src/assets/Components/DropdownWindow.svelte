<script>
    import { createEventDispatcher } from 'svelte';
    import CloseIcon from '../Icons/CloseIcon.svelte';
import LoadingOverlay from './LoadingOverlay.svelte';
        const dispatch = createEventDispatcher();
        function handleClose() {
            dispatch('close');
        }
    export let title = 'Add Title'

    export let isShaking = false;
    $: if(isShaking) setTimeout(() => isShaking = false, 500)

    export let isLoading = false;
</script>

<section>
    <div class=WindowContainer >
        <div class=Window class:Shake={isShaking}>
            
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
                {#if isLoading}
                    <LoadingOverlay />
                {/if}
            </div>
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
        width: 400px;

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

    .Content {
        position: relative;
        flex: 1;
    }


    .Shake {
        animation: shake 0.5s;
        /* When the animation is finished, start again */
        animation-iteration-count: 1; 
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
</style>