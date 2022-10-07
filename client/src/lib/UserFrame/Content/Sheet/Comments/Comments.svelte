<script context="module">

</script>

<script>
    import Comment from "./Comment.svelte";

    // import {comments} from "$src/api/Sheet"
    import NewComment from "./NewComment.svelte";
    import { currSheetId } from "$src/api/UserTabs";
    import { serverGetComments } from "$src/server/sheet/Comments.server";
    import LoadingOverlay from "$src/assets/Components/LoadingOverlay.svelte";
    import {comments} from "./Comment"
    async function getComment() {
        const res = await serverGetComments($currSheetId);
        if(!res.success) return
        comments.set(res.loadout)
        console.log($comments)
    }

    comments.subscribe(v=>console.log("reeeeeeeee", v))
</script>

<section class=Comments>
    
    <NewComment />

    <div class=PastComments>
        {#await getComment()}
        <LoadingOverlay />
        {:then}
            {#each $comments as comment (comment.id)}
                <Comment {...comment} />
            {/each}
        {/await}
    </div>
</section>

<style>
    section {
        position: relative;
        background-color: rgb(255, 255, 255);
        flex: 1;

        display: flex;
        flex-direction: column;
    }

    .PastComments {
        position: relative;
        flex: 1;
        overflow: auto;
    }
    
</style>