<script>
    export let index = 0;
    export let activatedIndex = 0;
    export let setActiveCursor = () => {activatedIndex = index}

</script>

<section class="Cursor" class:Active={index == activatedIndex} on:click={setActiveCursor}/>

<style>
    section {
        width: 50px;
    }

    .Active {
        background-color: orange;
    }
</style>