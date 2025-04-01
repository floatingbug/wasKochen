export default async function({inputData, token}){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/group/create-group`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: token,
			},
			body: JSON.stringify(inputData),
		});

		return await response.json();
	}
	catch(error){
		console.log(error);
	}
}
