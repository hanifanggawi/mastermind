<script lang="ts">
  import { Colors } from "../game/constants";

  export let size = 2
  export let color: Colors
</script>

<div 
  on:click 
  class:embossed={color == Colors.Blank}
  style="
    background:{color};
    padding: {size}em
  "
/>

<style>
  div {
    cursor: pointer;
    border-radius: 4px;
  }

  .embossed {
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
  }
</style>
