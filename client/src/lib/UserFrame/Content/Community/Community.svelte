<script>
import PageNav from "./PageNav.svelte";

</script>


<section>
    <div class=PreviewContainer>

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
    }

    .PageNavContainer {
        height: 50px;
        background-color: rgb(245, 135, 61);
    }
</style>