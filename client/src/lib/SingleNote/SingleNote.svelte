<script context="module">
    const noteToForm = new Map();
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

    const formToNote = new Map();
    for (const [key, value] of noteToForm.entries()) {
        formToNote.set(value, key)
    }
</script>

<script>
    import Orcarina from "./Orcarina.svelte";
    let holesCover = Array(12).fill(0);
    function handleHole(i) {
        return () => {
            holesCover[i] ^= 1
        }
    }

    let selectedCover;

    let currNote;
    $: {
        selectedCover = holesCover.join('');
        currNote = formToNote.get(selectedCover);
    }

    function handleSelect() {
        holesCover = Array.from(selectedCover).map(v => (+v));
    }
</script>


<span class=Main>
    <div>
        {currNote}
    </div>
    <Orcarina holesCover={holesCover} handleHole={handleHole}/>
    <select bind:value={selectedCover} on:change={handleSelect}>
        {#each Array.from(noteToForm.entries()) as [key, value] (key)}
            <option value={value}>{key}</option>
        {/each}
    </select>
</span>


<style>
    .Main :global(*) {
        box-sizing: border-box;
    }
</style>