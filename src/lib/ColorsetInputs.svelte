<script lang="ts">
import { get } from "svelte/store";

import { calculateScore, generatePegs } from "../game";
import { GameState, Guess, Peg } from "../game/constants";

  import { guesses, answerSet, gameState } from "../store";
  import ColorInput from "./ColorInput.svelte";

  function handleSubmit(e: Event) {
    const formData = new FormData(e.target as HTMLFormElement)
    const guessSet = []
    const answer = get(answerSet)
    for (let field of formData) {
      guessSet.push(field[1])
    }
    const score = calculateScore(guessSet, answer)
    const pegs: Peg[] = generatePegs(score)
    const newGuess: Guess = {
      colorset: guessSet,
      pegs: pegs
    }
    guesses.update(n => [...n, newGuess])
    if (score.black === answer.length) {
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
    /* height: clamp(2em, 5em, 100%); */
    /* height: max-content */
  }

  .colorset-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    background-color: hsla(237, 21%, 20%, 1);
    height: fit-content;
    max-height: max-content;
  }

  .button-check {
    background: #b6ebf0;
    border-radius: 3px;
    height: 100%;
    aspect-ratio: 1/1;
    border: none;
    /* padding: 0em 1em; */
    font-weight: 600;
    font-size: 0.6em;
    color: #16161E;
    cursor: pointer;
  }

  .button-check:active {
    background: #9ddce2;
  }
</style>
