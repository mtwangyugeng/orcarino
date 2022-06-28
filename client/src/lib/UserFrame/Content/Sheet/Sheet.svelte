<script>
import StarsScore from "$src/assets/Components/StarsScore.svelte";
import Commentor from "./Commentor.svelte";
import MusicSheet from "./MusicSheet/MusicSheet.svelte";

    export let currSheetId = 69;
    export let title = "Ode to Joy"

    export let sheet = null;
    export let comments = [
        {content: "Cool sheet dude! I wish it is a bit longer.", postTime: "6/28/2022", score: 8, authorId:1},
        {content: "Terrible sheet! The notes are off by 10000 miles.", postTime: "6/29/2022",score: null, authorId:1}
    ]
</script>

<section>
    <div class=MusicSheetContainer>
        <MusicSheet />
    </div>
    <div class=RightSideContainer>
        
        <h2>
            {title}
        </h2>

        <div class=ScoreContainer>
            <StarsScore />
            <p>(1000)</p>
        </div>

        <p class=Description>
            Well just a easy version of ode to joy.
        </p>
        
        <div class=CommentContainer>
            {#each comments as {content, score, authorId, postTime}}
                <div class=Comment>
                    <div>
                        <Commentor />
                    </div>
                    <div>
                        <StarsScore score={score}/>
                        <p>posted {postTime}</p>
                        {content}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
    }
    .MusicSheetContainer {
        flex: 1;
        background-color: pink;
        overflow-y: auto;
    }
    .RightSideContainer {
        width: 300px;
        height: 100%;
    }

    .Comment {
        display: flex;
    }
</style>