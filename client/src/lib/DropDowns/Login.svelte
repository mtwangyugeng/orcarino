<script>
    import {isLoggingIn, logIn, createAccount} from "$src/api/_User";
import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
    import DropdownWindow from "$src/assets/Components/DropdownWindow.svelte";
    import InputWithAnimatedPlaceHolder from "$src/assets/Components/InputWithAnimatedPlaceHolder.svelte";
    let isThereError = false;
    let isLoading = false;

    let username = "";
    let password = "";
    let confirmPassword = "";

    let statusMessage;
    let messageColor;

    let isShowingPassword = false;
    $: passwordType = isShowingPassword? "text" : "password";
    let isCreatingAccount = false;
    $: windowTitle = isCreatingAccount ? "Create Account" : "Login";
    
    $: {statusMessage = isCreatingAccount ? "Please enter your intended username and password, then confirm your password, then press the Create Account button" : "Please enter your username and password, then press the Login button";
        messageColor = "rgb(79, 101, 223)";
    }
    
    async function handleSubmit() {
        isLoading = true;
        let err = null;
        if(isCreatingAccount) {
            err = await createAccount(username, password)
        } else {
            err = await logIn(username, password)
        }

        if (err !== null) {
            isThereError = true;
            messageColor = "red";
            statusMessage = err;
        }

        isLoading = false;
    }
</script>

{#if $isLoggingIn === true}
    <DropdownWindow on:close={() => isLoggingIn.set(false)} title={windowTitle} bind:isShaking={isThereError} bind:isLoading={isLoading}>
            <div class=StatusMessage style={`color: ${messageColor};`}>{statusMessage}</div>

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