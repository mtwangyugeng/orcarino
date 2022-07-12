<script>
    export let isEditable = false;
</script>

<button class:Save={isEditable} class=EditButton on:click={() => isEditable = !isEditable}>
    {isEditable ? 'Save' : 'Edit'}
</button>

<style>
   button {
    content: "Edit";
   }

   .Save {
    background-color: green;
   }
</style>
