<script>
    import {isLoggingIn} from "$src/api/_User";
    import DropdownWindow from "$src/assets/Components/DropdownWindow.svelte";
</script>

{#if $isLoggingIn === true}
    <DropdownWindow on:close={() => isLoggingIn.set(false)} title="Log In">
        
    </DropdownWindow>   
{/if}

