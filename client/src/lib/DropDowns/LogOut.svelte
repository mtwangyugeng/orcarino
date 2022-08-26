<script context="module">
    const LOGOUT_MESSAGE = "You are sure you want to log out?"
</script>

<script>
import { isLoggingOut } from "$src/api/_User";
import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
import DropdownWindow from "$src/assets/Components/DropdownWindow.svelte";
$: console.log($isLoggingOut)
</script>

{#if $isLoggingOut === true}
    <DropdownWindow on:close={()=>isLoggingOut.set(false)} title="Log Out" >
        <section>
            <div class=Message>
                {LOGOUT_MESSAGE}
            </div>

            <div class=ButtonsContainer>
                <RippleButton>
                    Yes
                </RippleButton>

                <RippleButton>
                    No
                </RippleButton>
            </div>
        </section>
    </DropdownWindow>
{/if}


<style>
    section {
        display: flex;
        flex-direction: column;
        height: 150px;
    }

    .Message {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        font-family: Arial, Helvetica, sans-serif;
    }
</style>