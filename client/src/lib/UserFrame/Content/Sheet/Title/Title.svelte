<script>
    import {currSheetId} from "$src/api/UserTabs"
    import {title} from "$src/api/Sheet"
</script>

<h2 class=Title>
    No.{$currSheetId + ": " + $title}
</h2>


<style>
    h2 {
        text-align: center;
    }
</style>