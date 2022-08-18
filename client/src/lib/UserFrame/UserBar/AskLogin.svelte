<script>
import { isLoggingIn } from "$src/api/_User";

import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
</script>
<section>
    <div>
        You haven't logged in yet.
    </div>
    <span>
        <RippleButton on:click={()=>isLoggingIn.set(true)}>
            Login
        </RippleButton>
    </span>
</section>

<style>
    section {
        margin-top: 50px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;


        padding: 20px;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        
    }
    span > :global(.RippleButton) {
        background-color: green;
        padding: 10px;
        border-radius: 10px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        color: white;
    }
</style>