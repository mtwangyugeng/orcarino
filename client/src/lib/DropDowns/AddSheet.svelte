<script context="module">
    const NORMAL_MSG = "Please enter a title for the sheet."
</script>

<script>

    import { addSheet, isAddingSheet } from "$src/api/MySheet";
    import DropdownWindow from "$src/assets/Components/DropdownWindow.svelte";
    import InputWithAnimatedPlaceHolder from "$src/assets/Components/InputWithAnimatedPlaceHolder.svelte";
import InputForm from "./_InputForm.svelte";

    let sheetTitle = "";
    let isShaking = false;
    let statusMessage = NORMAL_MSG;
    $: if($isAddingSheet) statusMessage = NORMAL_MSG;

    let isLoading = false;
</script>
{#if $isAddingSheet}
    <DropdownWindow title="Add Sheet" on:close={() => isAddingSheet.set(false)} bind:isShaking={isShaking} isLoading={isLoading}>
        <InputForm 
            submitFunc={()=>addSheet(sheetTitle)} 
            submitButtonText="Add New Sheet" 
            bind:isShaking={isShaking}
            bind:statusMessage={statusMessage}
            >
                <InputWithAnimatedPlaceHolder bind:value={sheetTitle} placeholder="Sheet Title"/>
        </InputForm>
    </DropdownWindow>
{/if}

