<script lang="ts">
  import { css } from '$lib/css';
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('mounted');
  });

  const cardWidth = 96;
  const cardHeight = 128;
  const slotWidth = cardWidth + 4;
  const slotHeight = cardHeight + 4;
</script>

<!-- background -->
<div class="flex h-screen w-screen items-center justify-center bg-black">
  <!-- main game screen / canvas -->
  <div class="relative h-[640px] w-[480px] border border-gray-500">
    <!-- slots -->
    <div
      class="absolute left-0 top-36 flex h-36 w-full items-center justify-center gap-4 rounded-lg bg-gray-700"
    >
      {#each Array(4) as num}
        <div
          id="slot-{num}"
          class="rounded-lg border-2 border-b-gray-600 border-l-gray-900 border-r-gray-600 border-t-gray-900 bg-gray-800"
          style={css({ width: slotWidth + 'px', height: slotHeight + 'px' })}
        ></div>
      {/each}
    </div>

    <!-- user slots -->
    <div
      class="absolute left-0 top-80 flex h-36 w-full items-center justify-center gap-6 rounded-lg"
    >
      {#each Array(3) as num}
        <div
          id="user-{num}"
          class="rounded-lg border-2 border-gray-400"
          style={css({ width: cardWidth + 'px', height: cardHeight + 'px' })}
        ></div>
      {/each}
    </div>
    <!-- backpack -->
    <div
      class="absolute left-0 top-[474px] flex h-36 w-full items-center justify-center gap-6 rounded-lg"
    >
      <div
        id="user-backpack"
        class="rounded-lg border-2 border-gray-400"
        style={css({ width: cardWidth + 'px', height: cardHeight + 'px' })}
      ></div>
    </div>

    <!-- card -->
    <div
      class="absolute left-0 top-0 rounded-lg bg-gray-200"
      style={css({ width: cardWidth + 'px', height: cardHeight + 'px' })}
    >
      <p>card</p>
    </div>
  </div>
  <!-- end of game canvas -->
</div>
