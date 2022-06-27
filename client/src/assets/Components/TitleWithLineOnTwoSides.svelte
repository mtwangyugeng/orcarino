<h2>
    <slot/>
</h2>

<style>
    h2 {
        overflow: hidden;
        text-align: center;
    }

    h2:before,
    h2:after {
        background-color: #000;
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 50%;
    }

    h2:before {
        right: 0.5em;
        margin-left: -50%;
    }

    h2:after {
        left: 0.5em;
        margin-right: -50%;
        }
</style>