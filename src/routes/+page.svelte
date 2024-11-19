<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('mounted');
	});

	const cardWidth = 96;
	const cardHeight = 32;
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
					class="h-32 w-24 rounded-lg border-2 border-b-gray-600 border-l-gray-900 border-r-gray-600 border-t-gray-900 bg-gray-800"
					style={'width: `${slotWidth}px`, height: `${slotHeight}px`'}
				></div>
			{/each}
		</div>

		<!-- user slots -->
		<div
			class="absolute left-0 top-80 flex h-36 w-full items-center justify-center gap-6 rounded-lg"
		>
			{#each Array(3) as num}
				<div id="user-{num}" class="h-32 w-24 rounded-lg border-2 border-gray-400"></div>
			{/each}
		</div>
		<!-- backpack -->
		<div
			class="absolute left-0 top-96 flex h-36 w-full items-center justify-center gap-6 rounded-lg"
		>
			<div id="user-backpack" class="h-32 w-24 rounded-lg border-2 border-gray-400"></div>
		</div>

		<!-- card -->
		<div class="absolute left-0 top-0 h-32 w-24 rounded-lg bg-gray-200">
			<p>card</p>
		</div>
	</div>
</div>
