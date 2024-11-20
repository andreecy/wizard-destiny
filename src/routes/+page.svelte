<script lang="ts">
  import { css } from '$lib/css';
  import Card from '$lib/components/card.svelte';
  import CardSlot from '$lib/components/card-slot.svelte';
</script>

<!-- background -->
<div class="flex h-screen w-screen items-center justify-center bg-black">
  <!-- main game screen / canvas -->
  <div class="relative h-[640px] w-[480px] border border-gray-500">
    <!-- slots -->
    <div
      class="absolute left-0 top-36 flex h-36 w-full items-center justify-center gap-4 rounded-lg bg-gray-700"
    >
      {#each Array(4) as _, i}
        <CardSlot
          id="slot-{i}"
          class="rounded-lg border-2 border-b-gray-600 border-l-gray-900 border-r-gray-600 border-t-gray-900 bg-gray-800"
        />
      {/each}
    </div>

    <!-- user slots -->
    <div
      class="absolute left-0 top-80 flex h-36 w-full items-center justify-center gap-6 rounded-lg"
    >
      {#each Array(3) as _, i}
        <CardSlot id="user-{i}" class="rounded-lg border-2 border-gray-400" />
      {/each}
    </div>
    <!-- backpack -->
    <div
      class="absolute left-0 flex h-36 w-full items-center justify-center gap-6 rounded-lg"
      style={css({ top: '474px' })}
    >
      <CardSlot id="user-backpack" class="rounded-lg border-2 border-gray-400" />
    </div>

    <Card />
  </div>
  <!-- end of game canvas -->
</div>
