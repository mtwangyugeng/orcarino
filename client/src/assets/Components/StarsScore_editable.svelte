<script>
    export let displayedScore = 0; // [0,5]
    let score = 0;

    let halfStars = Array(10);

    function handleMouseMove(i) {
        return () => {
            displayedScore = i + 1;
        }
    }
    function handleClick(i) {
        return () => {
            score = i + 1;
        }
    }
    function handleMouseLeave() {
        displayedScore = score;
    }
</script>

<section class=StarScore on:mouseleave={handleMouseLeave}>
    {#each halfStars as _, i (i)}
        <span class:reverse={i % 2 === 0} class:filled={i + 1 <= Math.round(displayedScore)} on:mousemove={handleMouseMove(i)} on:click={handleClick(i)}>
            <svg viewBox="0 0 95 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 68.5L0 0V138L58 180L36 111.5L94.5 68.5H22.5Z"/>
            </svg>
        </span>
    {/each}
</section>


<style>
    section {
        display: flex;
        width: 120px;
    }

    span {
        cursor: pointer;
    }

    section svg{
        fill: grey;
    }

    .reverse svg{
        transform: scaleX(-1);
    }

    .filled svg{
        fill: yellow;
    }

</style>