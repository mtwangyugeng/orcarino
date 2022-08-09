<script>
import PageNav from "./PageNav.svelte";
import Preview from "./Preview.svelte";

</script>


<section>
    <div class=PreviewContainer>
        <Preview />
    </div>

    <div class=PageNavContainer>
        <PageNav />
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