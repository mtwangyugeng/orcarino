<script context=module>
    const loadSVG = `
        <svg x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 0 0" width="50px" height="50px">
        <circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"/>    
        </circle>
        <circle fill="#fff" stroke="none" cx="50" cy="50" r="6">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.2"/>       
        </circle>
        <circle fill="#fff" stroke="none" cx="70" cy="50" r="6">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.3"/>     
        </circle>
        </svg>
    `
</script>

<script>
    export let height = '250px';
    export let width = '250px';

    export let url = "data:image/jpeg;base64,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";
    export let alt = "some image";
    let loaded = false;
    function handleLoad(imageDOM) {
        if (imageDOM.complete) {
            loaded = true;
        }
    }
</script>

<section style={`width:${width}; height:${height}`}>
{#if !loaded}
    {@html loadSVG}
{/if}
<img src={url} 
    style={`
        display: ${loaded ? "block": "none"};
        width:${width}; height:${height}
    `} 
    alt={alt} 
    on:load={e => handleLoad(e.target)}
    />
</section>


<style>
    section {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section :global(svg) {
        width: 60%;
        height: 60%;
    }
</style>