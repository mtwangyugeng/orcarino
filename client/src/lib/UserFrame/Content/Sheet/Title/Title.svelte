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

    @media (min-width: 600px) {
        h2 {
            width: 230px;
            padding: 10px
        }
    }
</style>