<script>
    export let value = '';
    $: isFilled = (value !== '');

    let isFocused = false;

    export let placeholder = "Placeholder";
    export let type = "text";

    function handleInput(e) {
        value = e.target.value;
    }
</script>

<span>
    <input on:input={handleInput} on:focus={()=>isFocused = true} on:blur={()=>isFocused = false} type={type}/>
    <div class=Placeholder class:Lifted={isFocused || isFilled}>{placeholder}</div>
</span>

<style>
    span {
        height: 40px;
        position: relative;
        display: flex;
        align-items: center;
    }


    .Placeholder {
        position: absolute;
        margin-left: 10px;
        transition: 200ms;
    }

    .Lifted {
        font-size: 70%;
        transform: translateY(-20px);
        background-color: white;
    }

    input {
        height: 100%;
        width: 100%;
    }

</style>




