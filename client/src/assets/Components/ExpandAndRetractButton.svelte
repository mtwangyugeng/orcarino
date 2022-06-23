<script>
    export let isExpanded = false;
</script>


<span on:click={() => isExpanded = !isExpanded}>
    <svg width="260" height="213" viewBox="0 0 260 213" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class:ExpandOne={isExpanded} width="260" height="37" rx="10" fill="#D9D9D9"/>
        <rect class:ExpandTwo={isExpanded} y="88" width="260" height="37" rx="10" fill="#D9D9D9"/>
        <rect class:ExpandThree={isExpanded}  y="176" width="260" height="37" rx="10" fill="#D9D9D9"/>
    </svg>
</span>
    

<style>
    span {
        cursor: pointer;
    }
    rect {
        transition: 200ms;
    }
    .ExpandOne {
        transform: rotate(45deg) translate(15%, -15%);
    }
    .ExpandTwo {
        opacity: 0;
    }
    .ExpandThree {
        transform: rotate(-45deg) translate(-47%, -15%);
    }


</style>