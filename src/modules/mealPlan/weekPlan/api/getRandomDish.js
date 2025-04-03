export default async function(){
	try{
		const response = await fetch(`${import.meta.env.VITE_API_URL}/dish?random=1`, {
			method: "GET",
		});

		const result = await response.json();
		return result;
	}
	catch(error){
		console.log(error);
	}
}
