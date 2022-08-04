<script>
    import {addSheet} from '$src/api/MySheet'
</script>

<section on:click={() => addSheet()}>
    <div>+</div>
</section>


<style>
    section {
        max-height: 300px;
        width: 220px;
        background-color: #f5f5f5;
        border-radius: 10px;
        cursor: pointer;
        opacity: 0.7;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all 0.2s;
    }
    section:hover {
        opacity: 1;
    }

    div {
        border: 3px dashed rgb(134, 134, 134);
        width: 80%;
        height: 80%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 72px;
        font-weight: bold;
        color: rgb(134, 134, 134);

        transition: all 0.2s;
    }

    section:hover div{
        font-size: 100px;
    }
</style>