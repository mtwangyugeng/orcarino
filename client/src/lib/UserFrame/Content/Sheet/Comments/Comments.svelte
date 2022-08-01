<script>
    import Comment from "./Comment/Comment.svelte";

    import {comments} from "$src/api/Sheet"
</script>

<section class=Comments>
    {#each $comments as comment (comment.id)}
        <Comment {...comment} />
    {/each}
</section>