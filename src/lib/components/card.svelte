<script lang="ts">
  import { cardHeight, cardWidth } from '$lib/constants/card';
  import { css } from '$lib/css';
  import type { Card } from '../../types';

  interface CardProps {
    data?: Card;
  }

  let { data }: CardProps = $props();
</script>

<div
  class="cursor-grab rounded-lg bg-gray-200"
  style={css({
    width: cardWidth + 'px',
    height: cardHeight + 'px'
  })}
  id="card1"
  role="listitem"
  draggable="true"
  aria-grabbed="true"
  ondragstart={(e) => {
    e.dataTransfer?.setData('text/plain', e.currentTarget.id);
  }}
>
  <p>{data?.name}</p>
  <p>{data?.value}</p>
</div>
