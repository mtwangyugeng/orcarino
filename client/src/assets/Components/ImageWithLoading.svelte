<script context=module>
    const loadSVG = `
        <svg x="0px" y="0px"
        viewBox="0 0 100 100" enableBackground="new 0 0 0 0" width="50px" height="50px">
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"/>    
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
            <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite" 
            begin="0.2"/>       
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
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
    export let url;
    export let alt = "some image";
    let loaded = false;
    function handleLoad(imageDOM) {
        if (imageDOM.complete) {
            loaded = true;
        }
    }
</script>

{#if !loaded}
    {@html loadSVG}
{/if}
<img src={url} 
    style={`
        display: {loaded ? "block": "none"}
    `} 
    alt={alt} 
    onLoad={e => handleLoad(e.target)}
    />