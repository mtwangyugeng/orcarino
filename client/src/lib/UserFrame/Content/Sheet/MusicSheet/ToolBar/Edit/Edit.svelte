<script>
    export let isEditable = false;
</script>

<section>
    <button class:Save={isEditable} class=EditButton on:click={() => isEditable = !isEditable}>
        {isEditable ? 'Save' : 'Edit'}
    </button>
</section>

<style>
   button {
    content: "Edit";
   }

   .Save {
    background-color: green;
   }
</style>
