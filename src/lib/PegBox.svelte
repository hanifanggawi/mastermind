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
    display: grid;
    grid-template-columns: min-content min-content;
    height: 100%;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    background: #1d1d34;
    place-items: center;
    gap: 0.2em;
    padding: 0.5em;
  }

  .peg {
    border-radius: 999px;
    width: .95em;
    height: .95em;
    display: flex;
  }

  .peg.orange {
    background: radial-gradient(circle at 50% 40%, #fe9d28, rgb(235, 129, 15) 66%, #271b4d 100%);
  }

  .peg.white {
    background: radial-gradient(circle at 50% 40%, #ffffff, #d8d8dc 66%, #271b4d 100%);
  }

  .peg.empty {
    background: radial-gradient(circle at 45% 100%, #11111a, #11111a 66%, rgb(0, 0, 0) 100%);
  }
</style>