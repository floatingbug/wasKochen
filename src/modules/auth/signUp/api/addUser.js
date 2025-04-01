export default async function({name, mail, password}){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				mail,
				password,
			}),
		});

		const result = await response.json();
		return result;
	}
	catch(error){
		console.log(error);
		return;
	}
}
