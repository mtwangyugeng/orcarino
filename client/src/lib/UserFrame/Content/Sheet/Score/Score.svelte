<script context="module">
    function numberOfVoteToString(numberOfVote) {
        return numberOfVote >= 1000 ? Math.round(numberOfVote / 1000) + 'k' :
                                numberOfVote
    }
</script>

<script>
    import StarsScore from "$src/assets/Components/StarsScore.svelte";
    import {score, numberOfVote} from "$src/api/Sheet"

    $: numberOfVoteDisplay = numberOfVoteToString($numberOfVote)
</script>

<section class=Score>
    <StarsScore score={(+$score)}/>
    <p>({numberOfVoteDisplay})</p>
</section>


<style>
    section {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    section :global(.StarScore) {
        width: 130px;
    }

    .Score {
        margin-left: 10px;
    }

    .Score :global(svg){
        height: 24px;
        width: 12px;
    }
    
    p {
        font-weight: bold;
    }
</style>