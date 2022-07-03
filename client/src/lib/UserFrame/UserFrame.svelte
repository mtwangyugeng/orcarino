
<script>
import CommunityIcon from "$src/assets/Icons/CommunityIcon.svelte";
import MySheetsIcon from "$src/assets/Icons/MySheetsIcon.svelte";

import Community from "./Content/Community.svelte";

import Content from "./Content/Content.svelte";
import MySheets from "./Content/MySheets.svelte";
import Search from "./Search/Search.svelte";
import UserBar from "./UserBar/UserBar.svelte";
    let barActive = true;

    let tabs = [
        {icon:MySheetsIcon, name:"My Sheets", content: MySheets}, 
        {icon:CommunityIcon, name:"Community", content: Community}, 
    ]

    let userTabs=[{title: "Ode to Joy", id:69}, {title: "Obito theme", id:22}];
    let currSheetId = null;

    let activatedTabIndex = 0;

    let search = "";
</script>

<section>
    <div class=RightSide>
        <div class=SearchContainer class:SearchContainerActive={barActive}>
            <Search bind:search={search} tabName={tabs[activatedTabIndex]["name"]} tabIcon={tabs[activatedTabIndex]["icon"]} />
        </div>
        <div class=ContentContainer>
            <Content currTab={tabs[activatedTabIndex]["content"]} currSheetId = {currSheetId}/>
        </div>
    </div>  
    <div class=BarContainer class:BarContainerActive={barActive}>
        <UserBar tabs={tabs} bind:activatedTabIndex={activatedTabIndex} bind:barActive={barActive} bind:currSheetId={currSheetId} userTabs={userTabs}/>
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
        overflow: auto;
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

        .SearchContainer {
            height: 0px;
            transition: all 200ms;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
        }
        .RightSide {
            flex: 1;
            margin-right: 50px;
            transition: margin 200ms;
            
            overflow: hidden;

            margin-left: 20px;
            margin-top: 20px;
            margin-bottom: 20px;

            display: flex;
            flex-direction: column;
        }

        .ContentContainer {
            flex: 1;
            border-radius: 10px;
            background-color: rgb(122, 86, 19);
        }   
        .BarContainerActive {
            width: 300px
        }
        .SearchContainerActive {
            height: 100px;
            opacity: 1;
        }


        
    }
</style>