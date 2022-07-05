<script>
import RippleButton from "$src/assets/Components/RippleButton.svelte";

    export let isEditable=false;
</script>

<section class=AddSingleNote class:Editing={isEditable} title="Insert note.">
    <RippleButton on:click>
        +
    </RippleButton>
</section>

<style>
    .AddSingleNote{
        display: flex;
        width: 0;
        transition: all 200ms;
        height:0;
        
    }
    .AddSingleNote :global(.RippleButton){
        background-color: yellow;
        width: 100%;
        height: 100%;
        border-radius: 0 50% 50% 0; 
    }

    .Editing {
        width: 50px;
        height: 50px;
    }

</style>