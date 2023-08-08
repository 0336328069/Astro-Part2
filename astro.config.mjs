import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { lifecycleLogs } from "./src/integrations/index.ts";
import node from '@astrojs/node';
import svelte from "@astrojs/svelte";


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'middleware',
  }),
  integrations: [tailwind(), svelte(), lifecycleLogs()]
});