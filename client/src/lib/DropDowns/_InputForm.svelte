<script context="module">
    const NORMAL_MSG_COLOUR = "rgb(79, 101, 223)";
    const ERROR_MSG_COLOUR = "red";
</script>

<script>
import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";

export let submitButtonText = "Submit";
export let submitFunc;
export let isThereError = false;

// binding
export let statusMessage = "";
export let isLoading= false;
export let isShaking = false;

async function handleSubmit(submitFunc) {
    isLoading = true;
    const err = await submitFunc();
    if(err !== null){
        statusMessage = err;
        isThereError = true;
        isShaking = true;
        console.log(isShaking)
    }
    isLoading = false;
}
</script>

{#if statusMessage !== ""}
    <div class=StatusMessage style={`color: ${isThereError?ERROR_MSG_COLOUR:NORMAL_MSG_COLOUR};`}>{statusMessage}</div>
{/if}

 <form on:submit|preventDefault = {()=>handleSubmit(submitFunc)}>
     <slot />
     <RippleButton>
         <input type=submit hidden/>
         {submitButtonText}
     </RippleButton>
 </form>

<style>
    form {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .StatusMessage {
        padding: 10px;
    }

    form :global(.RippleButton) {
        background-color: orange;
        padding: 15px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: white;
    }

    form :global(.RippleButton):hover {
        background-color: rgb(255, 171, 60);
    }
</style>