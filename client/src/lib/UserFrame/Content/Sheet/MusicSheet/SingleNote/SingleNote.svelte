<script context="module">
    export const noteToForm = new Map();
    noteToForm.set("A#", "111110111111");
    noteToForm.set("A", "111111111111");
    noteToForm.set("B", "111101111111");

    noteToForm.set("C", "111100111111");
    noteToForm.set("C#", "110101111111");

    noteToForm.set("D", "110100111111");
    noteToForm.set("D#", "100100111111");

    noteToForm.set("E", "110000111111");
    noteToForm.set("F", "100000111111");
    noteToForm.set("F#", "100100011111");

    noteToForm.set("G", "100000011111");
    noteToForm.set("G#", "100100001111");

    noteToForm.set("A1", "100000001111");
    noteToForm.set("A1#", "100100001110");

    noteToForm.set("B1", "100000001110");
    noteToForm.set("C1", "000000001110");
    noteToForm.set("C1#", "000100001100");

    noteToForm.set("D1", "000000001100");
    noteToForm.set("D1#", "100000001000");

    noteToForm.set("E1", "000000001000");
    noteToForm.set("F1", "000000000000");

    export const formToNote = new Map();
    for (const [key, value] of noteToForm.entries()) {
        formToNote.set(value, key)
    }
</script>

<script>
    import Orcarina from "$src/assets/Components/Orcarina.svelte";
    import SelectNote from "./SelectNote.svelte";
    let holesCover = Array(12).fill(0);
    export let selectedCover = holesCover.join('');
    function handleHole(i) {
        return () => {
            holesCover[i] ^= 1
            selectedCover = holesCover.join('');
        }
    }

    $:  holesCover = Array.from(selectedCover).map(v => (+v));
    let isSelecting;
</script>


<span class=Main>
<section>
    <SelectNote bind:selectedCover={selectedCover} bind:isSelecting={isSelecting}/>
    <div class=Bottom>
        <div class=BotLeft class:BotLeftSelect={isSelecting}></div>
        <Orcarina holesCover={holesCover} handleHole={handleHole}/>
    </div>
</section>
</span>


<style>
    .Main :global(*) {
        box-sizing: border-box;
    }

    section {
        background-color: aliceblue;
        width: fit-content;
        position: relative;
        width: 300px;
    }

    .Bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px
    }
    .BotLeft {
        width: 0%;
        height: 100px;
        /* background-color: yellow; */
        transition: 200ms;
    }
    .BotLeftSelect {
        width: 40%;
    }
</style>