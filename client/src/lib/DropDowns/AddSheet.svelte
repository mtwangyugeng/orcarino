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
    let isLoading = false;

    function handleClose() {
        isAddingSheet.set(false);
        statusMessage = NORMAL_MSG;
    }

    async function handleSubmit() {
        isLoading = true;
        let status = await addSheet(sheetTitle)

        if (status === null) {
            handleClose()
        }
        isLoading = false;
        return status;
    }
</script>
{#if $isAddingSheet}
    <DropdownWindow title="Add Sheet" on:close={handleClose} bind:isShaking={isShaking} isLoading={isLoading}>
        <InputForm 
            submitFunc={handleSubmit} 
            submitButtonText="Add New Sheet" 
            bind:isShaking={isShaking}
            bind:statusMessage={statusMessage}
            >
                <InputWithAnimatedPlaceHolder bind:value={sheetTitle} placeholder="Sheet Title"/>
        </InputForm>
    </DropdownWindow>
{/if}

