<script lang="ts">
  import { setDeckState } from '$lib/stores/deck.svelte';
  import { setGameplayState } from '$lib/stores/gameplay.svelte';
  import '../app.css';
  let { children } = $props();

  // initialize store
  setDeckState();
  setGameplayState();
</script>

<svelte:head>
  <title>Wizard Destiny</title>
  <meta name="description" content="Dungeon Crawler" />
</svelte:head>

{@render children()}
