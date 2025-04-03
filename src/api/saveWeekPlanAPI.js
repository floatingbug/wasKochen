export default async function({token, weekPlan}){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/week-plan`, {
			method: "post",
			headers: {
				"content-type": "application/json",
				authorization: token,
			},
			body: JSON.stringify(weekPlan),
		});

		const result = await response.json();
		return result;
	}
	catch(error){
		console.log(error);
	}
}
