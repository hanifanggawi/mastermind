<script lang="ts">
  import { Colors } from "../game/constants";
  import ColorInput from "./ColorInput.svelte";
  import ColorSet from "./ColorSet.svelte";

  const answerColorset =  [
    Colors.Red,
    Colors.Green,
    Colors.Blue,
    Colors.Orange,
  ]

  const emptyColorset = [ Colors.Blank, Colors.Blank, Colors.Blank, Colors.Blank ]
</script>

<div class="game-box">
    <div class="colorset-answer">
        <ColorSet colors={answerColorset}/>
    </div>
    <div class="guesses">
        <ColorSet colors={emptyColorset}/>
        <ColorSet colors={emptyColorset}/>
        <ColorSet colors={emptyColorset}/>
        <ColorSet colors={emptyColorset}/>
        <ColorSet colors={emptyColorset}/>
        <ColorSet colors={emptyColorset}/>
        <ColorSet colors={emptyColorset}/>
    </div>
    <div class="colorset-inputs">
        <ColorInput/>
        <ColorInput/>
        <ColorInput/>
        <ColorInput/>
    </div>
</div>

<style>
    .game-box {
        display: flex;
        flex-direction: column;
        row-gap: 1em;
        grid-template-rows: 1fr 4fr 1fr;
        padding: 4em;
        background-color: hsla(237, 21%, 20%, 1);
    }

    .colorset-answer {
        margin-bottom: 2em;
        padding: 1em;
    }

    .guesses {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 1em;
        grid-area: guesses;
        padding: 1em;
    }

    .colorset-inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 1em;
        margin-top: 2em;
        background-color: hsla(237, 21%, 20%, 1)
    }
</style>