<script>
import { title } from "$src/api/Sheet";
import { picUrl } from "$src/api/UserInfo";
    import { currSheetId } from "$src/api/UserTabs";
import { isLoggingIn, user } from "$src/api/_User";
import RippleButton from "$src/assets/Components/Buttons/RippleButton.svelte";
import StarsScoreEditable from "$src/assets/Components/StarsScore_editable.svelte";
    import { serverPostComment } from "$src/server/sheet/Comments.server";
    import { comments } from "./Comment";
import CommentorPicture from "./Commentor/CommentorPicture.svelte";
let score = 0;
let comment = "";
async function handleSend() {
    // server(comment)
    console.log("handleSend", $user, $currSheetId, comment, score)
    if(comment === "") return;
    const res = await serverPostComment($user, $currSheetId, comment, score)
    if(res.success) comments.update(v=>[res.loadout, ...v])
    console.log($comments)
}
</script>

<section>
    <h3>Write a review for {$title}</h3>
    <div class=StatusMessage> Please remember to be nice. </div>

    <div class=MidContainer>
        <CommentorPicture picUrl={$picUrl}/>
        <textarea class=CommentField bind:value={comment} />
    </div>

    <div class=BottomContainer>
        <div class=StarScore>
            <StarsScoreEditable bind:displayedScore={score}/>
            <span class=Score>
                ({score})
            </span>
        </div>

        <span class=SendButton>
            <RippleButton on:click={handleSend}>
                Send
            </RippleButton>
        </span>
    </div>

    {#if $user === null}
        <div class=LoginMessage>
            <button on:click={()=>isLoggingIn.set(true)}> Login </button>&nbsp;to leave a review.
        </div>
    {/if}
</section>

<style>
    section {
        background-color: rgba(250, 179, 48, 0.486);
        padding: 10px;
        margin: 5px;
        border-radius: 5px;
        position: relative;
    }

    .LoginMessage {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;

        color: white;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .LoginMessage button {
        text-decoration: underline;
        font-weight: bold;
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