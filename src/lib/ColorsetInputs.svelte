<script lang="ts">
import { get } from "svelte/store";

import { calculateScore, generatePegs } from "../game";
import { Colors, GameState, Guess, Peg } from "../game/constants";

  import { guesses, answerSet, gameState } from "../store";
  import ColorInput from "./ColorInput.svelte";

  function handleSubmit(e: Event) {
    const formData = new FormData(e.target as HTMLFormElement)
    const guessSet = []
    const answer = get(answerSet)
    for (let field of formData) {
      guessSet.push(field[1] || Colors.Blank)
    }
    const score = calculateScore(guessSet, answer)
    const pegs: Peg[] = generatePegs(score)
    const newGuess: Guess = {
      colorset: guessSet,
      pegs: pegs
    }
    guesses.update(n => [...n, newGuess])
    if (score.orange === answer.length) {
      gameState.set(GameState.Win)
    } else if (get(guesses).length >= 7) {
      gameState.set(GameState.Lost)
    }    
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="form-box">
  <div class="colorset-inputs">
    {#each {length: 4} as _}
      <ColorInput />
    {/each}
    <button class="button-check" type="submit">
      CHECK
    </button>
  </div>
</form>

<style>
  .form-box {
    display: flex;
    align-items: center;
    column-gap: 2em;
  }

  .colorset-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    height: fit-content;
    max-height: max-content;
  }

  .button-check {
    background: #fe9d28;
    border-radius: 3px;
    height: 5em;
    aspect-ratio: 1/1;
    border: none;
    font-weight: 800;
    font-size: 0.6em;
    color: #16161E;
    cursor: pointer;
  }

  .button-check:active {
    background: #faac4e;
  }
</style>
