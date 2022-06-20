
<script>
import MobileBar from "./UserBar/MobileBar.svelte";

    let barActive = false;

    function handleBar() {
        barActive = !barActive;
    }

    let tabs = [
        {icon:null, name:"Community"}, 
        {icon:null, name:"My Sheets"}, 
    ]
    let activatedTabIndex;
</script>

<section>
    <div class=ContentContainer class:ContentContainerActive={barActive}>
    
    </div>
    <div class=BarContainerDeskTop class:BarContainerDeskTopActive={barActive} on:click={handleBar}>
        <MobileBar tabs={tabs} bind:activatedTabIndex={activatedTabIndex}/>
    </div>
    <div class=BarContainerMobile>
        <MobileBar tabs={tabs} bind:activatedTabIndex={activatedTabIndex}/>
    </div>
</section>


<style>
    section {
        width: 100vw;
        height: 100vh;
        background-color: orange;

        display: flex;
        flex-direction: column;
    }

    .BarContainerMobile {
        background-color: red;
        height: 60px;

    }
    .BarContainerDeskTop {
        display: none;
    }

    .ContentContainer {
        background-color: blue;
        flex: 1;
    }

    @media (min-width: 600px) {
        section {
            flex-direction: row-reverse;
            
        }
        .BarContainerDeskTop {
            display: block;
            background-color: red;
            width: 50px;
            height: auto;

            transition: width 200ms;
            cursor: pointer;
        }

        .ContentContainer {
            margin-right: 50px;
            transition: margin 200ms;
        }

        .BarContainerMobile {
            display: none;
        }

        .BarContainerDeskTopActive {
            width: 300px
        }
        .ContentContainerActive {
            margin-top: 150px;
            margin-bottom: 150px;
        }
    }
</style>