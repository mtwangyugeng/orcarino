<script>
    let testTF = false
function handleClick() {
    testTF = !testTF;
}
</script>

<svg width="409" height="411" viewBox="0 0 409 411" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="409" height="411" fill="white"/>
    <circle cx="69.5" cy="255.5" r="12.5" fill={testTF ? "red": "#D9D9D9"} on:click={handleClick}/>
    <circle cx="257" cy="146" r="10" fill="#D9D9D9"/>
    <circle cx="324" cy="95" r="10" fill="#D9D9D9"/>
    <circle cx="293.5" cy="117.5" r="12.5" fill="#D9D9D9"/>
    <circle cx="132.5" cy="247.5" r="7.5" fill="#D9D9D9"/>
    <circle cx="235.5" cy="131.5" r="7.5" fill="#D9D9D9"/>
    <circle cx="241.5" cy="186.5" r="12.5" fill="#D9D9D9"/>
    <circle cx="137.5" cy="190.5" r="12.5" fill="#D9D9D9"/>
    <circle cx="172" cy="148" r="15" fill="#D9D9D9"/>
    <circle cx="257" cy="314" r="15" fill="#D9D9D9"/>
    <circle cx="147" cy="314" r="15" fill="#D9D9D9"/>
    <circle cx="109" cy="228" r="15" fill="#D9D9D9"/>
    <g filter="url(#filter0_d_0_1)">
    <path d="M363.5 33.5C338.667 51.1667 271.8 89.9 203 103.5C199.4 104.24 198.5 103.809 198.5 103.5C140.5 118.732 39.8898 187.703 43.6161 286C43.1894 303 65.5 298 80.5 301C92.5 303.4 109.5 292 116.5 286C127.378 279.112 138.538 275.184 148.5 274.032M363.5 33.5C367.5 35.1667 380.448 43.3927 374 49.5C335.401 112.452 237.509 227.054 235 236C228.509 259.14 215.833 325.833 211 356.5H163C163 356.5 173.141 326.437 179 311.5C189.552 284.597 172.499 271.258 148.5 274.032M363.5 33.5C306.019 84.6191 259.5 110 229 116C198.5 122 192 192.833 191 209.5C181.4 239.1 158.667 264.855 148.5 274.032" stroke="black" shape-rendering="crispEdges"/>
    </g>
    <defs>
    <filter id="filter0_d_0_1" x="39.0155" y="32.9318" width="341.254" height="332.068" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
    </filter>
    </defs>
    </svg>
    
<style>
    .active {
        fill: red;
    }
</style>