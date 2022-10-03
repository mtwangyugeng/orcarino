<script>
import AnimatedSwitchScreen from "$src/assets/Components/AnimatedSwitchScreen.svelte";
import PageNav from "./PageNav.svelte";
import Preview from "./Preview.svelte";
import {currPage} from '$src/api/Community';

let insertRight;
let insertLeft;
</script>


<section>
    <div class=PreviewContainer>
        <AnimatedSwitchScreen currentContent={{component:Preview, props:{curPage: $currPage}}} bind:insertRight={insertRight} bind:insertLeft={insertLeft}/>
    </div>

    <div class=PageNavContainer>
        <PageNav insertRight={insertRight} insertLeft={insertLeft}/>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        background-color: rgb(240, 205, 90);

        display: flex;
        flex-direction: column;
    }

    .PreviewContainer {
        flex: 1;
        overflow: auto;
    }

    .PageNavContainer {
        height: 50px;
        background-color: rgb(245, 135, 61);
    }
</style>