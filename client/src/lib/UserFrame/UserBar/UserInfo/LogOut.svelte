<script>
    import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
    import {isLoggingOut} from "$src/api/_User"

</script>

<section>
    <RippleButton on:click={() => isLoggingOut.set(true)}>
        Log Out
    </RippleButton>
</section>

<style>
    section :global(.RippleButton){
        padding: 10px;
        background-color: rgb(253, 135, 0);
        border-radius: 5px;
        font-weight: bold;
        color: #fff;
    }
</style>