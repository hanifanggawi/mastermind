import { Writable, writable } from "svelte/store";
import { generateAnswerSet } from "./game";
import type { Colorset, Guess } from "./game/constants";

export const guesses: Writable<Guess[]> = writable([])
export const answerSet: Writable<Colorset> = writable(generateAnswerSet())