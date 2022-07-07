<script lang="ts">
  import { Colors } from "../game/constants";
  import ColorSet from "./ColorSet.svelte";
  import ColorsetInputs from "./ColorsetInputs.svelte";
  import { guesses, answerSet } from "../store"
  import { get } from 'svelte/store'

  const emptyColorset = [
    Colors.Blank,
    Colors.Blank,
    Colors.Blank,
    Colors.Blank,
  ];

</script>

<div class="game-box">
  <div class="guesses">
    {#each $guesses as guess}
      <ColorSet colors={guess.colorset} pegs={guess.pegs} />
    {/each}
    {#key $guesses.length}
      <ColorsetInputs />
    {/key}
    {#each {length: 7 - ($guesses.length +1)} as _}
      <ColorSet colors={emptyColorset} />
    {/each}
  </div>
  <div class="colorset-answer">
    <ColorSet colors={get(answerSet)} />
  </div>
</div>

<style>
  .game-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1em;
    padding: 2em 1em 1em 2em;
    background-color: hsla(237, 21%, 20%, 1);
  }

  .colorset-answer {
    padding: 1em;
  }

  .guesses {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    row-gap: 1em;
    grid-area: guesses;
    padding: 1em;
  }
</style>
