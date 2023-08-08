import type { APIRoute } from "astro"

export const get: APIRoute = async ({ request }) => {
    const data = [
        {
            id: 1,
            desc: 'This is Dog 1',
            href: '/',
            img: 'https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=1920&q=75',
            name: 'Pit Bull 1',
            price: 10
        },
        {
            id: 2,
            desc: 'This is Dog 2',
            href: '/',
            img: 'https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=1920&q=75',
            name: 'Pit Bull 2',
            price: 20
        },
        {
            id: 3,
            desc: 'This is Dog 3',
            href: '/',
            img: 'https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=1920&q=75',
            name: 'Pit Bull 3',
            price: 30
        },
        {
            id: 4,
            desc: 'This is Dog 4',
            href: '/',
            img: 'https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=1920&q=75',
            name: 'Pit Bull 4',
            price: 40
        },
        {
            id: 5,
            desc: 'This is Dog 5',
            href: '/',
            img: 'https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=1920&q=75',
            name: 'Pit Bull 5',
            price: 50
        },
        {
            id: 6,
            desc: 'This is Dog 6',
            href: '/',
            img: 'https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-fc750eaa.jpg%3Fv%3D1616988549&w=1920&q=75',
            name: 'Pit Bull 6',
            price: 60
        }
    ]
    return new Response(JSON.stringify(data), { status: 200 })
}