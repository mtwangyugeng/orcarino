<script context="module">
    const AUTH_OPTIONS = ["private", "public"]
</script>

<script>

    import { isAddingSheet } from "$src/api/MySheet";
    import DropdownWindow from "$src/assets/Components/DropdownWindow.svelte";
    import InputWithAnimatedPlaceHolder from "$src/assets/Components/InputWithAnimatedPlaceHolder.svelte";
import InputForm from "./_InputForm.svelte";

    let sheetTitle = "";
    let selectedAuthOption = AUTH_OPTIONS[0];

    function handleSubmit() {

    }
</script>
{#if $isAddingSheet}
    <DropdownWindow title="Add Sheet" on:close={() => isAddingSheet.set(false)}>
        <InputForm on:submit submitButtonText="Add New Sheet" >
            <InputWithAnimatedPlaceHolder bind:value={sheetTitle} placeholder="Sheet Title"/>
            <div class=Options >
                {#each AUTH_OPTIONS as authOption (authOption)}
                <label class=OptionLable>
                    <input type=radio bind:group={selectedAuthOption} name="scoops" value={authOption}>
                    {authOption}
                </label>
                {/each}
            </div>
        </InputForm>
    </DropdownWindow>
{/if}


<style>
    .OptionLable {
        cursor: pointer;
    }
</style>