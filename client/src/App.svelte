<script>
import SandBox from './lib/SandBox.svelte'
</script>

<main>
  <SandBox />
</main>

<style>

  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :global(button), :global(input[type="submit"]), :global(input[type="reset"]) {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
</style>
