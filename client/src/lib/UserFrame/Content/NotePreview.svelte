<script>
import ImageWithLoading from "$src/assets/Components/ImageWithLoading.svelte";
import StarsScore from "$src/assets/Components/StarsScore.svelte";

    export let isPrivate = true;

    export let votes = 2500;
    $: voteDisplay = votes >= 1000 ? (votes / 1000).toFixed(1) + 'k'  : votes + ''

    export let title = "Salamanderman Theme"
    export let author = "Salanmander man"

    export let views = 20000
    $: viewsDisplay = views >= 1000 ? (views / 1000).toFixed(1) + 'k'  : views + ''

    let isHoveringTitle = false;

    export let goToSheet = () => {}
    export let goToAuthor = () => {}
</script>

<section>
    {#if isPrivate}
        <div class='Tag Private'>
            Private
        </div>
    {/if}
    
    <div class=Preview class:HoverPreview={isHoveringTitle} on:click={goToSheet}>
        <ImageWithLoading width=100% height=100% />
    </div>
    <div class=Score>
        <StarsScore score={2} />
        <span>{voteDisplay} votes</span>
    </div>
    <h3 class=Title on:click={goToSheet} on:mousemove={()=>isHoveringTitle = true} on:mouseleave={()=>isHoveringTitle = false}>{title}</h3>
    <h4 class=Author on:click={goToAuthor}>{author}</h4>

    <p class=Views>{viewsDisplay} views</p>
</section>

<style>
    .Tag {
        position: absolute;
        background-color: red;
        color: white;
        padding: 5px;
        border-radius: 5px;
        right: 4px;
        top: 4px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        z-index: 3;
    }

    section {
        background-color: rgba(201, 201, 201, 0.493);
        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 300px;
        width: 220px;
        padding: 10px;
        border-radius: 10px;
        user-select: none;
        position: relative;
    }

    .Preview:hover{
        cursor: pointer;
        opacity: 0.7;
    }

    .HoverPreview {
        opacity: 0.7;
    }

    .Preview {
        transition: 200ms;
        background-color: red;
        border-radius: 10px;
        overflow: hidden;

        max-width: 200px;
        max-height: 200px;

        margin-bottom: 10px;
        margin-top: 10px;
    }
    .Score {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: grey;
    }
    .Title {
        transition: 200ms;
        text-align: left;
        width: 100%;
    }

    .Title:hover{
        cursor: pointer;
        opacity: 0.7;
    }
    
    .Author {
        text-align: left;
        width: 100%;
        color: grey;
        font-weight: 200;
        font-family: 'Courier New', Courier, monospace;
        cursor: pointer;
    }

    .Views {
        margin-top: 20px;
        text-align: right;
        width: 100%;
        font-size: 14px;

        color: grey;
        font-family:Arial, Helvetica, sans-serif;
    }

</style>