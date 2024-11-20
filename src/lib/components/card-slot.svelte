<script lang="ts">
  import { cardHeight, cardWidth } from '$lib/constants/card';
  import { css } from '$lib/css';

  const props = $props();
</script>

<div
  id={props.id}
  class={props.class}
  style={css({ width: cardWidth + 'px', height: cardHeight + 'px' })}
  role="listitem"
  ondragover={(e) => e.preventDefault()}
  ondrop={(e) => {
    const dropZone = e.target as HTMLDivElement;
    const cardId = e.dataTransfer?.getData('text/plain');
    if (cardId) {
      const card = document.getElementById(cardId);
      if (card) {
        dropZone.appendChild(card);
        e.dataTransfer?.clearData();
      }
    }
  }}
></div>
