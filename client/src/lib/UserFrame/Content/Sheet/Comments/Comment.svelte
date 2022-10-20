<script>
import StarsScore from "$src/assets/Components/StarsScore.svelte";
import CommentorName from "./Commentor/CommentorName.svelte";
import CommentorPicture from "./Commentor/CommentorPicture.svelte";
export let score = 8;
export let comment = "Cool sheet bro.";
export let postTime = "6/20/2022"

export let username;
export let picUrl
</script>


<section class=Comment>
    <div>
        <CommentorPicture picUrl={picUrl}/>
    </div>
    <div>
        <CommentorName name={username} />
        <StarsScore score={score}/>
        <p>posted {postTime}</p>
        {comment}
    </div>
</section>

<style>
    section {
        display: flex;
        padding: 10px;
        gap: 10px;
    }
    section :global(svg) {
        height: 24px;
        width: 12px;
    }
</style>