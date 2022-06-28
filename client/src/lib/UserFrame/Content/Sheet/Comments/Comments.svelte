<script>
import Comment from "./Comment/Comment.svelte";

    export let comments = [
        {id:1, content: "Cool sheet dude! I wish it is a bit longer.", postTime: "6/28/2022", score: 8, authorId:1},
        {id:2, content: "Terrible sheet! The notes are off by 10000 miles.", postTime: "6/29/2022",score: null, authorId:1}
    ]
</script>

<section class=Comments>
    {#each comments as comment (comment.id)}
        <Comment {...comment} />
    {/each}
</section>