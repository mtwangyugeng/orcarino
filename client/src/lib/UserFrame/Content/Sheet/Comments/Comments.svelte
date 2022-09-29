<script context="module">

</script>

<script>
    import Comment from "./Comment.svelte";

    // import {comments} from "$src/api/Sheet"
    import NewComment from "./NewComment.svelte";
    import { currSheetId } from "$src/api/UserTabs";
    import { serverGetComments } from "$src/server/sheet/Comments.server";
    import LoadingOverlay from "$src/assets/Components/LoadingOverlay.svelte";
    let comments = []
    async function getComment() {
        const res = await serverGetComments($currSheetId);
        if(!res.success) return
        comments = res.loadout
        console.log(comments)
    }
</script>

<section class=Comments>
    
    <NewComment />

    {#await getComment()}
     <LoadingOverlay />
    {:then}
        {#each comments as comment (comment.id)}
            <Comment {...comment} />
        {/each}
    {/await}
    
</section>

<style>
    section {
        position: relative;
    }
</style>