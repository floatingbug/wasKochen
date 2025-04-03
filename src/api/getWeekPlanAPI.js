export default async function getMealPlanAPI({token}){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/week-plan/`, {
			method: "GET",
			headers: {
				authorization: token
			}
		});

		const result = await response.json();
		return result;
	}
	catch(error){
		console.log(error);
	}
}
