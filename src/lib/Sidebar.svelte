<script lang="ts">
</script>

<div class="sidebar">
  <h1>Master<span class="orange">Mind</span> </h1>
  <div class="instructions">
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
</div>

<style>
  .sidebar {
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

  ul {
    padding: 1em;
  }

  li {
    margin-top: 0.3em;
    font-weight: 300;
    list-style-type: circle;
  }

  h1, h4{
    text-align: center;
  }

  h4, ul {
    margin: 0;
  }
</style>