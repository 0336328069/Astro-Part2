<script>
    import { onMount } from 'svelte';
    import { listDogCart, remove } from '../../store/dogStore.ts';
    let cartItem = JSON.parse(localStorage.getItem('carts'));
    listDogCart.set(cartItem);
</script>
<table class="mx-auto">
    <thead>
        <tr class="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
            <th class="font-primary font-normal px-6 py-4">
                Product
            </th>
            <th class="font-primary font-normal px-6 py-4">
                Quantity
            </th>
            <th class="font-primary font-normal px-6 py-4">
                Price
            </th>
            <th class="font-primary font-normal px-6 py-4">
                Remove
            </th>
        </tr>
    </thead>
    {#if cartItem?.length}
        <tbody class="divide-y divide-palette-lighter" >
            {#each $listDogCart as dog}
                <tr class="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
                    <td class="font-primary font-normal px-6 py-4">
                        {dog.name}
                    </td>
                    <td class="font-primary font-normal px-6 py-4">
                        {dog.qty}
                    </td>
                    <td class="font-primary font-normal px-6 py-4">
                        {dog.price * Number(dog.qty)}
                    </td>
                    <td class="font-primary font-normal px-6 py-4">
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" on:click={remove(dog.id)}>Remove</button>
                    </td>
                </tr>
            {/each}
        </tbody>
    {/if}
</table>