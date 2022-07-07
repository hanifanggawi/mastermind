<script lang="ts">
  import { Colors } from "../game/constants";
  export let size = 1.7
  export let color: Colors
</script>

<div 
  on:click 
  class:debossed={color === Colors.Input || color === Colors.Blank}
  style="
    background:{color || Colors.Blank};
    padding: {size}em
  "
/>

<style>
  div {
    border-radius: 4px;
  }

  .debossed {
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
  }
</style>
