<script>
    import ImageWithLoading from "$src/assets/Components/ImageWithLoading.svelte"
    import EditIcon from "$src/assets/Icons/EditIcon.svelte"
    import SaveIcon from "$src/assets/Icons/SaveIcon.svelte";

    import {name, account, picUrl, bio} from "$src/api/UserInfo"
import LogOut from "./LogOut.svelte";

    function handleImageUpload() {

    }


    let tempInfo = {};
    function handleSave() {
        if(!isEditing){
            tempInfo = {
                name: $name,
                bio: $bio
            }
            return;
        }
    }
    
    function handleCancel() {
        name.set(tempInfo.name);
        bio.set(tempInfo.bio);
    }

    let fileInput;

    let isEditing = false;


    function getTextContent(e) {
        const { textContent } = e.target;
        return textContent;
    }
</script>

<section>
    <div class=ImgContainer on:click={() => fileInput.click()}>
        <ImageWithLoading url={$picUrl} />
        <input bind:this={fileInput} type="file" accept="image/*" on:change={handleImageUpload} multiple hidden/>
    </div>

    <h2 contenteditable={isEditing} on:input={(e)=> name.set(getTextContent(e))} on:keydown={e => (e.key === 'Enter') && e.preventDefault()}>{$name}</h2>
    <h3>{$account}</h3>

    <p class=Bio contenteditable={isEditing} on:input={(e)=> bio.set(getTextContent(e))}>
        {$bio}
    </p>
    
    <div class=ButtonsContainer>
    <span class=EditProfile class:EditProfileEditing={isEditing} on:click={() => isEditing = !isEditing}>
        <button on:click={handleSave}>
            {#if !isEditing}
                <EditIcon /> Edit Profile
            {:else}
                <SaveIcon /> Save
            {/if}
        </button>    
    </span>
    {#if isEditing}
        <span class=Cancel on:click={() => isEditing = !isEditing}>
            <button on:click={handleCancel}>
                Cancel
            </button>    
        </span>
    {/if}
    </div>

    <span class=LogOutContainer>
        <LogOut />
    </span>
</section>

<style>
    section {
        font-family: Arial, Helvetica, sans-serif;
        /* background-color: red; */
        padding: 20px;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .ImgContainer {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        border-radius: 50%;

        margin-bottom: 10px;
        cursor: pointer;
        user-select: none;

        background-color: rgba(255,255,255, 0.5);
    }

    h3 {
        font-weight: 100;
        color: grey;
    }

    .ButtonsContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .EditProfile {
        display: flex;
        width: 100%;
        transition: all 200ms;
    }
    .EditProfile button {
        display: flex;
        justify-content: center;
        gap: 5px;
    }

    .EditProfile :global(svg){
        width: 20px;
        height: 20px;
        fill: white;
    }
    .Cancel {
        width: 30%;
    }
    .ButtonsContainer :global(button) {
        font-size: 15px;
        margin: 10px 0 10px 0;
        width: 100%;
        padding: 10px;
        background-color: rgb(207, 119, 4);
        color: white;
        border-radius: 5px;
        border: rgb(231, 112, 0) 1px solid;

        transition: all 200ms;
    }

    .EditProfileEditing{
        width: 60%;
    }

    .EditProfileEditing :global(button){
        background-color: rgb(0, 150, 0);
    }

    .EditProfile :global(button):hover {
        filter: brightness(1.2);
        border: rgb(224, 165, 38) 1px solid;
    }

    .Bio {
        font-size: 15px;
        width: 100%;
        overflow-wrap: break-word;

        padding: 5px;
        background-color: rgba(255, 255, 255, 0.26);
        border-radius: 10px;
    }

    *[contenteditable=true] {
        transition: background-color 400MS;
        background-color: rgba(255, 255, 255, 0.548);
        
    }

    .LogOutContainer {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    
</style>