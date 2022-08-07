<script lang="ts">
import { get } from "svelte/store";

import { getAlertMessage, restartGame } from "../game";
import { GameState } from "../game/constants";
import { gameState, guesses } from "../store";
</script>

<div class="sidebar">
  <div class="instructions">
    <h1>Master<span class="orange">Mind</span> </h1>
    <h4>How To Play</h4>
    <ul>
      <li>
        Guess the hidden color combination
      </li>
      <li> 
        Select colors by clicking on the empty tile and then press <b>Check</b>  to place your guess
      </li>
      <li> 
        After each guess, your guess will be evaluated using a number orange and white pegs.
      </li>
      <li>
        1 <b class="orange">Orange</b> peg means 1 tile has the same color and position with the solution
      </li>
      <li>
        1 <b>White</b>  Peg means 1 tile has the same color with the solution
      </li>
      <li>
        Try to find the combination with as few guesses as possible
      </li>
    </ul>
  </div>
  {#if $gameState !== GameState.Playing}
     <div class="game-result">
       <h3 class="result-message">{getAlertMessage(get(gameState))}</h3>
       <div class="guesses">Guesses: {get(guesses).length}</div>
       <div class="buttons">
         <button on:click={restartGame}>
           Play Again
         </button>
       </div>
     </div>
  {/if}
</div>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(28, 29, 51);
    width: 100%;
    height: 100%;
    place-items: center;
    padding: 1.5em ;
    color: #FFFFFF;
  }

  .orange {
    color: #fe9d28
  }

  .game-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 1em;
    row-gap: 0.5em;
  }

  button {
    padding: 0.7em 1.5em;
    border-radius: 5px;
    border: none;
    background: #fe9d28;
    font-weight: 600;
    margin-top: 1em;
    cursor: pointer;
  }

  button:hover {
    background: #ffaa41;
  }

  ul {
    padding: 1em;
  }

  li {
    margin-top: 0.3em;
    font-weight: 300;
    list-style-type: circle;
  }

  h1, h3, h4{
    text-align: center;
  }

  h3, h4, ul {
    margin: 0;
  }
</style>