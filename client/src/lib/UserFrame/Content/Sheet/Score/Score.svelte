<script>
    import StarsScore from "$src/assets/Components/StarsScore.svelte";

    export let score = 9;
    export let numberOfVote = 10020;
    $: numberOfVoteDisplay = numberOfVote >= 1000 ? Math.round(numberOfVote / 1000) + 'k' :
                             numberOfVote
</script>

<section class=Score>
    <StarsScore score={score}/>
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
    
    p {
        font-weight: bold;
    }
</style>