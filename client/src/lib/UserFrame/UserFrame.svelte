
<script>
import CommunityIcon from "$src/assets/Icons/CommunityIcon.svelte";
import MySheetsIcon from "$src/assets/Icons/MySheetsIcon.svelte";

import Community from "./Content/Community.svelte";

import Content from "./Content/Content.svelte";
import MySheets from "./Content/MySheets.svelte";
import UserBar from "./UserBar/UserBar.svelte";
    let barActive = false;

    let tabs = [
        {icon:CommunityIcon, name:"Community", content: Community}, 
        {icon:MySheetsIcon, name:"My Sheets", content: MySheets}, 
    ]
    let activatedTabIndex = 0;
</script>

<section>
    <div class=ContentContainer class:ContentContainerActive={barActive}>
        <Content currTab={tabs[activatedTabIndex]["content"]}/>
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