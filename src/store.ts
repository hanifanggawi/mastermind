import { Writable, writable } from "svelte/store";
import { generateAnswerSet } from "./game";
import { Colorset, GameState, Guess } from "./game/constants";

export const guesses: Writable<Guess[]> = writable([])
export const answerSet: Writable<Colorset> = writable(generateAnswerSet())
export const gameState: Writable<GameState> = writable(GameState.Playing)