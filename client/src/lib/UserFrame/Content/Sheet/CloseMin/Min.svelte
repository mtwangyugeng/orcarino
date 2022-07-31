<script>
import { minimizeCurrSheet } from "$src/api/UserTabs";

import MinIcon from "$src/assets/Icons/MinIcon.svelte";


function handleClick() {
    minimizeCurrSheet();
}
</script>
    


<span on:click={handleClick}>
    <MinIcon />
</span>