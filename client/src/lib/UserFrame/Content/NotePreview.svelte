
<script>
import { setCurrSheetId, addUserTab } from "$src/api/UserTabs";

import ImageWithLoading from "$src/assets/Components/ImageWithLoading.svelte";
import StarsScore from "$src/assets/Components/StarsScore.svelte";
    import MySheetsIcon from "$src/assets/Icons/MySheetsIcon.svelte";

    export let isPrivate = 'true';

    export let votes = 2500;
    $: voteDisplay = votes >= 1000 ? (votes / 1000).toFixed(1) + 'k'  : votes + ''

    export let score = 2;

    export let title = "Salamanderman Theme"
    export let author = "Salanmander man"
    export let picUrl = null;

    export let views = 20000
    $: viewsDisplay = views >= 1000 ? (views / 1000).toFixed(1) + 'k'  : views + ''

    let isHoveringTitle = false;

    export let id;
    const goToSheet = () => {
        setCurrSheetId(id);
        addUserTab(id, title)
    }
    let goToAuthor = () => {}
</script>

<section class=Card>
    {#if isPrivate === 'true'}
        <div class='Tag Private'>
            Private
        </div>
    {/if}
    
    <div class=Preview class:HoverPreview={isHoveringTitle} on:click={goToSheet}>
        {#if picUrl}
            <ImageWithLoading width=100% height=100% url={picUrl}/>
        {:else}
            <MySheetsIcon />
        {/if}
    </div>
    <div class=Score>
        <StarsScore score={score} />
        <span>{voteDisplay} votes</span>
    </div>
    <h3 class=Title on:click={goToSheet} on:mousemove={()=>isHoveringTitle = true} on:mouseleave={()=>isHoveringTitle = false}>{title}</h3>
    <h4 class=Author on:click={goToAuthor}>{author}</h4>

    <p class=Views>{viewsDisplay} views</p>
</section>

<style>
    section {
        background-color: rgba(201, 201, 201, 0.493);
        display: grid;
        grid-template-areas: 
        'photo photo title title title'
        'photo photo author author author'
        'photo photo views views views'
        'score score score score score'
        ;
        column-gap: 15px;
        align-items: center;
        padding: 10px;
        user-select: none;
        position: relative;
    }

    .Title {
        grid-area: title;
        transition: 200ms;
        text-align: left;
        width: 100%;
    }

    .Title:hover{
        cursor: pointer;
        opacity: 0.7;
    }

    .Author {
        grid-area: author;

        text-align: left;
        width: 100%;
        color: grey;
        font-weight: 200;
        font-family: 'Courier New', Courier, monospace;
        cursor: pointer;
    }


    .Preview {
        grid-area: photo;

        transition: 200ms;
        background-color: rgb(24, 185, 172);
        border-radius: 10px;
        overflow: hidden;

        max-width: 80px;
        max-height: 80px;

        min-width: 50px;
        min-height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Preview:hover{
        cursor: pointer;
        opacity: 0.7;
    }

    .Score {
        grid-area: score;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: grey;
    }

    .Score :global(svg) {
        width: 12px;
        height: 24px;
    }

    .Views {
        grid-area: views;

        /* margin-top: 20px; */
        /* text-align: right; */
        width: 100%;
        font-size: 14px;

        color: grey;
        font-family:Arial, Helvetica, sans-serif;
    }

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

    @media (min-width: 600px){
        section {
            display: flex;
            flex-direction: column;
        }

        .HoverPreview {
            opacity: 0.7;
        }

        .Preview {


            max-width: 200px;
            max-height: 200px;

            min-width: 100px;
            min-height: 100px;

            margin-bottom: 10px;
            margin-top: 10px;
        }

        .Views {
            margin-top: 20px;
            text-align: right;
            width: 100%;
            font-size: 14px;
        }
    }
</style>