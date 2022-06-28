<script>
import StarsScore from "$src/assets/Components/StarsScore.svelte";
import Commentor from "./Commentor.svelte";
export let score = 8;
export let content = "Cool sheet bro.";
export let postTime = "6/20/2022"
</script>


<section class=Comment>
    <div>
        <Commentor />
    </div>
    <div>
        <StarsScore score={score}/>
        <p>posted {postTime}</p>
        {content}
    </div>
</section>

<style>
    section {
        display: flex;
        padding: 10px;
        gap: 10px;
    }
</style>