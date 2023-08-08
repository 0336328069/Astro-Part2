import type { APIRoute } from "astro"
import axios from "axios"
let apiUrl = import.meta.env.PUBLIC_POKEAPI;

export const post: APIRoute = async ({ request }) => {
    const body = await request.json();
    const { data } = await axios.post(`${apiUrl}/api/login`, body);
    return new Response(JSON.stringify(data), {status: 200})
}