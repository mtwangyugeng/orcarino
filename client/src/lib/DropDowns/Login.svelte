<script>
    import {isLoggingIn, user} from "$src/api/_User";
import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
    import DropdownWindow from "$src/assets/Components/DropdownWindow.svelte";
    import InputWithAnimatedPlaceHolder from "$src/assets/Components/InputWithAnimatedPlaceHolder.svelte";
    let isThereError = false;
    let isLoading = false;

    let username = "";
    let password = "";
    let confirmPassword = "";



    let isShowingPassword = false;
    $: passwordType = isShowingPassword? "text" : "password";
    let isCreatingAccount = false;
    $: windowTitle = isCreatingAccount ? "Create Account" : "Login";

    function handleSubmit() {
        console.log("log in")
        user.set(4);
        isLoggingIn.set(false);
    }
</script>

{#if $isLoggingIn === true}
    <DropdownWindow on:close={() => isLoggingIn.set(false)} title={windowTitle} bind:isShaking={isThereError} bind:isLoading={isLoading}>


            <form on:submit|preventDefault={handleSubmit}>
                <InputWithAnimatedPlaceHolder bind:value={username} placeholder="User Name"/>
                <InputWithAnimatedPlaceHolder bind:value={password} placeholder="Password" type={passwordType}/>

                {#if isCreatingAccount}
                    <InputWithAnimatedPlaceHolder bind:value={confirmPassword} placeholder="Confirm Password" type={passwordType}/>
                {/if}

                <div class=Options>
                    <label class="ShowPassword">
                        <input type="checkbox" bind:checked={isShowingPassword} />
                        Show Password
                    </label>

                    <div class=SwitchMode on:click={() => isCreatingAccount = !isCreatingAccount}>
                        {isCreatingAccount ? "Login" : "Create Account"}
                    </div>
                </div>
                
                <RippleButton>
                    <input type=submit hidden/>
                    {windowTitle}
                </RippleButton>
            </form>
    </DropdownWindow>   
{/if}



<style>
    .ShowPassword {
        user-select: none;
        cursor: pointer;
        color: black;
    }

    form {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
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

    .Options {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .SwitchMode {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
        user-select: none;
        color: rgb(49, 114, 136);
        transition: all 0.2s;
        padding: 5px;
        border-radius: 5px;
    }
    .SwitchMode:hover {
        color: rgb(65, 49, 136);
        background-color: rgba(105, 91, 148, 0.267)
    }
</style>