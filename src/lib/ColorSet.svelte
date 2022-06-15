<script lang="ts">
    import type { Colors } from "../game/constants";
    import ColorBox from "./ColorBox.svelte";

    export let colors: Colors[]
</script>

<div class="colorset">
    {#each colors as color}
        <ColorBox color={color}/>
    {/each}
</div>

<style>
    .colorset {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 1em;
    }
</style>