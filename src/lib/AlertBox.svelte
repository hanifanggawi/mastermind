<script lang="ts">
  import type { GameState } from "src/game/constants";
  import { get } from "svelte/store";
  import { guesses } from "../store";
  import { getAlertMessage } from "../game";

  export let state: GameState
  let numGuesses = get(guesses).length

  const alertMessage = getAlertMessage(state)
</script>

<div class="modal-box">
  <div class="alert-box">
    <h2 class="title">{alertMessage}</h2>
    <div class="sub-title">Guesses: {numGuesses}</div>
  </div>
</div>

<style>
  .modal-box {
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
  }
  .alert-box {
    padding: 1em;
    background: #1e1c2d;
    border-radius: 4px;
    box-shadow: 0px 0px 15px 5px rgba(29, 29, 29, 0.25);
  }
</style>