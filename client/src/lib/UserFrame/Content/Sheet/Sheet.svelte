<script>
import Comments from "./Comments/Comments.svelte";
import Description from "./Description/Description.svelte";
import MusicSheet from "./MusicSheet/MusicSheet.svelte";
import Score from "./Score/Score.svelte";
import Title from "./Title/Title.svelte";
</script>

<section>
    <div class=MusicSheetContainer>
        <MusicSheet />
    </div>
    <div class=RightSideContainer>
        
        <Title />

        <div class=ScoreContainer>
            <Score />
        </div>

        <Description />
        
        <Comments />
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
</style>