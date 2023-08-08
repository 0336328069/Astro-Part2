import axios from "axios";
import { sequence } from "astro/middleware";

async function validation(_: any, next: () => any) {
    console.log("validation request");
    const response = await next();
    console.log("validation response");
    return response;
}

async function auth({ cookies, locals, request, redirect }: any, next: () => any) {
	const token = cookies.get("token").value;
    const { url } = request;
 	const { pathname } = new URL(url);
	if (!token && pathname != '/login') {
		// return redirect("/login");
	}
	// Use your own `getUser()` function to validate the user.
	// Return a 405 (Not Allowed) if the user isn't real.
	const user = await axios.get('https://reqres.in/api/user/2');
	if (!user) {
		// return redirect("/login");
	}
	// Attach the loaded user to the `locals` object.
	// Now, it can be read in the page route!
	locals.user = user.data;
	// Return `next()` to return the response.
	return await next();
}

export const onRequest = sequence(validation, auth);
