export default async function({dishId}){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish/get-dish-by-id?dishId=${dishId}`, {
			method: "GET",
		});

		const result = await response.json();
		return result;
	}
	catch(error){
		console.log(error);
	}
}
