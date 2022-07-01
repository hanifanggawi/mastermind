<script lang="ts">
    import { Colors } from "../game/constants";
    import ColorBox from "./ColorBox.svelte"
    import InputModal from "./InputModal.svelte";

    let selectedColor = Colors.Blank

    let open = false
    function setOpen(state: boolean) {
        open = state
    }
</script>

<div class="color-input">
    <ColorBox color={selectedColor} on:click={() => setOpen(!open)}/>
    <input type="text" bind:value={selectedColor} name="color">
    {#if open}
        <div>
            <InputModal bind:selectedColor bind:open/>
        </div>
    {/if}
</div>


<style>
    .color-input {
        position: relative;
    }

    input {
        display: none;
    }
</style>