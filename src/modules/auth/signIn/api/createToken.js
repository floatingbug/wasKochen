export default async function({nameOrMail, password}){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/user/create-token`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				nameOrMail,
				password
			}),
		});

		const result = await response.json();
		return result;
	}
	catch(error){
		console.log(error);
	}
}
