<script context="module">
    import CommunityIcon from "$src/assets/Icons/CommunityIcon.svelte";
    import MySheetsIcon from "$src/assets/Icons/MySheetsIcon.svelte";
    import Community from "./Content/Community/Community.svelte";
    import MySheets from "./Content/MySheets.svelte";

    export const TABS = [
        {icon:CommunityIcon, name:"Community", content: Community, isLoginContent: false}, 
        {icon:MySheetsIcon, name:"My Sheets", content: MySheets, isLoginContent: true}, 
    ]
</script>

<script>
import AddSheet from "../DropDowns/AddSheet.svelte";
import Login from "../DropDowns/Login.svelte";
import LogOut from "../DropDowns/LogOut.svelte";

import Content from "./Content/Content.svelte";
import Search from "./Search/Search.svelte";
import UserBar from "./UserBar/UserBar.svelte";
    let barActive = true;
    let activatedTabIndex = 0;
</script>

<section>
    <div class=BarContainer class:BarContainerActive={barActive}>
        <UserBar bind:barActive={barActive} bind:activatedTabIndex={activatedTabIndex}/>
    </div>
    <div class=RightSide class:RightSideHide={barActive}>
        <div class=SearchContainer class:SearchContainerActive={barActive}>
            <Search tabName={TABS[activatedTabIndex]["name"]} tabIcon={TABS[activatedTabIndex]["icon"]} />
        </div>
        <div class=ContentContainer>
            <Content currTab={TABS[activatedTabIndex]["content"]}/>
        </div>
    </div>  

    
    <Login />
    <LogOut />
    <AddSheet />
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
        height: 30px;
        transition: 200ms;
    }

    .BarContainerActive {
        /* position: absolute; */
        height: 100vh;
    }

    .RightSide {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .ContentContainer {
        background-color: red;
        flex: 1;
    }
    
    .RightSideHide {
        display: none;
    }
    @media (min-width: 600px) {
        section {
            flex-direction: row;
            
        }
        .BarContainer {
            display: block;
            width: 50px;
            height: auto;

            
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
            overflow: hidden;
            border-radius: 10px;
            background-color: rgb(122, 86, 19);
        }   
        .BarContainerActive {
            width: 300px;
            height: auto;
        }
        .SearchContainerActive {
            height: 100px;
            opacity: 1;
        }


        
    }
</style>