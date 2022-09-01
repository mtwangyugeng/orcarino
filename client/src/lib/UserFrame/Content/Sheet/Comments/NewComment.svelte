<script>
import { title } from "$src/api/Sheet";
import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
import StarsScoreEditable from "$src/assets/Components/StarsScore_editable.svelte";
import CommentorPicture from "./Commentor/CommentorPicture.svelte";


let score = 0;
</script>

<section>
    <h3>Write a review for {$title}</h3>
    <div class=StatusMessage> Please remember to be nice. </div>

    <div class=MidContainer>
        <CommentorPicture />
        <textarea class=CommentField/>
    </div>

    <div class=BottomContainer>
        <div class=StarScore>
            <StarsScoreEditable bind:displayedScore={score}/>
            <span class=Score>
                ({score})
            </span>
        </div>

        <span class=SendButton>
            <RippleButton>
                Send
            </RippleButton>
        </span>
    </div>
</section>

<style>
    section {
        background-color: rgba(250, 179, 48, 0.486);
        padding: 10px;
        margin: 5px;
        border-radius: 5px;

    }

    .StarScore {
        display: flex;
        align-items: center;
    }

    .SendButton :global(.RippleButton){
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        background-color: rgb(28, 59, 196);
        color: white;
        padding: 10px;
        border-radius: 5px;
    }

    .CommentField {
        resize: none;
        flex: 1;
        height: 100px;
    }

    @media (min-width: 600px) {
        .MidContainer {
            display: flex;
            margin: 5px 0 5px 0;
            gap: 5px;
        }
        .BottomContainer {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>