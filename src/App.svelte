<script lang="ts">
  import { GameState } from './game/constants';
  import AlertBox from './lib/AlertBox.svelte';
  import Game from './lib/Game.svelte'
  import { gameState } from './store';
</script>

<main>
  <Game/>
  {#if $gameState !== GameState.Playing}
    <AlertBox state={$gameState}/>
  {/if}
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@200;300;400;500;600;700&display=swap');

  :root, :global(button) {
    font-family: Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    padding: 0;
    margin: 0;
    max-height: 100vh;
  }
  
  main {
    display: grid;
    justify-content: center;
    align-items: center;
    background: hsla(240, 16%, 13%, 1);
    height: 100vh;
  }
</style>
