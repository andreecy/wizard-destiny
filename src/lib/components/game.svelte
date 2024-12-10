<script>
  import CardSlot from './card-slot.svelte';
  import { css } from '$lib/css';
  import { deck } from '$lib/stores/deck';
  import { mount, onMount } from 'svelte';
  import Card from './card.svelte';

  function drawCard() {
    $deck.shuffle();
    const card = $deck.drawCard();
    console.log(card);
    return card;
  }

  onMount(() => {
    const card = drawCard();
    const target = document.querySelector('#slot-0');
    if (target) {
      const cardEl = mount(Card, {
        target,
        props: {
          data: card
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
