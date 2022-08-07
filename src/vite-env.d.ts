/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelte.JSX {
  interface HTMLProps<T> {
      onclick_outside?: (e: CustomEvent) => void;
  }
}