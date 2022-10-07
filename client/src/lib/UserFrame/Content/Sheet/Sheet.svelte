<script>
import CloseMin from "./CloseMin/CloseMin.svelte";
import Comments from "./Comments/Comments.svelte";
import Description from "./Description/Description.svelte";
import MusicSheet from "./MusicSheet/MusicSheet.svelte";
import Score from "./Score/Score.svelte";
import Title from "./Title/Title.svelte";
import ToolBar from "./ToolBar/ToolBar.svelte";

export let currSheetId;

let isEditable = false;
</script>

<section>
    <div class=ToolBarContainer>
        <ToolBar bind:isEditable={isEditable} />
    </div>

    <div class=MusicSheetContainer>
        <MusicSheet isEditable={isEditable}/>
    </div>
    <div class=RightSideContainer>
        
        <Title/>

        <div class=ScoreContainer>
            <Score />
        </div>

        <Description />
        
        <Comments />
    </div>

    <div class=CloseMinContainer>
        <CloseMin />
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        background-color: rgb(252, 224, 204);
        display: flex;
        position: relative;
    }
    .MusicSheetContainer {
        flex: 1;
        background-color: pink;
        overflow-y: auto;
    }
    .RightSideContainer {
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .CloseMinContainer {
        position: absolute;
        right: 5px;
        top: 5px;
    }
</style>