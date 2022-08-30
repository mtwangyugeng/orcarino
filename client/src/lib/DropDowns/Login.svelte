<script context="module">
    const LOGIN_MESSAGE = "Please enter your username and password, then press the Login button";
    const CREAT_ACCOUNT_MESSAGE = "Please enter your intended username and password, then confirm your password, then press the Create Account button"
</script>

<script>
    import {isLoggingIn, logIn, createAccount} from "$src/api/_User";
    import DropdownWindow from "$src/assets/Components/DropdownWindow.svelte";
    import InputWithAnimatedPlaceHolder from "$src/assets/Components/InputWithAnimatedPlaceHolder.svelte";
    import InputForm from "./_InputForm.svelte";

    let isThereError = false;
    let isShaking = false;
    let isLoading = false;

    let username = "";
    let password = "";
    let confirmPassword = "";

    let statusMessage;

    let isShowingPassword = false;
    $: passwordType = isShowingPassword? "text" : "password";
    let isCreatingAccount = false;
    $: windowTitle = isCreatingAccount ? "Create Account" : "Login";
    
    $: {
        statusMessage = isCreatingAccount ? CREAT_ACCOUNT_MESSAGE : LOGIN_MESSAGE;
        isThereError = false;
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
            isShaking = true;
            statusMessage = err;
        }

        isLoading = false;
    }

    function handleClose() {
        statusMessage = LOGIN_MESSAGE;
        isLoggingIn.set(false);
        isThereError = false;
    }
</script>

{#if $isLoggingIn === true}
    <DropdownWindow on:close={handleClose} title={windowTitle} bind:isShaking={isShaking} bind:isLoading={isLoading}>
            <InputForm 
                isThereError = {isThereError} 
                statusMessage = {statusMessage}
                submitButtonText = {windowTitle}
                on:submit={handleSubmit}
                >
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
            </InputForm>
           
    </DropdownWindow>   
{/if}



<style>
    .ShowPassword {
        user-select: none;
        cursor: pointer;
        color: black;
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