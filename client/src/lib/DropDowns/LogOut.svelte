<script context="module">
    const LOGOUT_MESSAGE = "You are sure you want to log out?"
</script>

<script>
import { isLoggingOut, user } from "$src/api/_User";
import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
import DropdownWindow from "$src/assets/Components/DropdownWindow.svelte";
$: console.log($isLoggingOut)


function handleYes() {
    user.set(null);
    isLoggingOut.set(false);
}

function handleNo() {
    isLoggingOut.set(false)
}
</script>

{#if $isLoggingOut === true}
    <DropdownWindow on:close={()=>isLoggingOut.set(false)} title="Log Out" >
        <section>
            <div class=Message>
                {LOGOUT_MESSAGE}
            </div>

            <div class=ButtonsContainer>
                <span class=Yes>
                    <RippleButton on:click={handleYes}>
                        Yes
                    </RippleButton>
                </span>
                <span class=No>
                    <RippleButton on:click={handleNo}>
                        No
                    </RippleButton>
                </span>
            </div>
        </section>
    </DropdownWindow>
{/if}


<style>
    section {
        display: flex;
        flex-direction: column;
        height: 150px;
        padding: 10px
    }

    .Message {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        font-family: Arial, Helvetica, sans-serif;
    }

    .ButtonsContainer {
        display: flex;
        justify-content: space-around;
    }
    .ButtonsContainer :global(.RippleButton) {
       height: 40px;
       width: 60px;
       border-radius: 10px;
       transition: 200ms;
    }

    .ButtonsContainer :global(.RippleButton):hover {
       opacity: 0.7;
    }

    .Yes :global(.RippleButton) {
        background-color: green;
    }

    .No :global(.RippleButton) {
        background-color: red;
    }
</style>