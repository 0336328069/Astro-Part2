<script lang="ts">
  import type { Dog } from "../../types/dogs";
  import Cart from "./cart.svelte";
  export let listDog = [] as Dog[];
</script>
<div class="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
    {#each listDog as dog, i}
		<Cart cart={dog} />
	{/each}
</div>