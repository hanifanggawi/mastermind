<script lang="ts">
  import { GameState } from './game/constants';
  import AlertBox from './lib/AlertBox.svelte';
  import Game from './lib/Game.svelte'
  import Sidebar from './lib/Sidebar.svelte';
  import { gameState } from './store';
</script>

<main>
  <Game/>
  <Sidebar/>
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
    background: hsla(240, 16%, 13%, 1);
    min-width: 100vh;
  }
  
  main {
    display: grid;
    grid-template-columns: min-content 50vh;
    justify-content: center;
    align-items: center;
    background: hsla(240, 16%, 13%, 1);
    height: min-content;
    padding: 1em 10vw;
  }
</style>
