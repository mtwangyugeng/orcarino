
<script>
import UserBar from "./UserBar/UserBar.svelte";

    let barActive = false;

    let tabs = [
        {icon:null, name:"Community"}, 
        {icon:null, name:"My Sheets"}, 
    ]
    let activatedTabIndex;
</script>

<section>
    <div class=ContentContainer class:ContentContainerActive={barActive}>
    
    </div>
    <div class=BarContainer class:BarContainerActive={barActive}>
        <UserBar tabs={tabs} bind:activatedTabIndex={activatedTabIndex} bind:barActive={barActive}/>
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

    .BarContainer {
        /* background-color: red; */
        height: 60px;

    }

    .ContentContainer {
        background-color: blue;
        flex: 1;
    }

    @media (min-width: 600px) {
        section {
            flex-direction: row-reverse;
            
        }
        .BarContainer {
            display: block;
            width: 50px;
            height: auto;

            transition: width 200ms;
        }

        .ContentContainer {
            margin-right: 50px;
            transition: margin 200ms;
        }

        .BarContainerActive {
            width: 300px
        }
        .ContentContainerActive {
            margin-top: 150px;
            margin-bottom: 150px;
        }
    }
</style>