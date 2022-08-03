<script lang="ts">
  import { Colors, GameState } from "../game/constants";
  import ColorSet from "./ColorSet.svelte";
  import ColorsetInputs from "./ColorsetInputs.svelte";
  import { guesses, answerSet, gameState } from "../store"
  import { get } from "svelte/store";

  const emptyColorset: Colors[] = Array(4).fill(Colors.Blank)
</script>

<div class="game-box">
  <div class="guesses">
    {#each $guesses as guess}
      <ColorSet colors={guess.colorset} pegs={guess.pegs} />
    {/each}
    {#key $guesses.length}
      {#if $gameState === GameState.Playing}
        <ColorsetInputs />
      {:else if $gameState === GameState.Win}
        <ColorSet colors={emptyColorset} />
      {/if}
    {/key}
    {#each {length: 7 - ($guesses.length +1)} as _}
      <ColorSet colors={emptyColorset} />
    {/each}
  </div>
  <div class="colorset-answer">
    {#if $gameState === GameState.Playing}
      <ColorSet colors={emptyColorset} />
    {:else}
       <ColorSet colors={get(answerSet)} />
    {/if}
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
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .guesses {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1em;
    grid-area: guesses;
    padding: 1em;
  }
</style>
