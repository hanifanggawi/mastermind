<script lang="ts">
  import { Colors } from "../game/constants";
  export let size = 3.4
  export let color: Colors
</script>

<div 
  on:click 
  class:debossed={color === Colors.Input || color === Colors.Blank}
  style="
    background:{color || Colors.Blank};
    width: {size}em;
    height: {size}em;
  "
>
  <span><slot/></span>
</div>

<style>
  div {
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 1.5em;
    font-weight: bold;
    color: #ffffff;
    cursor: default;
    user-select: none;
    text-decoration: none;
  }

  .debossed {
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.25);
  }
</style>
