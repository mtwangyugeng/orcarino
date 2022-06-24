<script>
import ImageWithLoading from "$src/assets/Components/ImageWithLoading.svelte"
import RippleButton from "$src/assets/Components/RippleButton.svelte"

    export let name = "Pink Guy"
    export let account =  "pinkmensch69"
    export let picUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWEhUVFRIREhESERESERERERERERERGBgZGhgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISGjQrJCc0NDQ0NDQxNTQ0NDQ0NDQ0NjQ0MTQ0ND00NDQ/NDQ0MTQ0NDE0NDQ0NDQ0NDQ0ND00NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABBEAACAQIDBQUFBQUHBQEAAAABAgADEQQhMQUSQVFhBiIycYETQnKRoVJiscHRI5KisuFTc4LC0vDxFBUWJFQH/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACkRAAMAAgEEAQMDBQAAAAAAAAABAgMRIQQSMUFRIjKBYXGRBRMjUsH/2gAMAwEAAhEDEQA/AOCJiMYxTc88iYwkiJGASvJXgiZJTBIQRxGEeCBjI3kXMSiATkpPC4V3dURGd2NlVdT+g6z0LYHY2nTs9cLVqahNaSeh8Z88ukHRh6e8z4XHz6OJ2fsbEV86VJ3X7ZsifvtYH0m8nYLElbmphweK7zm3ruz0dEyAFrDQDhC2yPlJSPRnoMaX1Ntnl+J7CYtVJX2NS3upUIY/vqB9ZzWJw7oxR0em41R1Kt8jw6z3kCBxeDSqm5URKiH3XUMPMX0PUR2meToJf2vR4KYrzu+0fYVlBqYXedNWoE3dfgJ8Q6HPznDNTIJBBBBIIIsQRqCOBkNaPPyYqxvTRCPePuyJEGQrx7yEcQBzImImICAPeK8aPAHEkJC8dTAJ3ijXigDRo4khBJCNJsIxEAiRGElEBAJLJRlkwIAMpLmzNmvWcIi3JzYnJUXizHgITAYJ6tQIguTqToq8WPSeh7J2clFAi8c3cizVG5npyHCQzs6TpKz1t8JeX/xBdg7Jp4anZBv1GH7SqwszHkB7q9JpOObMei5SKmTuJB78Y5iVMrSQWg3T5mWGQEHO2RlTe5CEFU2PkfwlkxUve0WaaW4mFlZahk1Y85ZMyqWHvMDtF2XpYoFhanXt3aqjxcg494ddR9Juho8t5Mrxza00eIbS2bUoVDTqoVceqsvBlPESk6z2vbeyKeKpFHFmFyjgd6m3McxzHGeSbS2c9Go1N1s6H0YcGU8QZRrR43UdO8T/AEMorEIdkg2SQc4IySxiI4gCMgTJXjEQBhJCMBJAQBRRRQBMYg0ixjQCZaK8HeK8AnJLIrCqsASiGQSKpNPY2F36q3HdXvn00+toL44d0pXs6nYGAFKmLjvvZqh49F9PxvNtHmalSHFSVPp8UTEKZ8I0FqQiuJmLUkzilXNmVR1Iv8oNdmsHjiY//dk93ff4VIB8jJptFzpRfzYqPzMo8sryyrqV7NlDkIVWmIuLq8KCfv8A9Idca41oN5o4P0JELPj/ANjNuX7NgNJhpm0Noox3blG+y43CfLnLqtNZtNbTKtBrzne2Gxvb0d9B+2pAsltXTVk/MdR1m/eLelmZZMauXL9niTLAsk6PtXs72WJcKLU6n7ROQDeJfRr+lpgukqeBcOKcv0U3WCMs1BAMsFCN44kZIGAStGjiOYAopGKAQMUUQEEjXitHKxCAFpiWUSApy0hgDos39iJu02fizbo8h/yZjU1m5R7tNB90t8yTDOzoZ3l38I0KdSGesFF2IAGpPCZyVbXJNgMzeTwlL2pDv4fcQ6AcCesxyZFC2e1WRSggxFR/ACifbbxHyHKWsNs8A3a7tzbOXKNNQJbp7nGcF5aryYOqrywdFFHCWlAkxhgdIzUwOcxYSJqBDoYKkAeMtIoEjRYG+GRxZlBB4EXgBhqlPNCalP8As3PeHwN+RmgjiFFpabqHtMlU14K2HrqwuCcsmBFmU8iOBkyZV2kNwe2UZpbfA9+n73qNR5dYYOCARmCAQeYnqYMyyTv2azytnO9ucLvUUqDWnU3T8Dj/AFBfnOBcT1HblLfw1ZdT7NmHmveH1E8zdJseN18duTfyii6QDrLtRJWqCDhKbRAyTrICATDRyZCK8AleKRigCk1kFkjLEjMY6yLSawAiCWqawKLLVMQA9ETYc+EckQfwiZtITRxIs5HKw+QtKUd/QL6m/wBCvjG7m6NXZU9Cc/pLn/cUpKN5gOQ4/KY+16jgIEF3Adl87Wv9ZkUcBUc3c58STczkzJU+WdeanvSOrftPRX37+QhafaegdHseoM5R9hlve+kG+xLDxm46C3ymXZHyZd1Ho2y9so+aVAc8xex+U2KlS6zyfZiOlZDvCw4i/qCJ6FhcTvLYZzG5SfBrFNrkuUqxvKW0u1FOkQo/aNx3SN1fM8+kliKDsrBTuswsDy6zmjscKbOwyJORzbr0lZ7fZanXo0G//QVBt7I/vS1hu3oYj9kfMGZ+H2JhiblLnmSZsYXYFG3dRb8POWdR8FV3fJqYbtFQqAKzbhYEFXyHK1zD7Jyp7p1pu1PzCnun90iY2J2Aja74ytkw/MTQ2Yvs6pp3JD0abqScyU7h+m7NunqVfHs3wt7aZqOlwV4MCD6i08vq07XB1GR8xPUjPP8Ab+H3K7jgW318mz/Ekek9FHJ/UY3Kr8GFUWVaiy5VlR5Y8kquIG0sPK7awBGNETGMAeKNFAEY94xjFoBImTWBvCoYBbpS2glSnLdKAXcGl3Qc2UHyvL1Y3qMebGVcCe+vnLI1J6yleT0+gX0t/qUK671Y/dpj+Jv6Qb11XX0AlvDU96pUbmwQeSj9SZQ2jgr31ta1pw290zbJ9zAttkBgABmbCwuNbeIkCVG2zv3IVrDU7unyJha+HR6aqRYpcKwtodVIPkIsPgSiMFAO9qx5cBb+sanRn9WyC1w1ip8iJ2vZ17hbzlMFgxqFF/pedj2eQKAPsnM9ZlkfBriW6OlxNHdpluJGU88x2KKlma5Nzl15T02ugamBzy9ec4vtBsg2D2vbxMBe3UiYQ1vk0pcnK4nalZAjsAEcErbeJsOgtf5zY7M7VxNSk9UKu5SsaipVPtEB0O49w18/3TGbZe/TCtu1EBuvBlPoRaaGzcCyIaaKUpsd51UWLn7zEkkTd1Hb45M1N93ng2NlbVFUagnKxAIuOoOYOeku45d2rh6n33pN5OuX1X6yGzcKqkd0DhpymhtajvUWA8S2dPiQ7w/C3rMorttM6J4pB2nJ9skG9TbiyOp/wkEfzGdSlTeVWGjKCPUTme2XhpedQfy/pPYXkp1q/wALOLryo5lusZUeXPAK7wLwzwLmANaNaOI5gEd2KPFAItBtCSJEAYQqCQAhEgFqlLaGUqZltDAL2FbvL5iXb5HzmfROY8xLxOvnKUel0L4a/YlgjYebMT6kyWKp3zEo0Ktri+hI+phxXnnV9x0PyyvuG/hHyEsJhC3iNhyjq5lhHkNkJC3FUZAACamxW72mpBmPVe5VRm7EAchNjZjWPesCDM68F8f3HYHwjzlWuR8+BhaD3UWzzlHFVwr7j6nvKekxN6XJSfZqXundJzsNP6QtPCsCLnKGQ36njD7ptfWWTK60WsOgAkqryirkZSTPlILJE8Cf2ajldf3SR+UwO2ZypD+8P8n6zb2Y16YPNnP8bTn+2T9+mOSOfmR+k9nH4X7FOu4wP8HI1hKriXKsqVJqfPlV4BpYcQDmARBj3kN6INAJxSG9HgA96SBkbRgYLBRCLBKYRTADpDo0rKYdGgF+iZe3teoBmZTeXcO18uh+UilwdXSWpvT9lcGzt8Z+ve/OHRbwLr326hG+lv8ALLNE5TzsnFM7q+5h0EhVePvXhaVEamZkbKe669/7OYg9nbYYsS4KgNYMTcMPymniK67pAEzsMm+xFgFAN8siY1tcjuafB02I21Up0FejSNUki43t1Qv2r2N5ZqO+I3H3SrBMweBJvaZ2xsY5plMu5oABbd8puYTFAe78v0mLWjZXsr02ZTZsrc5rUKgI6xGmjjLX6wQplZUtsO6DlAPr0EMrZQNQ2BPQwSR2Qf8A16fVAfnOV7SYrfrtbRAKY9NfqTOhrYr2OEVve9mioOblcvzPpOGrVOOt9TzM9vGuDl/qOVJLGv3YCq0quZOs8qu8ueSRdpWcwrmBaAQvFHIjGAPeKNaKAPGKxAyYkgZZNTIxXgBVMOhlRWlhWgFyk0t03sQRwmajyxTeCU9F/E231I0ZD9Dp/EYkMCWuvwm/ocj9bSSNODNOqPTmu6U/ku0lj1qwyUa/jArUgWphzck6EWBI/CYaJHqYpE8VmbleyjzPGVqe3LNluAaWAFiOR5yS4WmDmufXOW6dFOWXkDJ4NYSL+D2/TppcFEOd7WzPlxmhg+0dJ/GE+JDut520MzcLSQFu6MyTYAAWM2cPh6RHeUZ8LAzKkjoSWudF5MUi2dXDrcC+W8t+BE1Q28AecyRgqJRk9muY1sL9M4bDOVG7nYZC8zZlxvgtsbGVsW/cf4G/AyT1JRxuICqS2nH4Rm30B+ktM9zSRZeTH7TYq7rTB7tJFB+MgX+lvrOcrPC4rEF3Zz4nYsfMm8pVXntpaPFzZHkt18garSuzSVRoAtJMh2aDvETEBAFeNePGMAeKQvFAGWEEgBJCCRFoxaM0aASDQqvARlaAXVeHpPKSPCq0A06dT9COYhND0PhPMTPR5sIgekt78cxqLE5iY5o7kdnSN03P5IK0mplMOVbcfxaqfddeY/SWkN5w1LR01OhPSvAnZ7k3Woy9LzSpplDDdWV2QithNjOxBaq/lvmdJhtn7oGZ04mUsHigOU6HCOrjkZlTbNZSAISsdm4y1iKY6TNxeIVFLMQqgXJmaTbLoeviQqlmICgZk6TA7QYhtxL3X2qlgp8Qpgi1/M5/4RLmyqLYmpvuCMPTbuIffccT5TJ7a174srwRKaD5b3+aej02HT7mV6rcYW/b4MZngnaCapBs87jxRqhgHMIzQbCAQEIJG0kDAGjPJGQMAjFFaKATMYRRoBK0REe8UAGVjWhDBkwB1MMjyuBJA2gFxGnT4Yfs0H3F+drzntlYB6zEIO6g3qjnJEXmTzPAamdOVGgFgMgOQ4SlfB6PQw9uili8KHXdbK2asNUbmJle2dG3XFyNLe8Oa85vk8DrAYiirizC44cCDzB4TGoVHdePuKA2kpGRPUHIiJcVfjIYnZvEd+2h0qAemv8AvKZ5oEaP8xnOeo15OaopG7SxVuM08NtTd4+s5ahQYnxgen9Zs4PAJa7kuBmd47qDzEzcr2TM0bh207iyLkPFUc2poPzPQfSZ1Gm+KqBFLeyVr1Kh97qPyEtLgnrALY06AtfLdaoL6KOC9TOl2bhURQiKFUf7z5zTHh9tHbiwv7mWsHhlRFRRuqoAAE817XMf+tr3y7yW8txM56hvcBOW7ZdnWqj21IXrItnp8aiDTd+8PqPSd0cGHXYnePj09nnLvBl4zmQlzwgqmImC3o8AmIiIwjkwBt6IRiIpIHijXigEYo5EiYJJAx7yIjCASMhaTm9sTsrVrqHYihROYqVASzjmiZFh1JA6mQ3ovEVb1K2zBUaDUk2AGZJ5CdLgOx9Vl36zrhktcKyl6xHwXAX1N+k6nZux8Phs6aF6v9tVszj4Bonpn1MniqhOp1Mq6+D0cPQe8n8FCnSSnTFKmCtNcyTbfdzqzkan8BlK5GZllxcSvqOolDuUKVpeCDLeCKw148gkBaQq4VH8akH7aWDevAw5WQYSGk/JDSfko4DC02xApB3zPj9g9tL5529dJ22F2XTS1gXIsQz2Nj0AyHynK7IoEY29u57M9775A7nyuZ3FOUUSudE9PC5bXtkQkKiSQSGRZc6m9EqawhkB1+UJe8ujGvJyvaPsamIdqlJxRqt4wVvTc/aNs1PMi/lxnB7X7OYnDC9Smdz+0pn2lP1I8PqBPaAM/SS3crHMEWIOYI6yybOHN0kW9rhnz6YgZ6lt7sHRqktQYYeoc9y16Dn4Rmnpl0nne1tkVsM+5WplCb7rDvI45q2h/GWTPNy4Lx+Vx8lMNJiBEIDJMCUTCRvHvAI2ikooAwMYyO9NXCdn8XUF0wtYg6MUNNT5F7CCylvwjLhsNhnqOERGqVG0RAWY9eg6zqMB2Gqkg4h1opxRGWpVbpldV87nynb4HCUqFPcoU1pqfERm79Wc5tKOkvB14eiu+a4Ry+w+yCU7Pid2pU1WgLNTQ83Pvnpp5zo6tQmEcQbCUb2eviwTinSRWcyvW0+ssuIBxBoynxtzzEE9OFdeHqp/KJ+sFGVwLyL0yIVlllUDLeCNGdnEFMsMltZJcPfMH0kBFnZlFS7NurvBKfesN6+YP0nQ0VmFgkIY9aan6/0mvR3raiQbT4L65R97l84BEvqZYUfKSSxqYzlhRBrCiWRSmS/OSMisTGSZgnbONjMDTr0zTqotRG1VuB+0DqD1EEzXaXkGUlE5JXbpnk/absTVw93o71ehrkL1aY+8o8Q+8PUCchefRM5rtD2Ow+Ju4AoVzn7RFFnP300bzyPWW2eXm6P3H8Hjd44abu1eyGMoE3otVQaVKANRSPhHeHqJhOjKbOrI32XBVvkZJw1FTw1oleKNePBU9Z2D2bw+HO+qF6g8NSrusy9VFrL5jPrN56jHiZGmtgI7CYPk+ljHErUrRRrHOFC5QOJ1lmmLqINEAZYFhLbrK9QSQyk+sarTyjt4pbenlBCRjVUgb8DNKtTlSrQv5wUaA+zNoqLlTpJIxXI/0hL9IKjsgbSMlOx0h6QBhXo8RILpCw1Mbx/u1+rMZcpZdZVoDM3/ALOn+LSzTAgui1SeWlMqIbSzTIglhlhF/wCYENyhllkZ0Tg6hkyYFjcySqQFF700BKyLnLMmRkexGNeO0iTJZRDGpaNXwyVUK1ESoh1WoiuvyMCzZy5T0kLkXK0Yf/h+B/8Akp/Op/qjzdiljH+3HwjPXSRaKKZHavJQxess4bwxRQWHqSrViiggpDxes0W09IooCKVaVmiigqwLwVLwxRQVC0pcTSKKQWQh4j/dJ/M0nTiigsW6csLqI8UEhV1h1iilkZ0IwS6x4pIXgINYYRopKKUOZBoopLIRXHil1YopEk5B4oopYzP/2Q=="
    export let bio = "Aye b0ss.nyesssssssssssssssssssssssssssssssssssssssssssssssssssssss"

    function handleImageUpload() {

    }


    let tempInfo = {};
    function handleSave() {
        if(!isEditing){
            tempInfo = {
                name,
                bio
            }
            return;
        }

        console.log('save', name, bio);
    }
    function handleCancel() {
        name = tempInfo.name;
        bio = tempInfo.bio;
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
        <ImageWithLoading url={picUrl} />
        <input bind:this={fileInput} type="file" accept="image/*" on:change={handleImageUpload} multiple hidden/>
    </div>

    <h2 contenteditable={isEditing} on:input={(e)=> name = getTextContent(e)} on:keydown={e => (e.key === 'Enter') && e.preventDefault()}>{name}</h2>
    <h3>{account}</h3>

    <p class=Bio contenteditable={isEditing} on:input={(e)=> bio = getTextContent(e)}>
        {bio}
    </p>
    
    <div class=ButtonsContainer>
    <span class=EditProfile class:EditProfileEditing={isEditing} on:click={() => isEditing = !isEditing}>
        <button on:click={handleSave}>
            {#if !isEditing}
                Edit Profile
            {:else}
                Save
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
</style>