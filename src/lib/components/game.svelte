<script lang="ts">
  import CardSlot from './card-slot.svelte';
  import { css } from '$lib/css';

  import { mount, onMount } from 'svelte';
  import Card from './card.svelte';
  import type { Card as CardType } from '../../types';
  import { getGameplayState } from '$lib/stores/gameplay.svelte';
  import type { Target } from '../../types';

  const gameplayStore = getGameplayState();

  /**
   flow :
   - start gameplay
   - setiap kali ada action, setelah action dieksekusi, panggil gameplay.checkRefillFields()
   - checkRefillFields akan draws kartu2 baru bila memenuhi kondisi
   - setiap action DnD, check apakah targetnya dropable dengan function checkIsDropable
   - dari result tersebut tentukan reactionnya
  */

  // akan return true bila targetnya sesuai, return false bila target tidak sesuai
  function checkIsDropable(selectedCard: CardType, target: Target) {
    return selectedCard.targets.includes(target);
  }

  onMount(() => {
    // start gameplay
    gameplayStore.startGameplay();

    // preview slot 0
    const slotIndex = 0;
    const target = document.querySelector(`#slot-${slotIndex}`);
    if (target) {
      const cardEl = mount(Card, {
        target,
        props: {
          data: gameplayStore.field[slotIndex]
        }
      });
    }
  });
</script>

<div class="relative h-[640px] w-[480px] border border-gray-500">
  <!-- dungeon slots -->
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
  <div class="absolute left-0 top-80 flex h-36 w-full items-center justify-center gap-6 rounded-lg">
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
</div>
