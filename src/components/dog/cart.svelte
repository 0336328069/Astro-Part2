<script lang="ts">
  import { add } from "../../store/dogStore";
  import type { Dog } from "../../types/dogs";
  export let cart = {} as Dog;

  const onClickCartItem = () => {
    add(cart);
  }
</script>

<div
  class="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter"
>
  <div class="h-72 border-b-2 border-palette-lighter relative">
    <div
      style="display: block; overflow: hidden; position: absolute; inset: 0px; box-sizing: border-box; margin: 0px;"
    >
      <img
        src={cart.img}
        alt=""
        style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
        class="transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
  </div>
  <div class="h-48 relative">
    <div class="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">{cart.name}</div>
    <div class="text-lg text-gray-600 p-4 font-primary font-light">{cart.desc}</div>
    <div class="flex flex-col md:flex-row justify-between items-center text-gray-900 px-4">
        <p class="font-bold text-xl">{cart.price} $</p>
        <button on:click={onClickCartItem}
                class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
          to cart</button>
      </div>
  </div>
</div>

<style>
    .triangle::before{
        content: "";
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1em solid transparent;
        border-left-color: #fff;
    }
</style>
