<script>
    import Comment from "./Comment/Comment.svelte";

    import {comments} from "$src/api/Sheet"
import NewComment from "./NewComment.svelte";
</script>

<section class=Comments>
    <NewComment />
    {#each $comments as comment (comment.id)}
        <Comment {...comment} />
    {/each}
</section>