<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Wizard Destiny</title>
  <meta name="description" content="Dungeon Crawler" />
</svelte:head>

{@render children()}
