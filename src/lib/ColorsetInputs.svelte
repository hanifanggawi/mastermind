<script lang="ts">
import { get } from "svelte/store";

import { calculateScore } from "../game";
import type { Guess } from "../game/constants";

  import { guesses, answerSet } from "../store";
  import ColorInput from "./ColorInput.svelte";

  function handleSubmit(e: Event) {
    const formData = new FormData(e.target as HTMLFormElement)
    const guessSet = []
    for (let field of formData) {
      guessSet.push(field[1])
    }
    const { blackPegs, whitePegs } = calculateScore(guessSet, get(answerSet))
    const newGuess: Guess = {
      colorset: guessSet,
      blackPegs,
      whitePegs
    }
    guesses.update(n => [...n, newGuess])
    console.log(newGuess)
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="form-box">
  <div class="colorset-inputs">
    {#each {length: 4} as _}
      <ColorInput />
    {/each}
  </div>
  <button class="button-check" type="submit">
    CHECK
  </button>
</form>

<style>
  .form-box {
    display: flex;
    align-items: center;
    column-gap: 2em;
    height: clamp(2em, 5em, 100%);
  }

  .colorset-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1em;
    background-color: hsla(237, 21%, 20%, 1);
  }

  .button-check {
    background: #b6ebf0;
    border-radius: 3px;
    height: 4.5em;
    border: none;
    padding: 0em 1em;
    font-weight: 600;
    font-size: 0.7em;
    color: #16161E;
    cursor: pointer;
  }

  .button-check:active {
    background: #9ddce2;
  }
</style>
