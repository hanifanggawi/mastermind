<script lang="ts">
  import type { GameState } from "src/game/constants";
  import { get } from "svelte/store";
  import { guesses } from "../store";
  import { getAlertMessage, restartGame } from "../game";

  export let state: GameState
  let numGuesses = get(guesses).length

  const alertMessage = getAlertMessage(state)
  let open = true
  function toggleAlertBox() {
    open = !open
  } 
</script>

{#if open}
  <div class="modal-box">
    <div class="alert-box">
      <h2 class="title">{alertMessage}</h2>
      <div class="sub-title">Guesses: {numGuesses}</div>
      <div class="buttons">
        <button on:click={restartGame}>
          Play Again
        </button>
        <button class="button-dark" on:click={toggleAlertBox}>
          View Board
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-box {
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .alert-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1b1b1b;
    padding: 2em;
    min-width: 10vh;
    background: #fe9d28;
    border-radius: 4px;
    box-shadow: 0px 0px 15px 5px rgba(29, 29, 29, 0.25);
  }

  h2 {
    margin: 0;
  }

  .buttons {
    display: flex;
    column-gap: 1em;
  }

  button {
    padding: 0.7em 1.5em;
    border-radius: 5px;
    border: none;
    background: #ffffff;
    font-weight: 600;
    margin-top: 1em;
    cursor: pointer;
  }

  button:hover {
    background: #f4f4f4;
  }

  .button-dark {
    background: #1b1b1b;
    color: #f4f4f4;
  }

  .button-dark:hover {
    background: #3a3a3a;
  }
</style>