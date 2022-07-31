<script>
import { closeCurrSheet } from "$src/api/UserTabs";

import CloseIcon from "$src/assets/Icons/CloseIcon.svelte";


function handleClick() {
    closeCurrSheet()
}
</script>

<span on:click={handleClick}>
    <CloseIcon />
</span>