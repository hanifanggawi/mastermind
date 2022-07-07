<script lang="ts">
    import type { Colors, Peg } from "../game/constants";
    import ColorBox from "./ColorBox.svelte";
    import PegBox from "./PegBox.svelte";

    export let colors: Colors[]
    export let pegs: Peg[] = undefined
</script>

<div class="colorset">
    {#each colors as color}
        <ColorBox color={color}/>
    {/each}
    {#if pegs}
        <PegBox pegs={pegs}/>
    {/if}
</div>

<style>
    .colorset {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 1em;
    }
</style>