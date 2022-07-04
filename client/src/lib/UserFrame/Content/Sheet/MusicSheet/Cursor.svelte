<script>
    export let index = 0;
    export let activatedIndex = 0;
    export let setActiveCursor = () => {activatedIndex = index}

</script>

<section class=Cursor on:click={setActiveCursor}>
    <div class=Tinker class:Active={index == activatedIndex} />
</section>

<style>
    section {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:rgb(255, 199, 134);
    }
    .Tinker {
        width: 10px;
        height: 100%;
        background-color: black;
        opacity: 0;
        border-radius: 3px;
    }

    .Active {
        animation: tinkle;
        animation-duration: 600ms;
        animation-iteration-count: infinite;
    }

    @keyframes tinkle {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>