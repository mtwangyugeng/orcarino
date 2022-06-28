<script>
    export let score = 5; // [0,5]

    let halfStars = Array(10);
</script>

<section class=StarScore>
    {#each halfStars as _, i (i)}
        <span class:reverse={i % 2 === 0} class:filled={i + 1 <= Math.round(score)}>
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