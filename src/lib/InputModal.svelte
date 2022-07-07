<script lang="ts">
    import { Colors } from "../game/constants";
    import ColorBox from "./ColorBox.svelte";

    export let selectedColor: Colors
    export let open: boolean

    function closeModal() {
        setTimeout(() => {
            open = false
        }, 1)
    }

    const selectionColors = Object.values(Colors).slice(0,6)
</script>

<div class="input-modal" tabindex="0">
    {#each selectionColors as color}
        <label>
            <input on:click={closeModal} type="radio" bind:group={selectedColor} name="selectedColor" value={color}>
            <ColorBox size={1.5} color={color}/>
        </label>
    {/each}
</div>

<style>
    .input-modal {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
        padding: 1em;
        background: #1e1c2d;
        border-radius: 4px;
        position: absolute;
        box-shadow: 0px 0px 15px 5px rgba(29, 29, 29, 0.25);
        left: -4.5em;
        top: 4.5em;
    }

    input {
        display: none;
    }
</style>