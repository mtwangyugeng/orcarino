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

    <div class=HeaderContainer>
        <Title/>

        <div class=ScoreContainer>
            <Score />
        </div>

        <Description />
    </div>

    <div class=RightSideContainer>
        <Comments />
    </div>

    <div class=CloseMinContainer>
        <CloseMin />
    </div>
</section>

<style>
    .CloseMinContainer {
        position: absolute;
        right: 5px;
        top: 5px;
    }
    section {
        width: 100%;
        height: 100%;
        background-color: rgb(252, 224, 204);
        display: grid;
        position: relative;
        grid-template-areas: 
        'head'
        'tool'
        'music'
        'comment'
        ;
    }

    .HeaderContainer {
        grid-area: head;

    }
    .ScoreContainer {
        display: flex;
        justify-content: center;
    }
    .ToolBarContainer {
        grid-area: tool;
    }
    .MusicSheetContainer {
        grid-area: music;
    }
    .RightSideContainer {
        grid-area: comment;
    }

    .ToolBarContainer {
        grid-area: tool;
    }

    @media (min-width: 600px) {
        section {
            grid-template-areas: 
            'tool music music music head'
            'tool music music music comment'
            'tool music music music comment'
            'tool music music music comment'
            ;
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

        .ToolBarContainer {
            grid-area: tool;
        }

        
    }
</style>