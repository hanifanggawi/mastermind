<script lang="ts">
  import type { Peg } from "../game/constants";

  export let pegs: Peg[]
</script>

<div class="peg-box">
  {#each pegs as peg}
    <div class={`peg ${peg}`}>
    </div>
  {/each}
</div>

<style>
  .peg-box {
    /* display: flex;
    flex-direction: column;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: min-content min-content;
    row-gap: 0.5em;
    height: 100%;
    /* aspect-ratio: 1/1; */
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    background: #B6EBF0;
    /* width: 4em; */
  }

  .peg {
    border-radius: 999px;
    padding: 0.5em;
    margin-right: 0.5em;
    max-width: 0.5em;
    display: flex;
  }

  .peg.black {
    background: #000000
  }

  .peg.white {
    background: #FFFFFF;
  }

  .peg.empty {
    background: #777777;
  }
</style>