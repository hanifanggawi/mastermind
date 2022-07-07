<script lang="ts">
import { get } from "svelte/store";

import { calculatePegs } from "../game";
import type { Guess, Peg } from "../game/constants";

  import { guesses, answerSet } from "../store";
  import ColorInput from "./ColorInput.svelte";

  function handleSubmit(e: Event) {
    const formData = new FormData(e.target as HTMLFormElement)
    const guessSet = []
    for (let field of formData) {
      guessSet.push(field[1])
    }
    const pegs: Peg[] = calculatePegs(guessSet, get(answerSet))
    const newGuess: Guess = {
      colorset: guessSet,
      pegs: pegs
    }
    console.log(newGuess)
    guesses.update(n => [...n, newGuess])
    console.log(newGuess)
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
